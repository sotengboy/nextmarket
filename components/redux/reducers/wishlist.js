const wishlist = (state=[], action) => {
    switch (action.type) {
        case 'ADD_WISHLIST':
            let isNew = true;
            const newWishlist = state.map((item) => {
                if (item.id === action.item.id) {
                    isNew = false;
                    return Object.assign({}, item, {
                        qty: item.qty+1 
                    });
                }
                return item;
            });
            if(isNew) {
                const newItem = action.item;
                newItem.qty = 1;
                return [...state, newItem];
            }else{
                return newWishlist;
            }
            
        default:
            return state
    }
}

export default wishlist;