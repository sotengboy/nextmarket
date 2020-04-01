import React from 'react';
import Link from 'next/link';
import AddToCart from '../../components/buttons/addToCart';
import AddToWishlist from '../../components/buttons/addToWishlist';
import Layout from "../../components/layout/1column";
import { useRouter } from "next/router";
import { connect } from 'react-redux';
import Price from '../../components/catalog/price';
import { Tabs, Tab } from 'react-bootstrap';

function ProductContent({catalog}) {
    const router = useRouter();
    const id = router.query.id;
    const product = catalog.filter((product) => product.id === parseInt(id))[0];

    return (
        <div className="page-product">
            <div className="product-top">
                <div className="gallery">
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="shop">
                    <h1>{product.name}</h1>
                    <p className="price">
                        <Price price={product.price} />
                    </p>
                    <div className="actions">
                        <AddToCart product={product} />
                        <AddToWishlist product={product} />
                    </div>
                </div>
            </div>
            <Tabs defaultActiveKey="description" id="pdp-tabs">
                <Tab eventKey="description" title="Description">
                    <div className="p-3">
                        <p>{product.desc}</p>
                    </div>
                </Tab>
            </Tabs>
        </div>
    );
}

const mapStateToProps = (state) => ({
    catalog: state.catalog
})

export default Layout(
    connect(
        mapStateToProps,
        null
    )(ProductContent)
);