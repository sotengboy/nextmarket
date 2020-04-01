/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import { useRouter } from "next/router";
import { connect } from 'react-redux';
import Link from "next/link";
import AddToCart from '../../components/buttons/addToCart';
import AddToWishlist from '../../components/buttons/addToWishlist';
import Layout from "../../components/layout/column";

function ProductContent({catalog}) {
    const router = useRouter();
    const id = router.query.id;
    const product = catalog.filter((product) => product.id === parseInt(id))[0];

    return (
        <div css={styles.product}>
            <Link href="/"><a css={styles.back}>{`<<`} Back To Home</a></Link>
            <div css={styles.product_inner}>
                <div css={styles.left}>
                    <div css={styles.image}>
                        <img src={product.image} alt={product.title} />
                    </div>
                </div>            
                <div css={styles.right}>
                    <h1>{product.title}</h1>
                    <p css={styles.price}>
                        Rp. {product.price}
                    </p>
                    <div css={styles.description}>
                        <p>{product.description}</p>
                    </div>
                    <div className="shop">
                        <div className="actions">
                            <AddToCart product={product} />
                            <AddToWishlist product={product} />
                        </div>
                    </div>
                </div>        
            </div>     
        </div>
    );
}

const mapStateToProps = (state) => ({
    catalog: state.catalog
})
const styles = {
    product: css`
        margin-top: 10px;
    `,
    product_inner: css`
        padding: 20px;
    `,
    image: css`
        border: 1px solid #999;
    `,
    left: css`
        float:left
    `,
    right: css`
        float: left;
        margin-left: 50px; 
    `,
    price: css`
        font-size: 18px;
        font-weight: 700;
    `,
    description: css`
        color: #5D5E5E;
    `,
    back: css`
        background: #C7240A;
        border-radius: 5px;
        color: #fff;
        padding: 10px;
    `
}
export default Layout(
    connect(
        mapStateToProps,
        null
    )(ProductContent)
);