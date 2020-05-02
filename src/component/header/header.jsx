import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo} from 'assests/logo.svg'
import './header.scss';
import { auth } from '../../firebase/firebase';

import CardIcon from '../card-icon/card-icon';
import CartDropDown from '../card-dropdown/card-dropdown';


import { selectCardHidden} from '../../redux/cart/cart-selector';
import { selectCurrentUser } from '../../redux/user/user-selector';

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/shop'>
          CONTACT
        </Link>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
        )}
        <CardIcon />
      </div>
      { 

        hidden ? null : <CartDropDown /> 
      }
    </div>
  );
  
  const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCardHidden
  });
  
  export default connect(mapStateToProps)(Header);