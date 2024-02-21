import api from "./api";

//获取导航栏
export const reqMenuData = () => api.get("/menu");

//产品
export const reqProductById = (id) => api.get(`/product/detail?id=${id}`);

//img
export const reqImgList = (type, productId = -1) =>
  api.get(`/img?type=${type}&productId=${productId}`);

// 获取产品页数据
export const reqLevel2Products = (id) => api.get(`/product/level2?id=${id}`);
// 传入三级导航对应产品  返回二级导航id
export const getParent = (id) => api.get(`/menu/getParent?id=${id}`);
