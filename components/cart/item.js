import Price from "../catalog/price";
import Link from "next/link";

const CartItem = ({item}) => {
    return (
        <tr>
            <td className="image">
                <img src={item.image} alt={item.name} />
            </td>
            <td className="detail">
                <strong><Link href="/product/[id]"as={`/product/${item.id}`} ><a>{item.name}</a></Link></strong>
                <p>{item.desc}</p>
            </td>
            <td className="price">
                <Price price={item.price} />
            </td>
            <td className="qty">{item.qty}</td>
            <td className="sub-total"><Price price={item.qty * item.price}/></td>
        </tr>
    );
}

export default CartItem;
