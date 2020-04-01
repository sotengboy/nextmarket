/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import Link from "next/link";
import DetailProduct from "../buttons/detailProduct";

const WishlistItem = ({ item }) => {
    return (
        <tr>
            <td>
                <img src={item.image} alt={item.title} css={styles.image} />
            </td>
            <td className="detail">
                <strong>
                    <Link href="/product/[id]" as={`/product/${item.id}`}>
                        <a>{item.title}</a>
                    </Link>
                </strong>
                <p>{item.description}</p>
                <DetailProduct productid={item.id} />
            </td>
            <td className="price">
                <p>{item.price}</p>
            </td>
            <td className="qty">{item.qty}</td>
        </tr>
    );
};
const styles = {
    image: css`
    width: 200px;
    height: 200px;
  `
}
export default WishlistItem;
