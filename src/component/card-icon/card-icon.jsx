import React from 'react';
import './card-icon.scss';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart-action';
import {ReactComponent as CardIcon} from '../../assests/card.svg';
import { selectCartItemsCount } from '../../redux/cart/cart-selector';

const cartIcon = ({ toggleCartHidden, cartCount }) => {
    return (
        <div className="cart-icon">
            <CardIcon  className="shopping-icon" onClick={toggleCartHidden}/>
            <span className="item-count">{cartCount}</span>
        </div>
    )
}

const mapStateToProps = state => {
    console.log('I am being called')
    return({
        cartCount: selectCartItemsCount(state)
    })
}

const mapDispatchToPorps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})


export default connect(mapStateToProps, mapDispatchToPorps)(cartIcon);