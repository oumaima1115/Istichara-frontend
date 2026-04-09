import axios from "axios";

const api = axios.create({
   //  baseURL: `${process.env.REACT_APP_API_URL}/api`,
    baseURL: `http://localhost:5000/api`,
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
export const signup = (data) => api.post("/auth/signup", data);
export const login = (data) => api.post("/auth/login", data);
export const logout = () => api.post("/auth/logout");
export const getProfileById = (id) => api.get(`/user/profile/${id}`);
export const getUsers = (params = {}) => {
  const queryString = new URLSearchParams(params).toString();
  return api.get(`/user/users${queryString ? `?${queryString}` : ''}`);
};
export const updateProfile = (data) => api.put("/user/profile", data);
export const deleteProfile = (data) => api.delete("/user/profile", data);

/* ==========================
   Istichara Routes
========================== */
export const getMyisticharas = () => api.get("/istichara");
export const createIstichara = (data) => api.post("/istichara", data);
export const updateIstichara = (id, data) => api.put(`/istichara/${id}`, data);
export const acceptIstichara = (id) => api.patch(`/istichara/${id}/accept`);
export const refuseIstichara = (id) => api.patch(`/istichara/${id}/refuse`);
export const deleteIstichara = (id) => api.delete(`/istichara/${id}`);

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