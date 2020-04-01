/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import { connect } from "react-redux";
import React,{ useState } from "react";
import Modal from 'react-modal';
import WishlistItem from "./item";
Modal.setAppElement('#__next');

const WishlistModal = ({ wishlist }) => {
    let content = "";
    let qtyWishlist = 0;
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
      }
      function closeModal(){
        setIsOpen(false);
      }
      function afterOpenModal() {
        // references are now sync'd and can be accessed.
       // subtitle.style.color = '#f00';
      }
    wishlist.map(function(item) {
        qtyWishlist += item.qty;
    });

    if (wishlist.length) {
        content = (
            <div css={styles.table_wrapper}>
                <table width="100%" >
                    <thead css={styles.table_item}>
                        <tr>
                            <th colSpan="2">
                                Product Detail
                            </th>
                            <th>Price</th>
                            <th>Qty</th>
                        </tr>
                    </thead>
                    <tbody>
                        {wishlist.map(item => (
                            <WishlistItem item={item} key={item.id} />
                        ))}
                    </tbody>
                </table>
            </div>
        );
    } else {
        content = (
            <>
                <div>
                    You have no wishlist at the moment...
                </div>
            </>
        );
    }
    
    return (
        <>
            <a
                onClick={openModal}
            >{`Wishlist (${qtyWishlist})`}</a>
        <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}

          contentLabel="Example Modal"
        >

          <h2>Wishlist</h2>
          <button onClick={closeModal} css={styles.close}>Close</button>
          <div>{content}</div>
        
        </Modal>
      </div>
        </>
    );
};

const mapStateToProps = state => ({
    wishlist: state.wishlist
});
const styles = {
    table_wrapper: css`
        border: 1px solid #999;
    `,
    table_item: css`
        border: 1px solid #999;
    `,
    close: css`
        background: #D3021B;
        color: #fff;
        border: 0px;
        margin-bottom: 10px;
        padding: 10px
    `
}
export default connect(mapStateToProps, null)(WishlistModal);
