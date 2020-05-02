import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import {  Route, Switch, Redirect} from 'react-router-dom'

import Home from 'pages/home_page/home_page';
import Shop from 'pages/shop/shop_page';
import Sign from 'pages/sign/signin_and_signup';
import Header from 'component/header/header';
import Checkout from './pages/checkout/checkout-page';

import {auth, createUserProfile  } from './firebase/firebase';

import { setCurrentUser } from './redux/user/user-action';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
      const {setCurrentUser} = this.props;
    /**
     * onAuthStateChanged takes callback as arguments
     *  callback takes users state as argument
     */
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({ currentUser: userAuth})
      // console.log(this.state.currentUser)
       if(userAuth) {
         const userRef = await createUserProfile(userAuth);
      
         userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div >
        <Header  />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/shop' component={Shop} />  
          <Route exact path="/checkout" component={Checkout} />
          <Route exact to='/signin' render={() => this.props.currentUser ? <Redirect to="/" /> : <Sign /> } />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
