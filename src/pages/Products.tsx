import React from 'react';
import { Flex, Image, Divider, Typography, theme, Row, Col, Grid, Card } from 'antd';
import LeftBar from '../components/common/LeftBar';
const { useToken } = theme;
const { useBreakpoint } = Grid;
const { Title, Paragraph } = Typography;
import CoBrandingProduct from '../components/CoBranding';

import bannerCoBranding from '@/assets/images/banner-cobrand.png';
import lidarSvg from '@/assets/icons/lidar.svg';
import AIRobortSvg from '@/assets/icons/AIRobort.svg';
import smartSvg from '@/assets/icons/smart-devices.svg';
import Aiicon from '@/assets/icons/AiIcon.svg';

import productTaiyo1 from '@/assets/images/product/brands/taiyo1.png';
import productTaiyo2 from '@/assets/images/product/brands/taiyo2.png';
import productTaiyo3 from '@/assets/images/product/brands/taiyo3.png';
import productTaiyo4 from '@/assets/images/product/brands/taiyo4.png';
import logoCompany01 from '@/assets/images/logo_company_01.png';
import logoCompany02 from '@/assets/images/logo_company_02.png';
import logoCompany03 from '@/assets/images/logo_company_03.png';
import logoCompany04 from '@/assets/images/logo_company_04.png';
import logoCompany05 from '@/assets/images/logo_company_05.png';
import logoCompany06 from '@/assets/images/logo_company_06.png';
import logoCompany07 from '@/assets/images/logo_company_07.png';
const Products: React.FC = () => {

  const { token } = useToken();
  const screens = useBreakpoint();
  const industryZones = [
    {
      title: '车载',
      description: '我们的电子元器件广泛应用于车载系统，为汽车的智能化、电动化提供可靠支持，涵盖了从动力系统到娱乐系统的多个方面。',
      image: lidarSvg
    },
    {
      title: 'AI机器人',
      description: '在AI机器人领域，我们的产品助力机器人实现高效的感知、决策和执行能力，推动机器人技术在工业、服务等多个场景的应用。',
      image: AIRobortSvg
    },
    {
      title: '智能穿戴设备',
      description: '针对智能穿戴设备市场，我们提供高性能的元器件，帮助实现清晰的显示、稳定的通信和便捷的交互功能，如智能手表、智能手环、智能眼镜等，其中的电子元器件用于实现健康监测、消息提醒、语音通话等功能。',
      image: smartSvg
    },
    {
      title: '消费类智能眼镜',
      description: '针对消费类智能眼镜市场，我们提供高性能的元器件，帮助实现清晰的显示、稳定的通信和便捷的交互功能，提升用户体验。',
      image: Aiicon
    }
  ];
  const brandTaiyo = [
    { 
      src: productTaiyo1,
      name: '陶瓷电容器',
      company: 'Taiyo Yuden',
      description: '2000多款产品',
      deliceryTime: '三个工作日內出貨'
    },
    { src: productTaiyo2,
      name: '能源设备-电容',
      company: 'Taiyo Yuden',
      description: '2000多款产品',
      deliceryTime: '三个工作日內出貨'
    },
    { src: productTaiyo3,
      name: '模块',
      company: 'Taiyo Yuden',
      description: '2000多款产品',
      deliceryTime: '三个工作日內出貨'
    },
    { src: productTaiyo4,
      name: '多层陶瓷器件',
      company: 'Taiyo Yuden',
      description: '2000多款产品',
      deliceryTime: '三个工作日內出貨'
    }
  ];

  const brands1 = [
    { 
      src: logoCompany01,
      name: 'Taiyo Yuden',
    },
    { 
      src: logoCompany02,
      name: 'ELNA',
    },
    { 
      src: logoCompany03,
      name: 'HRS',
    }
  ]
  const brands2 = [
    { 
      src: logoCompany04,
      name: 'PROSEMI',
    },
    { 
      src: logoCompany05,
      name: 'ROHM',
    },
    { 
      src: logoCompany06,
      name: 'SUNWAY',
    },
    { 
      src: logoCompany07,
      name: 'INVSEMI',
    },
  ]
  return (
    <div className="products-page">
      <div className="position-relative">
        <Image
          width={'100%'}
          preview={false}
          src={bannerCoBranding}
          style={{ height: screens.md ? '250px' : '150px', objectFit: 'cover', objectPosition: '50% 50%' }}
          placeholder={
            <Image
              preview={false}
              src={bannerCoBranding}
            />
          }
        />
        <div className='banner-text' style={{ 
          maxWidth: '600px',
          width: '80%',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <Divider className='divider-text text-light'>Products</Divider>
          <Title className='text-center' level={2} style={{fontSize: token.fontSizeHeading1}}>产品中心</Title>
        </div>
      </div>
      
      <div className='bg-light pt-40 pb-60'>
        <div className='container'>
          
          <Flex gap={16}>
            
            <div style={{width: 240}}><LeftBar /></div>

            <div className='products-content flex-1'>
              <div className='products-title mt-20 mb-20'>
                <Title className='text-center' level={1} style={{fontWeight: 'normal'}}>产品中心</Title>
                <Paragraph className='text-indent' style={{maxWidth: 1000,margin: '0 auto'}}>EETL作为一家专业的电子元器件代理商，产品中心涵盖各类电子元配件，包括电阻、电容、电感、二极管、三极管等基础元器件，以及传感器、连接器、电源管理模块等。产品广泛应用于消费电子、通信、汽车电子、工业控制等领域。公司与多家知名厂商长期合作，提供高品质、可靠的产品及一站式服务，满足不同客户需求，助力客户在市场竞争中脱颖而出。</Paragraph>
              </div>
              <div className='products-center p-30'>
                {/* 新增专区分类卡片部分 */}
                <div className='industry-zones'>
                  {/* 修改部分 */}
                  <Row gutter={[24,24]}>
                    {industryZones.map((zone, index) => (
                      <Col key={index} span={12}>
                        <div className='industry-zone-card'>
                          <div className='card-content p-20'>
                            <img className='bg-image' src={zone.image} />
                            <Title className='text-center' level={3} style={{fontWeight: 'normal',padding: screens.md ? '20px 0 20px' : '10px 0 10px'}}>{zone.title}</Title>
                            <Paragraph style={{padding: screens.md ? '0 0 20px' : '0px 0 10px', position: 'relative', zIndex: 2}}>{zone.description}</Paragraph>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              </div>
            </div>
          </Flex>
        </div>
      </div>
      <div className='container pb-60'>
        <div style={{paddingTop: screens.xxl ? 60 : screens.xl ? 40 : 20}}>
          <div className='mb-30'>
            <Divider className='divider-text'>Branding</Divider>
            <Title className='text-center text-primary' level={2}>代理品牌</Title>
          </div>
          <div style={{padding: screens.md ? '20px 0 20px' : '0'}}>
            <Flex gap={0} wrap justify="center">
              {brands1.map((brand, index) => {
                return (
                  <Card className='p-20' key={index} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div className='brand-card'>
                      <Image src={brand.src} alt={brand.name} preview={false} />
                    </div>
                  </Card>
                );
              })}
            </Flex>
            <Flex gap={0} wrap justify="center">
              {brands2.map((brand, index) => {
                return (
                  <Card className='p-20' key={index} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div className='brand-card'>
                      <Image src={brand.src} alt={brand.name} preview={false} />
                    </div>
                  </Card>
                );
              })}
            </Flex>
          </div>
        </div>

        <div style={{paddingTop: screens.xxl ? 60 : screens.xl ? 40 : 20}}>
          <div className='mb-30'>
            <Divider className='divider-text'>Product</Divider>
            <Title className='text-center text-primary' level={2}>精选产品</Title>
          </div>
          <CoBrandingProduct brands={brandTaiyo} />
        </div>
      </div>
    </div>
  );
};

export default Products;
