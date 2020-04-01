import { connect } from "react-redux";
/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import Layout from "../components/layout/column";
import CartItem from "../components/cart/item";
import Button from "../components/buttons/default";

const Cart = ({cart}) => {
    let content = '';
    if(cart.length) {
        content = (
            <div css={styles.cart}>
                <table css={styles.items}>
                    <thead>
                        <tr>
                            <th css={styles.description} colSpan="2">
                                Product Description
                            </th>
                            <th className="price">Price</th>
                            <th className="qty">Qty</th>
                            <th className="sub-total">Sub Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map(item => (
                            <CartItem item={item} key={item.id} />
                        ))}
                    </tbody>
                </table>
                <div className="items-actions">
                    <Button href="/" type="link" title="Continue Shopping" />
                </div>
            </div>
        );
    }else{
        content = (
            <>
                <div className="noresult">There is no item in your cart...</div>
                <div className="cart-actions">
                    <Button href="/" type="link" title="Continue Shopping" />
                </div>
            </>
        );
    }

    return (
        <div>
            <h1>Shopping Cart</h1>
            {content}
        </div>
    )
}
const styles = {
    cart: css`
        border: 1px solid #999;
    `,
    items: css`
        padding: 10px;
        width: 100%;
    `,
    description: css`
        width: 200px;
    `
}
const MapStateToProps = state => ({
    cart: state.cart
});

export default Layout(connect(MapStateToProps, null)(Cart));
