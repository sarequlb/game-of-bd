// use local storage to manage cart data
const addToDb = id => {
    let activityCart = getActivityCart();
    // add quantity
    const quantity = activityCart[id];
    if (!quantity) {
        activityCart[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        activityCart[id] = newQuantity;
    }
    localStorage.setItem('activity-cart', JSON.stringify(activityCart));
}

const removeFromDb = id => {
    const activityCart = getActivityCart();
    if (id in activityCart) {
        delete activityCart[id];
        localStorage.setItem('activity-cart', JSON.stringify(activityCart));
    }
}

const getActivityCart = () => {
    let activityCart = {};

    //get the activity cart from local storage
    const storedCart = localStorage.getItem('activity-cart');
    if (storedCart) {
        activityCart = JSON.parse(storedCart);
    }
    return activityCart;
}

const deleteActivityCart = () => {
    localStorage.removeItem('activity-cart');
    localStorage.removeItem('break-time')
}

export {
    addToDb,
    removeFromDb,
    getActivityCart,
    deleteActivityCart
}
