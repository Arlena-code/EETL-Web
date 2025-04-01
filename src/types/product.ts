// 如果数据直接返回数组
export type ApiResponse<T> = T[];

// MLCC 产品规格接口
interface MLCCSpecs {
  rated_voltage: string;
  package: string;
  material: string;
  temperature_range: string;
  capacity: string;
  tolerance: string;
  packaging: string;
  qualification: string | null;
  brand: string;
  spq: number;
}

// Aluminum 产品规格接口
interface AluminumElectrolyticSpec {
  rated_voltage: string;
  size: string;
  capacitance: string;
  tolerance: string;
  temperature_range: string;
  esr: string;
  ripple_current: string;
  ripple_freq: string;
  endurance: string;
  shape: string;
  qualification: string;
}

// MLCC 产品接口
export interface MLCCProduct {
  create_time: string;
  get_product_type_display: string;
  part_number: string;
  product_code: string;
  product_type: 'MLCC';
  specification: string;
  specs: MLCCSpecs;
}

// Aluminum 产品接口
export interface AluminumProduct {
  create_time: string;
  get_product_type_display: string;
  part_number: string;
  product_code: string;
  product_type: 'Aluminum';
  specification: string;
  specs: AluminumElectrolyticSpec;
}

export interface Pagination {
  current: number;
  pageSize: number;
  total: number;
}

// 定义 MLCC 产品的查询参数
export interface MLCCProductFetchParams extends Pagination {
  search?: string;
  rated_voltage?: string | null;
  package?: string | null;
  material?: string | null;
  capacity?: string | null;
}

// 定义 Aluminum 产品的查询参数
export interface AluminumProductFetchParams extends Pagination {
  search?: string;
  rated_voltage?: string | null;
  size?: string | null;
  capacitance?: string | null;
}

// 判断是否为 MLCC 产品的类型守卫
export function isMLCCProduct(product: MLCCProduct | AluminumProduct): product is MLCCProduct {
    return product.product_type === 'MLCC';
}

// 判断是否为 Aluminum 产品的类型守卫
export function isAluminumProduct(product: MLCCProduct | AluminumProduct): product is AluminumProduct {
    return product.product_type === 'Aluminum';
}