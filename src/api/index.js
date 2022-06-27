//api进行统一管理
import requests from './requests';
// import mockRequests from './mockAjax';

//三级联动接口
///api/product/getBaseCategoryList get 无参数

//发送请求：axios发请求结构promise对象
export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' });
