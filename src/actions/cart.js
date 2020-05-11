export const addToCart = obj=>({
    type:'ADD-TO-CART',
    payload:obj
})

export const removeFromCart = id=>({
    type:'REMOVE-FROM-CART',
    payload:id
})