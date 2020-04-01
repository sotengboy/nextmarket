import { useState } from "react";
import Layout from '../components/layout/column';
import Header from "../components/header"
import Searchbar from '../components/searchbar';
import ProductList from '../pages/products/productlist';

const Catalog = () => {
  const [keyword, setKeyword] = useState("");

  const handleSearch = (keyword) => {
      setKeyword(keyword);
  }
      return (
        <div >
            <Header />
            <Searchbar keyword={keyword} handleSearch={handleSearch} />
            <ProductList keyword={keyword} />
        </div>
      );
};

 export default Layout(Catalog);