/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import Link from "next/link";

const CartItem = ({item}) => {
    return (
        <tr>
            <td>
                <img src={item.image} alt={item.title} css={styles.image} />
            </td>
            <td>
                <strong><Link href="/product/[id]"as={`/product/${item.id}`} ><a>{item.name}</a></Link></strong>
                <p>{item.description}</p>
            </td>
            <td >
                <p>{item.price}</p>
            </td>
            <td>{item.qty}</td>
            <td><p>{item.qty * item.price}</p></td>
        </tr>
    );
}
const styles = {
    image: css`
        width: 200px;
        height: 200px;
    `,
}
export default CartItem;
