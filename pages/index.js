import { useState } from "react";
import Layout from '../components/layout/column';
import Searchbar from '../components/searchbar';
import ProductList from '../components/products/productlist';

const Catalog = () => {
  const [keyword, setKeyword] = useState("");

  const handleSearch = (keyword) => {
      setKeyword(keyword);
  }
      return (
        <div>
            <Searchbar keyword={keyword} handleSearch={handleSearch} />
            <ProductList keyword={keyword} />
        </div>
      );
};

 export default Layout(Catalog);