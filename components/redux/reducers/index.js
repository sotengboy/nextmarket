import { combineReducers } from 'redux';
import catalog from "./catalog";
import cart from "./cart";
import wishlist from "./wishlist";
import catalogFilter from "./catalogFilter";

export default combineReducers({
    catalog,
    cart,
    wishlist,
    catalogFilter
})