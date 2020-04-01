/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import { connect } from "react-redux";
import { VisibilityFilters} from "../redux/actions/catalogFilterAction";
import AddToCart from "../buttons/addToCart";
import AddToWishlist from "../buttons/addToWishlist";
import DetailProduct from "../buttons/detailProduct";
const ProductList = ({ catalog, keyword }) => {

    const products = catalog.filter(function(product) {
        if (keyword !== "") {
            const result = product.title
                .toLowerCase()
                .indexOf(keyword.toLowerCase());
            if (result > -1) {
                return product;
            }
        } else {
            return product;
        }
    });

    if (!products.length) {
        return <div className="noresult">Product not found...</div>;
    }

    return (
        <div css={styles.item_row}>
            {products.map(product => (
                <div  key={product.id}>
                    <div css={styles.item}>
                        <div css={styles.item_in}>
                           
                            <img
                                src={product.image}
                                title={product.title}
                                css={styles.Image}
                            />
                            <div css={styles.item_title}>
                                <span>{product.title}</span>
                            </div>
                            <div css={styles.item_price}>
                                <p>{product.price}</p>
                            </div>
                            <div css={styles.item_description}>
                                <p>{product.description}</p>
                            </div>
                                <AddToCart product={product} />
                                <AddToWishlist product={product} />
                                <DetailProduct productid={product.id} />
                            
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const getVisibleProducts = (catalog, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return catalog;
        case VisibilityFilters.SHOW_BARU:
            return catalog.filter(product => product.category === filter);
        case VisibilityFilters.SHOW_REKONDISI:
            return catalog.filter(product => product.category === filter);
        default:
            throw new Error('Unknown filter: '+filter)
    }
}

const mapStateToProps = state => ({
    catalog: getVisibleProducts(state.catalog, state.catalogFilter)
})
const styles = {
    item_row: css`
        max-width: 1200px;
        margin-top: 100px;
        display: grid;
        grid-template-columns: auto auto auto auto;
        grid-gap: 10px;
        padding: 10px;
        
    `,
    item: css`
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
    `,
    item_in: css`
        box-sizing: border-box;
        margin: 5px; 
        padding: 10px;
        border: 1px solid #e7fcde;
        background: #f6fff2;
    `,
    item_title: css`
        font-weight: bold;
        font-size: 16px;
    `,
    item_price: css`
        color: #f44242;
        font-size: 16px;
    `,
    item_description: css`
        color: #888;
        font-size: 12px;
    `,
    Image: css`
        width: 100%;
        height: auto;
    `
    
}
export default connect(
    mapStateToProps,
    null
)(ProductList);