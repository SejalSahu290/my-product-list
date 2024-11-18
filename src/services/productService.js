import apiClient from "./apiService";

const fetchProducts = async () => {
    const response = await apiClient.get("/products");
    return response.data;
};

const GetProducts = async (id) => {
    const response = await apiClient.get(`/products/${id}`);
    return response.data;
};

const PostProducts = (data) => {
    return apiClient.post('/products', data);
};

// const editProducts = async (data) => {
//     const response = await apiClient.patch(`/products/${data.id}`, data);
//     return response;
// };

const EditProducts = async (data) => {
    const response = await apiClient.patch(`/products/${data.id}`, data);
    return response;
};


const DeleteProducts = async (id) => {
    await apiClient.delete(`/products/${id}`);
};

export default {
    fetchProducts,
    GetProducts,
    PostProducts,
    EditProducts,
    DeleteProducts
};
