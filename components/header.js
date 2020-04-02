/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import { connect } from "react-redux";
import Link from "next/link";
import WishlistModal from "./wishlist";

function Header({cart}) {
  let qtyCart = 0;
    cart.map(function(item) {
        qtyCart += item.qty;
    });
    return (
    <div css={styles.Heads}>
      <div css={styles.Logo}>NEXT MARKET <img src="/assets/images/store.png" alt="logo" css={styles.Image} /></div>
      <div css={styles.Cart}><Link href="/cart"><a>{`Cart (${qtyCart})`}</a></Link> <WishlistModal/></div>
    </div>
    )
    };
    const mapStateToProps = (state) => ({
      cart: state.cart,
      wishlist: state.wishlist
  })
  const styles = {
    Heads: css`
      display: flex;
      flex-direction: column;
      height: 150px;
      width: 100%;
      text-align: left;
      float: left;
      background: #33A2FF;
      flex-wrap: wrap;
      margin-bottom: 20px;
    `,
    Logo: css`
      height: 64px;
      float: left;
      font-size: 40px;
      margin-top:20px;
      margin-left: 20px;
    `,
    Image: css`
      height: 32px;
      width: 32px;
    `,
    Cart: css`
      margin-left: 20px;
    `,
    
    Cate: css`
      width: 100px;
      height: 35px;
      border-radius: 5px;
      margin-left: 10px;
    `
  }
  export default connect(mapStateToProps, null)(Header);