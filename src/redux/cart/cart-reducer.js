import CartTypes from './cart-types';
import {addItemToCart, removeItem} from './cart-utils'

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
  
    switch(action.type) {
        case CartTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartTypes.ADD_ITEM: 
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.item)
            }
        case CartTypes.REMOVE_ITEM: 
            return {
                ...state,
                cartItems: removeItem(state.cartItems,action.item )
            }
        case CartTypes.CLEAR_ITEM: 
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.item.id ) 
            }
        default: 
            return state
    }
}

export default cartReducer;