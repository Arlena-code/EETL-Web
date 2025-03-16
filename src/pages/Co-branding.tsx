import React from 'react';
import { Tabs, Card, Image, Tag } from 'antd';
import type { TabsProps } from 'antd';

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  features: string[];
  image: string;
}

const Products: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      name: '智能ERP系统',
      category: 'enterprise',
      description: '企业资源计划管理系统',
      features: ['财务模块', '供应链管理', '数据分析'],
      image: 'https://example.com/erp.jpg'
    },
    {
      id: 2,
      name: '云协作平台',
      category: 'cloud',
      description: '团队协同办公解决方案',
      features: ['文档协作', '任务管理', '视频会议'],
      image: 'https://example.com/cloud.jpg'
    }
  ];

  const tabItems: TabsProps['items'] = [
    {
      key: 'enterprise',
      label: '企业软件',
      children: (
        <div className="product-list">
          {products.filter(p => p.category === 'enterprise').map((product) => (
            <Card key={product.id} className="product-card">
              <Image src={product.image} preview={false} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className="features">
                {product.features.map((f) => (
                  <Tag key={f} color="blue">{f}</Tag>
                ))}
              </div>
            </Card>
          ))}
        </div>
      )
    },
    {
      key: 'cloud',
      label: '云服务',
      children: (
        <div className="product-list">
          {products.filter(p => p.category === 'cloud').map((product) => (
            <Card key={product.id} className="product-card">
              <Image src={product.image} preview={false} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className="features">
                {product.features.map((f) => (
                  <Tag key={f} color="geekblue">{f}</Tag>
                ))}
              </div>
            </Card>
          ))}
        </div>
      )
    }
  ];

  return (
    <div className="products-page">
      <Tabs 
        defaultActiveKey="enterprise" 
        items={tabItems} 
        tabPosition="left"
        className="product-tabs"
      />
    </div>
  );
};

export default Products;
