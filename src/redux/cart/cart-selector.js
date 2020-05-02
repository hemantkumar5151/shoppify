import { createSelector } from 'reselect';



const selectCart = state => state.cart;
const selectHidden = state => state.cart

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
) 

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((acc, cur) => {
        return acc+ cur.quantity
    },0) 
)

export const selectCardTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((acc, cur) => {
        return acc+ cur.quantity * cur.price
    },0)
)
export const selectCardHidden = createSelector(
    [selectHidden],
    (cart) => cart.hidden
)