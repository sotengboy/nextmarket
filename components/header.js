import React from 'react';
/** @jsx jsx */
import {css, jsx} from "@emotion/core";

const Header = () => (
    <div css={styles.Heads}>
    <div css={styles.Logo}>NEXT MARKET <img src="/assets/images/store.png" alt="logo" css={styles.Image} /></div>
    <div css={styles.Cart}>Cart () Wishlist ()</div>
    <div css={styles.Search}>
      <div css={styles.Input}>
        <input type="text" placeholder="Cari Barang..." css={styles.Cari} /> 
        Filter by Category <select css={styles.Cate}><option>Cat 1</option><option>Cat 2</option></select>
      </div>
    </div>
  </div>
  );
  const styles = {
    Heads: css`
      display: flex;
      flex-direction: column;
      height: 150px;
      width: 100%;
      text-align: left;
      float: left;
      background: #33A2FF;
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
    Search: css`
      background: #112332;
      height: 70px;
      vertical-align: middle;
      align-items: center;
      color: #33A2FF;
    `,
    Input: css`
      margin-left: 20px;
      margin-top: 10px;
    `,
    Cari: css`
      margin-right: 20px;
      height: 15px;
      padding: 10px;
      width: 300px;
    `,
    Cate: css`
      width: 100px;
      height: 35px;
      border-radius: 5px;
      margin-left: 10px;
    `
  }
  export default Header;