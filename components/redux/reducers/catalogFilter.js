const catalogFilter = (state = '', action) => {
    switch (action.type) {
        case "SET_FILTER":
            return (action.filter) ? action.filter : 'all';
        default:
            return state;
    }
};

export default catalogFilter;
