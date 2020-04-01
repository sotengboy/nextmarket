import Button from "./default";
import { connect } from "react-redux";
import { addToWishlist } from "../redux/actions/wishlistAction";

const AddToWishlist = ({ product, wishlist, _addToWishlist }) => {
    const handleOnCLick = () => {
        _addToWishlist(product);
    };
    const getQty = productid => {
        const item = wishlist.find(item => item.id === productid);
        return item ? item.qty : 0;
    };
    return (
        <Button
            className="add-to-wishlist"
            title="Add to Wishlist"
            handleOnCLick={handleOnCLick}
            qty={getQty(product.id)}
        />
    );
};

const mapStateToProps = state => ({
    wishlist: state.wishlist
});

const mapDispatchToProps = dispatch => ({
    _addToWishlist: (item) => dispatch(addToWishlist(item))
})
export default connect(mapStateToProps, mapDispatchToProps)(AddToWishlist);