import Link from "next/link";
import DetailProduct from "../buttons/detailProduct";

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
                <DetailProduct productid={item.id} />
            </td>
            <td className="price">
                <p>{item.price}</p>
            </td>
            <td className="qty">{item.qty}</td>
        </tr>
    );
};

export default WishlistItem;
