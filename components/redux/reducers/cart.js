const cart = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CART':
            let isNew = true;
            const newCart = state.map((item) => {
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
                return newCart;
            }
            
        default:
            return state
    }
}

export default cart;