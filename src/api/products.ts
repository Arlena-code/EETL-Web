// src/api/products.ts
import axios from 'axios';
import { MLCCProduct, AluminumProduct, MLCCProductFetchParams, AluminumProductFetchParams } from '../types/product';

// 修改 API_BASE 定义，确保末尾有 /
const API_BASE = process.env.NODE_ENV === 'development' 
  ? 'http://localhost:8000/api/' 
  : '/api/';

// 获取 MLCC 产品的函数
export const fetchMLCCProducts = async (params: MLCCProductFetchParams): Promise<MLCCProduct[]> => {
  try {
    const response = await axios.get<MLCCProduct[]>(`${API_BASE}products/`, {
      params: {
        ...params,
        product_type: 'MLCC'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching MLCC products:', error);
    return [];
  }
};

// 获取 Aluminum 产品的函数
export const fetchAluminumProducts = async (params: AluminumProductFetchParams): Promise<AluminumProduct[]> => {
  try {
    const response = await axios.get<AluminumProduct[]>(`${API_BASE}products/`, {
      params: {
        ...params,
        product_type: 'Aluminum'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching Aluminum products:', error);
    return [];
  }
};

// 原有的获取单个产品详情的函数，可根据需要调整返回类型
export const fetchProductDetail = async (partNumber: string): Promise<MLCCProduct | AluminumProduct | null> => {
  try {
    // 修正路径拼接
    const response = await axios.get<MLCCProduct | AluminumProduct>(`${API_BASE}products/${partNumber}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product detail:', error);
    return null;
  }
};