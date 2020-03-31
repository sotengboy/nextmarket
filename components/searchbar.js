/** @jsx jsx */
import {css, jsx} from "@emotion/core";

const Searchbar = ({ keyword, handleSearch }) => {

    return(
    <div css={styles.Search}>
      <div css={styles.Input}>
            <form>
                <input type="text" name="search" placeholder="Cari Barang..." css={styles.Cari}/> 
                Filter by Category <select css={styles.Cate}><option>Cat 1</option><option>Cat 2</option></select>
            </form>
      </div>
    </div>
    )
}
const styles = {
    Search: css`
      background-color: #112332;
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
    `
}
export default Searchbar;