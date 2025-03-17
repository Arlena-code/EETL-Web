import React from 'react';

import { Row, Col, Image, Card, Typography, Button } from 'antd';
const { Title } = Typography;

interface CoBrandingProps {
  brands: { src: string, name: string, company: string, description: string, deliceryTime: string }[]; // 支持外部传入产品图
}
const CoBrandingProduct: React.FC<CoBrandingProps> = ({ brands }) => {
  return (
    <div className='mb-30 p-10'>
      <Row gutter={20}>
        {brands.map((product, index) => (
          <Col key={index} md={12} lg={8} xl={6} className='mb-20'>
            <Card hoverable className='h-100'>
              <Image
                preview={false}
                src={product.src}
                height={200}
                style={{ objectFit: 'contain',margin: '0 auto' }}
                placeholder={<Image preview={false} src={product.src} />}
              />
              <div className="product-info mt-20">
                <Title level={4} className='mb-5 text-ellipsis' style={{ fontWeight: 'normal' }}>{product.name}</Title>
                <div>
                  <p className='mt-0' style={{color: '#ff6b35'}}>{product.description}<br/>{product.deliceryTime}</p>
                </div>
                <div className='text-right'><Button variant="outlined">查看更多</Button></div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CoBrandingProduct;