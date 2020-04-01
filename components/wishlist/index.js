import { connect } from "react-redux";
import WishlistItem from "./item";
import Button from "../buttons/default";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import styles from "../layout/html/header.module.css";

const WishlistPopup = ({ wishlist }) => {
    let content = "";
    let qtyWishlist = 0;
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    wishlist.map(function(item) {
        qtyWishlist += item.qty;
    });

    if (wishlist.length) {
        content = (
            <>
                <table className="table-items">
                    <thead>
                        <tr>
                            <th className="detail" colSpan="2">
                                Product Detail
                            </th>
                            <th className="price">Price</th>
                            <th className="qty">Qty</th>
                        </tr>
                    </thead>
                    <tbody>
                        {wishlist.map(item => (
                            <WishlistItem item={item} key={item.id} />
                        ))}
                    </tbody>
                </table>
            </>
        );
    } else {
        content = (
            <>
                <div className="noresult">
                    You have no wishlist at the moment...
                </div>
            </>
        );
    }

    return (
        <>
            <a
                className={styles.navLink}
                onClick={() => handleShow()}
            >{`WISHLIST(${qtyWishlist})`}</a>
            <Modal
                show={show}
                onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Wishlist</Modal.Title>
                </Modal.Header>
                <Modal.Body>{content}</Modal.Body>
            </Modal>
        </>
    );
};

const mapStateToProps = state => ({
    wishlist: state.wishlist
});

export default connect(mapStateToProps, null)(WishlistPopup);
