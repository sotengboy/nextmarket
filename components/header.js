/** @jsx jsx */
import {css, jsx} from "@emotion/core";

const Header = () => (
    <div css={styles.Heads}>
      <div css={styles.Logo}>NEXT MARKET <img src="/assets/images/store.png" alt="logo" css={styles.Image} /></div>
      <div css={styles.Cart}>Cart () Wishlist ()</div>
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
    
    Cate: css`
      width: 100px;
      height: 35px;
      border-radius: 5px;
      margin-left: 10px;
    `
  }
  export default Header;