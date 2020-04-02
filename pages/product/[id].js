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
    function formatMoney(amount, decimalCount = 2, decimal = ",", thousands = ".") {
        try {
          decimalCount = Math.abs(decimalCount);
          decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
      
          const negativeSign = amount < 0 ? "-" : "";
      
          let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
          let j = (i.length > 3) ? i.length % 3 : 0;
      
          return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
        } catch (e) {
          console.log(e)
        }
    };
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
                        Rp. {formatMoney(product.price)}
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