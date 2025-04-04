// src/api/products.ts
import axios from 'axios';
import { MLCCProduct, 
  AluminumProduct, 
  FBARProduct, 
  InductorProduct, 
  CeramicRFProduct, 
  FerriteBeadProduct, 
  MLCCProductFetchParams, 
  AluminumProductFetchParams, 
  FBARProductFetchParams, 
  InductorProductFetchParams, 
  CeramicRFProductFetchParams,
  FerriteBeadProductFetchParams
} from '../types/product';

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

// 获取 FBAR 产品的函数
export const fetchFBARProducts = async (params: FBARProductFetchParams): Promise<FBARProduct[]> => {
  try {
    const response = await axios.get<FBARProduct[]>(`${API_BASE}products/`, {
      params: {
        ...params,
        product_type: 'FBAR'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching FBAR products:', error);
    return [];
  }
};

// 获取 Inductor 产品的函数
export const fetchInductorProducts = async (params: InductorProductFetchParams): Promise<InductorProduct[]> => {
  try {
    const response = await axios.get<InductorProduct[]>(`${API_BASE}products/`, {
      params: {
        ...params,
        product_type: 'Inductor'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching Inductor products:', error);
    return [];
  }
};

// 获取 CeramicRF 产品的函数
export const fetchCeramicRFProducts = async (params: CeramicRFProductFetchParams): Promise<CeramicRFProduct[]> => {
  try {
    const response = await axios.get<CeramicRFProduct[]>(`${API_BASE}products/`, {
      params: {
        ...params,
        product_type: 'CeramicRF'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching CeramicRF products:', error);
    return [];
  }
};

// 获取 FerriteBead 产品的函数
export const fetchFerriteBeadProducts = async (params: FerriteBeadProductFetchParams): Promise<FerriteBeadProduct[]> => {
  try {
    const response = await axios.get<FerriteBeadProduct[]>(`${API_BASE}products/`, {
      params: {
        ...params,
        product_type: 'FerriteBead'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching FerriteBead products:', error);
    return [];
  }
};


// 获取单个产品详情的函数，根据需要调整返回类型
export const fetchProductDetail = async (partNumber: string): Promise<MLCCProduct | AluminumProduct | FBARProduct | InductorProduct | CeramicRFProduct | FerriteBeadProduct | null> => {
  try {
    // 修正路径拼接
    const response = await axios.get<MLCCProduct | AluminumProduct | FBARProduct | InductorProduct | CeramicRFProduct | FerriteBeadProduct>(`${API_BASE}products/${partNumber}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product detail:', error);
    return null;
  }
};

// 搜索函数
export const fetchSearchResults = async (search: string): Promise<(MLCCProduct | AluminumProduct | FBARProduct | InductorProduct | CeramicRFProduct | FerriteBeadProduct)[]> => {
  try {
    const response = await axios.get<(MLCCProduct | AluminumProduct | FBARProduct | InductorProduct | CeramicRFProduct | FerriteBeadProduct)[]>(`${API_BASE}products/`, {
      params: {
        search: search,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching search results:', error);
    return [];
  }
};