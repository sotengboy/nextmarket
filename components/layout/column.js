
const layoutStyle = {
    padding: 20
};

const Layout = Page => {
    return () => (
        <div style={layoutStyle}>
            
            <>
                <Page />
            </>

        </div>
    );
}

export default Layout;