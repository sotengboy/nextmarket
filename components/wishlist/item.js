import Price from "../catalog/price";
import Link from "next/link";
import ViewProductLink from "../buttons/viewProductLink";

const WishlistItem = ({ item }) => {
    return (
        <tr>
            <td className="image">
                <img src={item.image} alt={item.name} />
            </td>
            <td className="detail">
                <strong>
                    <Link href="/product/[id]" as={`/product/${item.id}`}>
                        <a>{item.name}</a>
                    </Link>
                </strong>
                <p>{item.desc}</p>
                <ViewProductLink productid={item.id} />
            </td>
            <td className="price">
                <Price price={item.price} />
            </td>
            <td className="qty">{item.qty}</td>
        </tr>
    );
};

export default WishlistItem;
