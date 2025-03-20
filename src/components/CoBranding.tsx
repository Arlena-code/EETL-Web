import React from 'react';

import { Row, Col, Image, Card, Typography, Button, Grid } from 'antd';
const { Title } = Typography;
const { useBreakpoint } = Grid;
interface CoBrandingProps {
  brands: { src: string, name: string, company: string, description: string, deliceryTime: string }[]; // 支持外部传入产品图
}
const CoBrandingProduct: React.FC<CoBrandingProps> = ({ brands }) => {
  const screens = useBreakpoint();
  return (
    <div className='mb-30'>
      <Row gutter={{ xs: 10, md: 20 }}>
        {brands.map((product, index) => (
          <Col key={index} xs={12} lg={8} xl={6} className={screens.md ? 'mb-20' : 'mb-10'}>
            <Card hoverable className='h-100'>
              <Image
                preview={false}
                src={product.src}
                height={screens.md ? 200 : 100}
                style={{ objectFit: 'contain',margin: '0 auto' }}
                placeholder={<Image preview={false} src={product.src} />}
              />
              <div className="product-info mt-20">
                <Title level={5} className='mb-5 text-ellipsis' style={{ fontWeight: 'normal' }}>{product.name}</Title>
                <div>
                  <p className={screens.md ? 'mt-0' : 'mb-0 mt-0'} style={{color: '#ff6b35'}}>{product.description}<br/>{product.deliceryTime}</p>
                </div>
                {screens.md ? (
                  <div className='text-right'><Button variant="outlined">查看更多</Button></div>
                ) : ('')}
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CoBrandingProduct;