import CartTypes from './cart-types';

export const toggleCartHidden = () => ({
    type: CartTypes.TOGGLE_CART_HIDDEN
})

export const addItem = item => ({
    type: CartTypes.ADD_ITEM,
    item
})

export const clearItem = item => ({
    type: CartTypes.CLEAR_ITEM,
    item
})

export const removeItem = item => ({
    type: CartTypes.REMOVE_ITEM,
    item
})