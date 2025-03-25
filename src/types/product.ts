// 如果数据直接返回数组
export type ApiResponse<T> = T[];

interface ProductSpecs {
  brand: string;
  capacity: string;
  material: string;
  package: string;
  packaging: string;
  qualification: string | null;
  rated_voltage: string;
  specification: string | null;
  spq: number;
  temperature_range: string;
  tolerance: string;
}

export interface Product {
  create_time: string;
  get_product_type_display: string;
  part_number: string;
  product_code: string;
  product_type: string;
  specification: string;
  specs: ProductSpecs;
}

export interface Pagination {
  current: number;
  pageSize: number;
  total: number;
}

// 定义一个新类型，扩展 Pagination 并添加搜索和筛选属性
export interface ProductFetchParams extends Pagination {
    search?: string;
    rated_voltage?: string | null;
    package?: string | null;
    material?: string | null;
    capacity?: string | null;
  }