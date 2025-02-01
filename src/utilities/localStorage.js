//  Step 18 we want to get the stored cart
const getStoredCart = () =>{
    const storedCartString = localStorage.getItem('cart');
    // if they find cart inside it will make parse and show
    if(storedCartString){
        return JSON.parse(storedCartString);
    }
    // otherwise return a empty string
    return [];
};

// step 20 save cart to local storage
const saveCartToLS = cart =>{
    // then we make that cart stringified
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}



// step 19 if we want to anything in localStorage
const addToLS = id =>{
    const cart = getStoredCart();
    cart.push(id);
    // save to local storage save this cart to ls
    saveCartToLS(cart);
}



// step 27
const removeFromLS = id =>{
    const cart = getStoredCart();
    // removing every id
    const remaining = cart.filter(idx => idx !== id);
    saveCartToLS(remaining);
}
export{addToLS, getStoredCart, removeFromLS}