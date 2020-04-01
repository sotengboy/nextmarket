import Button from "./default";
import { connect } from "react-redux";
import { addToCart } from "../redux/actions/cartAction";

const AddToCart = ({product, cart, _addToCart}) => {
    const handleOnCLick = () => {
        _addToCart(product);
    }
    
    const getQty = (productid) => {
        const item = cart.find(item => item.id === productid);
        return item ? item.qty : 0;
    }

    return (
        <>
            <Button
                title="Add to Cart"
                handleOnCLick={handleOnCLick}
                qty={getQty(product.id)}
            />
        </>
    );
};

const mapStateToProps = state => ({
    cart: state.cart
});
const mapDispatchToProps = dispatch => ({
    _addToCart: product => dispatch(addToCart(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddToCart);