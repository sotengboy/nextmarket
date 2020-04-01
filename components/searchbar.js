/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import Filter from "../pages/products/filter";

const Searchbar = ({ keyword, handleSearch }) => {
  const _handleSearch = e => {
    e.preventDefault();
    handleSearch(e.target.search.value);
  };
  const _onChange = e => {
    e.preventDefault();
    handleSearch(e.target.value);
  };
    return(
      <div css={styles.Search}>
        <form onSubmit={_handleSearch}>
          <input type="text" name="search" placeholder="Cari Barang..." css={styles.Cari} onChange={_onChange} /> 
        </form>
        <Filter />
      </div>
    )
}
const styles = {
  Search: css`
    background: #112332;
    height: 70px;
    vertical-align: middle;
    align-items: center;
    color: #33A2FF;
    padding-bottom: 50px;
  `,
  Cari: css`
    margin-right: 20px;
    height: 15px;
    padding: 10px;
    width: 300px;
    float: left
  `,
    
}  
export default Searchbar;