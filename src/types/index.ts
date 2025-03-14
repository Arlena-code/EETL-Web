// 添加Footer相关类型
export interface FooterLink {
  title: string;
  path: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}