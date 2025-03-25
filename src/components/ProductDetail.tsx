// src/components/ProductDetail.tsx
import { FC, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Spin, Descriptions, Typography, Breadcrumb, Flex, Divider, Button, Tag, Grid } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { fetchProductDetail } from '../api/products';
import { Product } from '../types/product';

const { Title, Text } = Typography;
const { useBreakpoint } = Grid;
import ProductImg_mlcc from '@/assets/images/product/mlcc.png';

const keyToChineseMap: { [key: string]: string } = {
  rated_voltage: '额定电压',
  package: '封装',
  material: '材质',
  temperature_range: '温度范围',
  capacity: '容值',
  tolerance: '精度',
  packaging: '包装方式',
  qualification: '产品资格',
  brand: '品牌',
  spq: 'SPQ',
  // 可以根据实际情况添加更多映射
};
const ProductDetail: FC = () => {
  const { part_number } = useParams<{ part_number: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const screens = useBreakpoint();

  useEffect(() => {
    const loadData = async () => {
      try {
        if (!part_number) return;
        const data = await fetchProductDetail(part_number);
        setProduct(data);
      } catch (error) {
        console.error('加载产品详情失败:', error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [part_number]);

  if (loading) {
    return <Spin size="large" style={{ display: 'block', margin: '20px auto' }} />;
  }

  if (!product) {
    return <div style={{ padding: 20 }}>产品未找到</div>;
  }

  // 根据 product_type 确定图片地址
  let product_image = '';
  if (product.product_type === 'MLCC') {
    // 这里需要替换成实际的 MLCC 产品图地址
    product_image = ProductImg_mlcc; 
  } else {
    // 默认图片地址，可根据实际情况修改
    product_image = ''; 
  }

  return (
    <div style={{ paddingBottom: '80px' }}>
      <div style={{ background: '#f5f5f5' }}>
        <div className="container">
          <Breadcrumb
            className="breadcrumbs"
            items={[
              {
                title: (
                  <>
                    <HomeOutlined />
                    <span>首页</span>
                  </>
                ),
                href: '/',
              },
              {
                title: '产品列表',
                href: '/products',
              },
              {
                title: product.part_number,
              },
            ]}
          />
        </div>
      </div>

      <div className="container" style={{ marginTop: 30 }}>
        
        <Flex gap={screens.md ? 48 : 30} align="stretch" wrap="wrap">
          {/* 产品图片区 */}
          <div className='text-center' style={{
            flex: screens.md ? '' : '0 0 100%',
            background: '#fff',
            borderRadius: 8,
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            padding: 16
          }}>
            <img 
              src={product_image} 
              alt={product.get_product_type_display}
            />
          </div>
          {/* 产品基础信息区 */}
          <Flex vertical gap={16} style={{ flex: '1' }}>
            <Title level={1} className='mb-0 text-primary'>
              {product.part_number}
            </Title>

            <Divider style={{ margin: '0' }} />

            <Flex vertical gap={12}>
              <Flex gap={8} align="center">
                <Text style={{ minWidth: 80 }}>产品类型:</Text>
                <Text>{product.get_product_type_display}</Text>
              </Flex>
              <Flex gap={8} align="center">
                <Text style={{ minWidth: 80 }}>物料编码:</Text>
                <Text>{product.product_code}</Text>
              </Flex>
              
              <Flex gap={8} align="center">
                <Text style={{ minWidth: 80 }}>规格型号:</Text>
                <Text>{product.specification || '-'}</Text>
              </Flex>

              <Button 
                type="primary" 
                size="large"
                style={{ 
                  width: 160,
                  marginTop: 16,
                  boxShadow: '0 2px 6px rgba(24,144,255,0.3)'
                }}
              >
                <span style={{ fontSize: 16 }}>立即询价</span>
              </Button>
            </Flex>
          </Flex>
          
          {/* 库存信息区 */}
          <div className='' style={{
            flex: screens.md ? '0 0 330px' : '0 0 100%',
            background: '#f9fafe',
            borderRadius: 8,
            padding: 24,
            border: '1px solid #e8eef7'
          }}>
            <Title level={4} style={{ 
              color: '#1a3353',
              marginBottom: 16,
              fontWeight: 500
            }}>
              库存信息
            </Title>
            <Flex vertical gap={12}>
              <Flex justify="space-between">
                <Text type="secondary">现货库存</Text>
                <Tag color="success" style={{marginInlineEnd: 0}}>库存充足</Tag>
              </Flex>
              <Flex justify="space-between">
                <Text type="secondary">交期</Text>
                <Text strong>3-5工作日</Text>
              </Flex>
              <Flex justify="space-between">
                <Text type="secondary">最小起订量</Text>
                <Text strong>{product.specs.spq} pcs</Text>
              </Flex>
            </Flex>
          </div>
        </Flex>
        <Divider className={screens.md ? 'mt-50' : 'mt-30'} />
        <div className={screens.md ? 'mt-40 mb-40' : 'mt-20 mb-40'} style={{ marginTop: 24 }}>
          <Title level={4} style={{ marginBottom: 16 }}>
            技术规格
          </Title>
          <Descriptions bordered column={screens.md ? 2 : 1}>
            {Object.entries(product.specs).filter(([key]) => key !== 'id' && key !== 'product').map(([key, value]) => (
              <Descriptions.Item 
                key={key} 
                label={keyToChineseMap[key] || key} // 如果有映射则显示中文，否则显示原英文
              >
                {key === 'spq' && value ? `${value} pcs` : value || '-'}
              </Descriptions.Item>
            ))}
          </Descriptions>
        </div>

        <div style={{ marginTop: 24, textAlign: 'right' }}>
          <Link to="/products-mlcc">返回产品列表</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;