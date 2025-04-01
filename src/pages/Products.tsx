import React from 'react';
import { Flex, Image, Divider, Typography, theme, Row, Col, Grid, Card } from 'antd';
import LeftBar from '../components/common/LeftBar';
const { useToken } = theme;
const { useBreakpoint } = Grid;
const { Title, Paragraph } = Typography;
import CoBrandingProduct from '../components/CoBranding';
import { useTranslation } from 'react-i18next';
import bannerCoBranding from '@/assets/images/banner-cobrand.jpg';
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
  const { t, i18n } = useTranslation();
  const { token } = useToken();
  const screens = useBreakpoint();
  const industryZones = [
    {
      title: t('productCenter.industryZones.Car.title'),
      description: t('productCenter.industryZones.Car.description'),
      image: lidarSvg
    },
    {
      title: t('productCenter.industryZones.AIrobot.title'),
      description: t('productCenter.industryZones.AIrobot.description'),
      image: AIRobortSvg
    },
    {
      title: t('productCenter.industryZones.SmartDevices.title'),
      description: t('productCenter.industryZones.SmartDevices.description'),
      image: smartSvg
    },
    {
      title: t('productCenter.industryZones.industrial.title'),
      description: t('productCenter.industryZones.industrial.description'),
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
          {i18n.language !== 'en' ? (
            <div>
              <Divider className='divider-text text-light'>Products</Divider>
              <Title className='text-center' level={2} style={{fontSize: screens.md ? token.fontSizeHeading1 : '1.5rem'}}>产品中心</Title>
            </div>
          )
            : (<Divider className='divider-text text-light'><Title className='mb-0' level={2}>Products</Title></Divider>)
          }
        </div>
      </div>
      
      <div className='bg-light pt-40 pb-60'>
        <div className='container'>
          
          <Flex vertical={!screens.md} gap={16}>
            
            <div style={{width: i18n.language !== 'en' ? 240 : 280}}><LeftBar /></div>

            <div className='products-content flex-1'>
              <div className='products-title mt-20 mb-20'>
                <Title className='text-center' level={1} style={{fontWeight: 'normal'}}>{t('page.product.title')}</Title>
                <Paragraph className='text-indent' style={{maxWidth: 1000,margin: '0 auto'}}>{t('productCenter.description')}</Paragraph>
              </div>
              <div className={`${screens.md ? 'p-30' : ''} products-center`}>
                {/* 新增专区分类卡片部分 */}
                <div className='industry-zones'>
                  {/* 修改部分 */}
                  <Row gutter={[24,24]}>
                    {industryZones.map((zone, index) => (
                      <Col key={index} span={24} md={12}>
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
            <Divider className='divider-text'>Agent brands</Divider>
            <Title className='text-center text-primary' level={3}>{t("productCenter.Agentbrands.title")}</Title>
          </div>
          <div style={{padding: screens.md ? '20px 0 20px' : '0'}}>
            <Flex gap={0} wrap justify="center">
              {brands1.map((brand, index) => {
                return (
                  <Card className={screens.md ? 'p-20' : ''} key={index} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: screens.md ? 'auto' : '33.33%'}}>
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
                  <Card className={screens.md ? 'p-20' : ''} key={index} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: screens.md ? 'auto' : '25%'}}>
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
          <div className={screens.md ? 'mb-30' : ''}>
            <Divider className='divider-text'>Product</Divider>
            <Title className='text-center text-primary' level={3}>精选产品</Title>
          </div>
          <CoBrandingProduct brands={brandTaiyo} />
        </div>
      </div>
    </div>
  );
};

export default Products;
