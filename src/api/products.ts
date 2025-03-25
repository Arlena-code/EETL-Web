// src/api/products.ts
import axios from 'axios';
import { Product, ApiResponse, ProductFetchParams } from '../types/product';

// 修改 API_BASE 定义，确保末尾有 /
const API_BASE = process.env.NODE_ENV === 'development' 
  ? 'http://localhost:8000/api/' 
  : '/api/';

export const fetchProductByPartNumber = async (part_number: string): Promise<Product> => {
  try {
    // 拼接请求地址
    const response = await axios.get(`${API_BASE}products/${part_number}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product detail:', error);
    throw error;
  }
};

export const fetchProducts = async (params: ProductFetchParams & {
  search?: string;
  rated_voltage?: string | null;
  package?: string | null;
  material?: string | null;
  capacity?: string | null;
}): Promise<ApiResponse<Product>> => {
  try {
    const response = await axios.get<ApiResponse<Product>>(`${API_BASE}products/`, {
      params: {
        page: params.current,
        page_size: params.pageSize,
        search: params.search,
        rated_voltage: params.rated_voltage,
        package: params.package,
        material: params.material,
        capacity: params.capacity,
        product_type: 'mlcc' // 如果你需要过滤产品类型
      }
    });
    return response.data;
  } catch (error) {
    console.error('获取产品数据失败:', error);
    return [];
  }
};

export const fetchProductDetail = async (partNumber: string): Promise<Product | null> => {
  try {
    // 修正路径拼接
    const response = await axios.get<Product>(`${API_BASE}products/${partNumber}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product detail:', error);
    return null;
  }
};