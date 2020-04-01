export const getCatalog = (category) => ({
    type: 'GET_CATALOG',
    category
});

export const addProduct = product => ({
    type: "ADD_PRODUCT",
    product
});