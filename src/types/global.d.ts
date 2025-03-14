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
  