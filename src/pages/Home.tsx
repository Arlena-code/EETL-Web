import React from 'react';
import { useTranslation } from 'react-i18next';
import { Carousel, Row, Col, Typography, Divider, Space, Button, Tabs, Image, Grid  } from 'antd';
import type { CarouselRef } from 'antd/es/carousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper'; // 引入 Swiper 类型
import { Autoplay } from 'swiper/modules';
import type { TabsProps } from 'antd';
import '@/assets/styles/swiper.min.css';

import ProductSwiper from '../components/ProductSwiper';
import NewsPage from '../components/NewsPage';
const { useBreakpoint } = Grid;
const { Title, Paragraph } = Typography;
import banner1 from '@/assets/images/banner1.jpg';
import banner2 from '@/assets/images/banner2.jpg';
import banner3 from '@/assets/images/banner3.jpg';
import logoCompany01 from '@/assets/images/logo_company_01.png';
import logoCompany02 from '@/assets/images/logo_company_02.png';
import logoCompany03 from '@/assets/images/logo_company_03.png';
import logoCompany04 from '@/assets/images/logo_company_04.png';
import logoCompany05 from '@/assets/images/logo_company_05.png';
import logoCompany06 from '@/assets/images/logo_company_06.png';
import logoCompany07 from '@/assets/images/logo_company_07.png';
import SolutionIcon from '@/assets/icons/slogan1.svg';
import DevIcon from '@/assets/icons/slogan2.svg';
import TrophyIcon from '@/assets/icons/slogan3.svg';
import TeamIcon from '@/assets/icons/slogan4.svg';

import productTaiyo1 from '@/assets/images/product/brands/taiyo1.png';
import productTaiyo2 from '@/assets/images/product/brands/taiyo2.png';
import productTaiyo3 from '@/assets/images/product/brands/taiyo3.png';
import productTaiyo4 from '@/assets/images/product/brands/taiyo4.png';
import productTaiyo5 from '@/assets/images/product/brands/taiyo5.png';
import productTaiyo6 from '@/assets/images/product/brands/taiyo6.png';
import productELNA1 from '@/assets/images/product/brands/ELNA_HVHT.jpg';
import productELNA2 from '@/assets/images/product/brands/ELNA_RJF.jpg';
import productELNA3 from '@/assets/images/product/brands/ELNA_RTZ.jpg';
import productELNA4 from '@/assets/images/product/brands/ELNA_RVR.jpg';
import productELNA5 from '@/assets/images/product/brands/ELNA_RVT.jpg';
import productELNA6 from '@/assets/images/product/brands/ELNA_RYT.jpg';
import productHRS1 from '@/assets/images/product/brands/HRS_1.png';
import productHRS2 from '@/assets/images/product/brands/HRS_2.png';
import productHRS3 from '@/assets/images/product/brands/HRS_3.png';
import productHRS4 from '@/assets/images/product/brands/HRS_4.png';
import productHRS5 from '@/assets/images/product/brands/HRS_5.png';
import productHRS6 from '@/assets/images/product/brands/HRS_6.png';
import productHRS7 from '@/assets/images/product/brands/HRS_7.png';
import productHRS8 from '@/assets/images/product/brands/HRS_8.png';
import productProsemi1 from '@/assets/images/product/brands/Prosemi_1.png';
import productProsemi2 from '@/assets/images/product/brands/Prosemi_2.png';
import productProsemi3 from '@/assets/images/product/brands/Prosemi_3.png';
import productProsemi4 from '@/assets/images/product/brands/Prosemi_4.png';
import productProsemi5 from '@/assets/images/product/brands/Prosemi_5.png';
import productProsemi6 from '@/assets/images/product/brands/Prosemi_6.png';
import productProsemi7 from '@/assets/images/product/brands/Prosemi_7.png';
import productProsemi8 from '@/assets/images/product/brands/Prosemi_8.png';
import productProsemi9 from '@/assets/images/product/brands/Prosemi_9.png';
import productROHM1 from '@/assets/images/product/brands/ROHM_IC.png';
import productROHM2 from '@/assets/images/product/brands/ROHM_LED.png';
import productROHM3 from '@/assets/images/product/brands/ROHM_3.png';
import productROHM4 from '@/assets/images/product/brands/ROHM_4.png';
import productROHM5 from '@/assets/images/product/brands/ROHM_5.png';
import productROHM6 from '@/assets/images/product/brands/ROHM_6.png';
import productROHM7 from '@/assets/images/product/brands/ROHM_7.png';
import productROHM8 from '@/assets/images/product/brands/ROHM_8.png';
import productROHM9 from '@/assets/images/product/brands/ROHM_9.png';

