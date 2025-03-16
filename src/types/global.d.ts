declare module '*.module.less' {
    const classes: { [key: string]: string };
    export default classes;
  }
  
  interface ImportMetaEnv {
    readonly VITE_API_BASE: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }

  interface Product {
    id: number;
    name: string;
    // 根据实际需求扩展其他字段
}

// 更新 ProductSwiper 的类型定义
const ProductSwiper: React.FC<{ products: Product[] }>;
  