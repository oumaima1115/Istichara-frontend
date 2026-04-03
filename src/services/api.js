import axios from "axios";

const api = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/api`,
});

/* ==========================
   Interceptor (JWT)
========================== */
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

/* ==========================
   User Auth Routes
========================== */
export const signup = (data) => api.post("/users/signup", data);
export const login = (data) => api.post("/users/login", data);
export const logout = () => api.post("/users/logout");
export const getProfile = () => api.get("/users/profile");
export const getUsers = () => api.get("/user/users");
export const updateProfile = (data) => api.put("/users/profile", data);
export const deleteProfile = (data) => api.delete("/users/profile", data);

/* ==========================
   Istichara Routes
========================== */
export const getMyisticharas = () => api.get("/istichara");
export const createIstichara = (data) => api.post("/istichara", data);
export const updateIstichara = (id, data) => api.put(`/istichara/${id}`, data);
export const cancelIstichara = (id) => api.delete(`/istichara/${id}`);

/* ==========================
   Reviews
========================== */
export const getReviews = () => api.get("/review");
export const addReview = (data) => api.post("/review", data);
export const updateReview = (id, data) => api.put(`/review/${id}`, data);
export const deleteReview = (id) => api.delete(`/review/${id}`);

/* ==========================
   Coupons
========================== */
export const createCoupon = (data) =>  api.post("/coupon", data);
export const getCoupons = () =>  api.get("/coupon");
export const updateCoupon = (id, data) =>  api.put(`/coupon/${id}`, data);
export const deleteCoupon = (id) =>  api.delete(`/coupon/${id}`);

export default api;