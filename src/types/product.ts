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

// FBAR 产品规格接口
interface FBARSpec {
  frequency_band: string;
  process: string;
  function: string;
  insertion_loss: string;
  attenuation: string;
  isolation: string;
  input_power: string;
  impedance: string;
  dimensions: string;
  temperature_range: string;
  rohs: string;
}

// Inductor 产品规格接口
interface InductorSpec {
  inductance: string;
  size: string;
  thickness: string;
  rated_current: string;
  dc_superimposed_max: string;
  dc_superimposed_typ: string;
  temp_rise_max: string;
  temp_rise_typ: string;
  dc_resistance_max: string;
  dc_resistance_typ: string;
  inductance_tolerance: string;
  temperature_range: string;
  shape: string;
  qualification: string;
}

// CeramicRF 产品规格接口
interface CeramicRFSpec {
  application: string;
  category: string;
  passband_freq_1: string;
  passband_freq_2: string;
  passband_freq_3: string;
  insertion_loss_max: string;
  dimensions: string;
  temperature_range: string;
}

// FerriteBead 产品规格接口
interface FerriteBeadSpec {
  impedance_100mhz: string;
  impedance_1ghz: string;
  size: string;
  thickness: string;
  rated_current_85: string;
  dc_resistance_max: string;
  impedance_tolerance: string;
  temperature_range: string;
  external_dimensions: string;
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

// FBAR 产品接口
export interface FBARProduct {
  create_time: string;
  get_product_type_display: string;
  part_number: string;
  product_code: string;
  product_type: 'FBAR';
  specification: string;
  specs: FBARSpec;
}

// Inductor 产品接口
export interface InductorProduct {
  create_time: string;
  get_product_type_display: string;
  part_number: string;
  product_code: string;
  product_type: 'Inductor';
  specification: string;
  specs: InductorSpec;
}

// CeramicRF 产品接口
export interface CeramicRFProduct {
  create_time: string;
  get_product_type_display: string;
  part_number: string;
  product_code: string;
  product_type: 'CeramicRF';
  specification: string;
  specs: CeramicRFSpec;
}

// FerriteBead 产品接口
export interface FerriteBeadProduct {
  create_time: string;
  get_product_type_display: string;
  part_number: string;
  product_code: string;
  product_type: 'FerriteBead';
  specification: string;
  specs: FerriteBeadSpec;
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

// 定义 FBAR 产品的查询参数
export interface FBARProductFetchParams extends Pagination {
  search?: string;
  frequency_band?: string | null;
  process?: string | null;
  function?: string | null;
}

// 定义 Inductor 产品的查询参数
export interface InductorProductFetchParams extends Pagination {
  search?: string;
  inductance?: string | null;
  size?: string | null;
  rated_current?: string | null;
}

// 定义 CeramicRF 产品的查询参数
export interface CeramicRFProductFetchParams extends Pagination {
  search?: string;
  application?: string | null;
  category?: string | null;
  passband_freq_1?: string | null;
}

// 定义 FerriteBead 产品的查询参数
export interface FerriteBeadProductFetchParams extends Pagination {
  search?: string;
  impedance_100mhz?: string | null;
  size?: string | null;
  rated_current_85?: string | null;
}

// 判断是否为 MLCC 产品的类型守卫
export function isMLCCProduct(product: MLCCProduct | AluminumProduct | FBARProduct | InductorProduct | CeramicRFProduct | FerriteBeadProduct): product is MLCCProduct {
    return product.product_type === 'MLCC';
}

// 判断是否为 Aluminum 产品的类型守卫
export function isAluminumProduct(product: MLCCProduct | AluminumProduct | FBARProduct | InductorProduct | CeramicRFProduct | FerriteBeadProduct): product is AluminumProduct {
    return product.product_type === 'Aluminum';
}

// 判断是否为 FBAR 产品的类型守卫
export function isFBARProduct(product: MLCCProduct | AluminumProduct | FBARProduct | InductorProduct | CeramicRFProduct | FerriteBeadProduct): product is FBARProduct {
  return product.product_type === 'FBAR';
}

// 判断是否为 Inductor 产品的类型守卫
export function isInductorProduct(product: MLCCProduct | AluminumProduct | FBARProduct | InductorProduct | CeramicRFProduct | FerriteBeadProduct): product is InductorProduct {
  return product.product_type === 'Inductor';
}

// 判断是否为 CeramicRF 产品的类型守卫
export function isCeramicRFProduct(product: MLCCProduct | AluminumProduct | FBARProduct | InductorProduct | CeramicRFProduct | FerriteBeadProduct): product is CeramicRFProduct {
  return product.product_type === 'CeramicRF';
}

// 判断是否为 FerriteBead 产品的类型守卫
export function isFerriteBeadProduct(product: MLCCProduct | AluminumProduct | FBARProduct | InductorProduct | CeramicRFProduct | FerriteBeadProduct): product is FerriteBeadProduct {
  return product.product_type === 'FerriteBead';
}