const Home: React.FC = () => {
  const { t, i18n  } = useTranslation();
  const carouselRef = React.useRef<CarouselRef>(null);
  const swiperRefs = React.useRef<{ [key: string]: SwiperType | null }>({});
  const screens = useBreakpoint();
  const slogans = [
    {
      title: '1',
      content: t('page.slogan.text1'),
      icon: <img className='icon-slogan' src={SolutionIcon} alt="Solution" />
    },
    {
      title: '2',
      content: t('page.slogan.text2'),
      icon: <img className='icon-slogan' src={DevIcon} alt="DevIcon" />
    },
    {
      title: '3',
      content: t('page.slogan.text3'),
      icon: <img className='icon-slogan' src={TrophyIcon} alt="Trophy" />
    },
    {
      title: '4',
      content: t('page.slogan.text4'),
      icon: <img className='icon-slogan' src={TeamIcon} alt="Team" />
    },
  ];

  // Swiperlogo 的定义
  const Swiperlogo = [
    {
      src: logoCompany01,
    },
    {
      src: logoCompany02,
    },
    {
      src: logoCompany03,
    },
    {
      src: logoCompany04,
    },
    {
      src: logoCompany05,
    },
    {
      src: logoCompany06,
    },
    {
      src: logoCompany07,
    }
  ];


  const onChange = (key: string) => {
    const swiper = swiperRefs.current[key];
    if (swiper) {
      swiper.autoplay.start(); // 切換 Tab 時重新啓動自動循環
    }
  };

  const tab1Products = [
    { 
      src: productTaiyo1,
      name: t('product.Taiyo1'),
      company: 'Taiyo Yuden',
    },
    { src: productTaiyo2,
      name: t('product.Taiyo2'),
      company: 'Taiyo Yuden',
    },
    { src: productTaiyo3,
      name: t('product.Taiyo3'),
      company: 'Taiyo Yuden',
    },
    { src: productTaiyo4,
      name: t('product.Taiyo4'),
      company: 'Taiyo Yuden',
    },
    { src: productTaiyo5,
      name: t('product.Taiyo5'),
      company: 'Taiyo Yuden',
    },
    { src: productTaiyo6,
      name: t('product.Taiyo6'),
      company: 'Taiyo Yuden',
    }
  ];
  
  const tab2Products = [
    { 
      src: productELNA1,
      name: 'HV、HT',
      company: 'ELNA',
    },
    { src: productELNA2,
      name: 'RJF',
      company: 'ELNA',
    },
    { src: productELNA3,
      name: 'RTZ',
      company: 'ELNA',
    },
    { src: productELNA4,
      name: 'RVR',
      company: 'ELNA',
    },
    { src: productELNA5,
      name: 'RVT',
      company: 'ELNA',
    },
    { src: productELNA6,
      name: 'RYT',
      company: 'ELNA',
    }
  ];
  
  const tab3Products = [
    { 
      src: productHRS1,
      name: '12G-SDI规格对应',
      company: 'HRS',
    },
    { src: productHRS2,
      name: 'MT金属套管内置防水光纤连接器',
      company: 'HRS',
    },
    { src: productHRS3,
      name: 'Multi RF对应',
      company: 'HRS',
    },
    { src: productHRS4,
      name: 'Zero Screw 端子台',
      company: 'HRS',
    },
    { src: productHRS5,
      name: '插入即锁适合自动化组装',
      company: 'HRS',
    },
    { src: productHRS6,
      name: '高速传输对应',
      company: 'HRS',
    },
    { src: productHRS7,
      name: '抗振设计浮动式连接器',
      company: 'HRS',
    },
    { src: productHRS8,
      name: '新一代标准以太网连接器',
      company: 'HRS',
    },
  ];

  const tab4Products = [
    { 
      src: productProsemi1,
      name: '表面贴片自恢复保险丝',
      company: 'PROSEMI',
    },
    { src: productProsemi2,
      name: '方块保险丝',
      company: 'PROSEMI',
    },
    { src: productProsemi3,
      name: '高速半导体保险丝',
      company: 'PROSEMI',
    },
    { src: productProsemi4,
      name: '功率二极管',
      company: 'PROSEMI',
    },
    { src: productProsemi5,
      name: '光伏专用保险丝',
      company: 'PROSEMI',
    },
    { src: productProsemi6,
      name: '陶瓷管保险丝',
      company: 'PROSEMI',
    },
    { src: productProsemi7,
      name: '陶瓷气体放电管',
      company: 'PROSEMI',
    },
    { src: productProsemi8,
      name: '维修开关系列保险丝',
      company: 'PROSEMI',
    },
    { src: productProsemi9,
      name: '英规熔断器',
      company: 'PROSEMI',
    },
  ];

  const tab5Products = [
    { 
      src: productROHM1,
      name: 'IC',
      company: 'ROHM',
    },
    { src: productROHM2,
      name: 'LED',
      company: 'ROHM',
    },
    { src: productROHM3,
      name: '传感器',
      company: 'ROHM',
    },
    { src: productROHM4,
      name: '电阻',
      company: 'ROHM',
    },
    { src: productROHM5,
      name: '二极管',
      company: 'ROHM',
    },
    { src: productROHM6,
      name: '功率半导体',
      company: 'ROHM',
    },
    { src: productROHM7,
      name: '激光二极管',
      company: 'ROHM',
    },
    { src: productROHM8,
      name: '晶体管',
      company: 'ROHM',
    },
    { src: productROHM9,
      name: '钽电容器',
      company: 'ROHM',
    },
  ];
  
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'TAIYO YUDEN',
      children: (
        <ProductSwiper
          products={tab1Products}
          onSwiper={(swiper) => (swiperRefs.current['1'] = swiper)} // 存儲 Swiper 實例
        />
      ),
    },
    {
      key: '2',
      label: 'ELNA',
      children: (
        <ProductSwiper
          products={tab2Products}
          onSwiper={(swiper) => (swiperRefs.current['2'] = swiper)} // 存儲 Swiper 實例
        />
      ),
    },
    {
      key: '3',
      label: 'HRS',
      children: (
        <ProductSwiper
          products={tab3Products}
          onSwiper={(swiper) => (swiperRefs.current['3'] = swiper)} // 存儲 Swiper 實例
        />
      ),
    },
    {
      key: '4',
      label: 'PROSEMI',
      children: (
        <ProductSwiper
          products={tab4Products}
          onSwiper={(swiper) => (swiperRefs.current['4'] = swiper)} // 存儲 Swiper 實例
        />
      ),
    },
    {
      key: '5',
      label: 'ROHM',
      children: (
        <ProductSwiper
          products={tab5Products}
          onSwiper={(swiper) => (swiperRefs.current['5'] = swiper)} // 存儲 Swiper 實例
        />
      ),
    },
  ];

  const handleAfterChange = (current: number) => {
    const bannerTextElements = document.querySelectorAll('.banner-text');
    bannerTextElements.forEach((element, index) => {
      if (index === current) {
        element.classList.add('animate-fade-in-up');
      } else {
        element.classList.remove('animate-fade-in-up');
      }
    });
  };

  return (
    <div className="home-page">
      <Carousel
        autoplay={{ dotDuration: true }}
        autoplaySpeed={4000}
        ref={carouselRef}
        effect="fade"
        afterChange={handleAfterChange}
      >
        <div className="banner-1">
          <Image
            width={'100%'}
            preview={false}
            src={banner1}
            placeholder={
              <Image
                preview={false}
                src={banner1}
              />
            }
          />
          <div className='banner-text banner-animal'>
            {i18n.language !== 'en' ? (
              <div>
                <div className='title'>{t('page.carousel.title')}</div>
                <div className='subtitle'>ESCORT YOU WITH ADVANCED TECHNOLOGY</div>
              </div>
            ) : (
              <div className='title'>ESCORT YOU<br/> WITH ADVANCED TECHNOLOGY</div>
            )}
            <Paragraph className='font-size1'>{t('page.carousel.subtitle')}</Paragraph>
          </div>
        </div>
        <div className="banner-2">
          <Image
            width={'100%'}
            preview={false}
            src={banner2}
            placeholder={
              <Image
                preview={false}
                src={banner2}
              />
            }
          />
          <div className='banner-text banner-animal'>
            {i18n.language !== 'en' ? (
              <div>
                <div className='title'>{t('page.carousel.title')}</div>
                <div className='subtitle'>ESCORT YOU WITH ADVANCED TECHNOLOGY</div>
              </div>
            ) : (
              <div className='title'>ESCORT YOU<br/> WITH ADVANCED TECHNOLOGY</div>
            )}
            <Paragraph className='font-size1'>{t('page.carousel.subtitle')}</Paragraph>
          </div>
        </div>
        <div className="banner-3">
          <Image
            width={'100%'}
            preview={false}
            src={banner3}
            placeholder={
              <Image
                preview={false}
                src={banner3}
              />
            }
          />
          <div className='banner-text banner-animal'>
            {i18n.language !== 'en' ? (
              <div>
                <div className='title'>{t('page.carousel.title')}</div>
                <div className='subtitle'>ESCORT YOU WITH ADVANCED TECHNOLOGY</div>
              </div>
            ) : (
              <div className='title'>ESCORT YOU<br/> WITH ADVANCED TECHNOLOGY</div>
            )}
            <Paragraph className='font-size1'>{t('page.carousel.subtitle')}</Paragraph>
          </div>
        </div>
      </Carousel>

      {/* slogan */}
      <div className='container'>
        <div className="slogan-area">
          <Row gutter={[24, 24]}>
            {slogans.map((slogan) => (
              <Col key={slogan.title} xs={12} md={6} className='text-center'>
                <Space size={20}>
                  {slogan.icon}
                  <div className='slogan-text'>{slogan.content}</div>
                </Space>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* 关于我们 */}
      <div className={`bg-img ${screens.md ? 'pt-40 pb-40' : 'pt-20 pb-20'}`}>
        <div className='container'>
          <div className='mb-30'>
            <Divider className='divider-text'>ABOUT US</Divider>
            <Title className='text-center text-primary' level={1}>{t('page.aboutUs.title')}</Title>
          </div>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <Paragraph className='text-paragraph text-indent'>{t('page.aboutUs.paragraph1')}</Paragraph>
            <Paragraph className='text-paragraph text-indent'>{t('page.aboutUs.paragraph2')}</Paragraph>
            <Paragraph className='text-paragraph text-indent'>{t('page.aboutUs.paragraph3')}</Paragraph>
          </div>
          <div className='text-center mt-50 mb-30'>
            <Button color="primary" variant="outlined" className="button-normal-dark" shape="round" size="large" href="/aboutus" style={{width: '200px'}}>
              {t('common.seemore')}
            </Button>
          </div>
        </div>
      </div>
      
      {/* 产品中心 */}
      <div className='pt-40 pb-40'>
        <div className='container'>
          <div className='mb-30'>
            <Divider className='divider-text'>PRODUCT</Divider>
            <Title className='text-center text-primary' level={2}>{t('common.productcenter')}</Title>
          </div>
          <div className=''>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={0} // 将间距设置为 0
              slidesPerView={'auto'}
              loop={true} // 添加循环模式
              speed={5000}
              centeredSlides={true}
              autoplay={{
                delay: 0, // 3秒自动切换
                disableOnInteraction: false // 用户操作后继续自动播放
              }}
            >
              {Swiperlogo.map((logoimg, index) => (
                <SwiperSlide key={index} style={{ width: 'auto' }}>
                  <Image
                    className='pl-60 pr-60'
                    preview={false}
                    src={logoimg.src}
                    placeholder={
                      <Image
                        preview={false}
                        src={logoimg.src}
                      />
                    }
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          
          {/* 产品展示 */}
          <div className='tabs-common productTabs-swiper mt-30'>
            <Tabs defaultActiveKey="1" type="card" className='tabs-card' centered size="large" items={items} onChange={onChange} />
          </div>
        </div>
      </div>

      {/* 新闻动态 */}
      <div className='bg-img pt-40 pb-40'>
        <div className='container'>
          <div className='mb-30'>
            <Divider className='divider-text'>NEWS</Divider>
            <Title className='text-center text-primary' level={2}>{t('common.news')}</Title>
          </div>
          <NewsPage viewMode="card" />
        </div>
      </div>
    </div>
  );
};

export default Home;
