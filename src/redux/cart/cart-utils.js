
export const addItemToCart = (cartItems, cartItemToAdd) => {
    const exixstingItem = cartItems.find(item => item.id === cartItemToAdd.id)  
    if(exixstingItem) {
        return cartItems.map(cartItem => {
            return cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1} : cartItem
        })
    } 
    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}

export const removeItem = (cartItems, remItem) => {
    const deleteItem = cartItems.find(item => item.id === remItem.id)

    if(deleteItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== remItem.id);
    }
    return cartItems.map(cartItem => {
        return cartItem.id === remItem.id ? 
            {...cartItem, quantity: cartItem.quantity - 1 }: cartItem 
    })
}