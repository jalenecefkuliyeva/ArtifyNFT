export const addProduct = ({ photo, title, price }) => ({


});

export const editProduct =(id,update)=>({
    type:"UPDATE_PRODUCT",
    id,update
})

export const deleteProduct = (id) => {

}

export const getProduct = (product) => ({
    type: "GET_PRODUCT",
    product
})

