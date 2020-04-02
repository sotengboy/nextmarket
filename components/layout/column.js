import Header from "../header";
import AddProduct from "../products/addproduct";

const layoutStyle = {
    padding: 20
};
const Layout = Page => {
    return () => (
        <div style={layoutStyle}>
            <Header />
            <main>
                <Page />
            </main>
            <AddProduct />
        </div>
    );
}

export default Layout;