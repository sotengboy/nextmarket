import Button from "./default"

const DetailProduct = ({ products, productid }) => {
    return (
            <Button
                href="/product/[id]" as={`/product/${productid}`}
                title="View"
                type="link"
            />
    );
};

export default DetailProduct;