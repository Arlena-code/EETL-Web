import React from 'react';
import { Carousel, Row, Col, Typography, Divider, Space, Button, Tabs, Image  } from 'antd';
import type { CarouselRef } from 'antd/es/carousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import type { TabsProps } from 'antd';
import '@/assets/styles/swiper.min.css';

import ProductSwiper from '../components/ProductSwiper';
import NewsPage from '../components/NewsPage';

const { Title, Paragraph } = Typography;
import SolutionIcon from '@/assets/icons/slogan1.svg';
import DevIcon from '@/assets/icons/slogan2.svg';
import TrophyIcon from '@/assets/icons/slogan3.svg';
import TeamIcon from '@/assets/icons/slogan4.svg';
import AddressIcon from '@/assets/icons/address.svg';

const Home: React.FC = () => {
  const carouselRef = React.useRef<CarouselRef>(null);

  const slogans = [
    {
      title: '1',
      content: '真诚互信',
      icon: <img src={SolutionIcon} alt="Solution" style={{ width: '60px', height: '60px' }} />
    },
    {
      title: '2',
      content: '开发创新',
      icon: <img src={DevIcon} alt="DevIcon" style={{ width: '60px', height: '60px' }} />
    },
    {
      title: '3',
      content: '携手共进',
      icon: <img src={TrophyIcon} alt="Trophy" style={{ width: '60px', height: '60px' }} />
    },
    {
      title: '4',
      content: '成就卓越',
      icon: <img src={TeamIcon} alt="Team" style={{ width: '60px', height: '60px' }} />
    },
  ];

  const addressicon = <img src={AddressIcon} alt="Team" style={{ width: '18px', height: '18px' }} />
  const address = [
    {
      title: '1',
      content: '深圳：深圳市南山区留仙大道4168号众冠时代广场A座39楼3902室 \n Add： Room 3902, Block A, Zhongguan Times Square, No.4168 Liuxian Road, Nanshan District, Shenzhen, China.',
    },
    {
      title: '2',
      content: '上海：上海市长宁区仙霞路319号远东国际广场A栋6楼603室 \n Add： Room 603, 6 / F, Building A, Far East International Plaza, No.319 Xianxia Road, Changning District, Shanghai，China.',
    },
    {
      title: '3',
      content: '北京：北京市朝阳区来广营西路5号院诚盈中心1号楼5层515室 \n Add： Room 515, Building 1, Chengying Center, No.5 Laiguangying West Road, Chaoyang District, Beijing, China.',
    },
    {
      title: '4',
      content: '香港：香港新界荃灣柴灣角街84-92號順豐工業中心16楼P-Q室 \n Add： Room P-Q ,16th Floor,Shield Industrial Centre,No.84-92 Chai Wan Kok Street, Tsuen Wan, New Territories, Hong Kong.  ',
    },
  ];

  // Swiperlogo 的定义
  const Swiperlogo = [
    {
      src: './src/assets/images/logo_company_01.png',
    },
    {
      src: './src/assets/images/logo_company_02.png',
    },
    {
      src: './src/assets/images/logo_company_03.png',
    },
    {
      src: './src/assets/images/logo_company_04.png',
    },
    {
      src: './src/assets/images/logo_company_05.png',
    },
    {
      src: './src/assets/images/logo_company_06.png',
    },
    {
      src: './src/assets/images/logo_company_07.png',
    }
  ];


  const onChange = (key: string) => {
    console.log(key);
  };

  const tab1Products = [
    { 
      src: './src/assets/images/product/taiyo/taiyo1.png',
      name: '中高压',
      company: 'Taiyo Yuden',
    },
    { src: './src/assets/images/product/taiyo/taiyo2.png',
      name: '中高压',
      company: 'Taiyo Yuden',
    },
    { src: './src/assets/images/product/taiyo/taiyo3.png',
      name: '中高压',
      company: 'Taiyo Yuden',
    },
    { src: './src/assets/images/product/taiyo/taiyo4.png',
      name: '中高压',
      company: 'Taiyo Yuden',
    },
    { src: './src/assets/images/product/taiyo/taiyo5.png',
      name: '中高压',
      company: 'Taiyo Yuden',
    },
    { src: './src/assets/images/product/taiyo/taiyo6.png',
      name: '中高压',
      company: 'Taiyo Yuden',
    },
    { src: './src/assets/images/product/taiyo/taiyo7.jpg',
      name: '中高压',
      company: 'Taiyo Yuden',
    },
  ];
  
  const tab2Products = [
    { 
      src: './src/assets/images/product/taiyo/taiyo1.png',
      name: '中高压',
      company: 'Taiyo Yuden',
    },
    { src: './src/assets/images/product/taiyo/taiyo2.png',
      name: '中高压',
      company: 'Taiyo Yuden',
    },
    { src: './src/assets/images/product/taiyo/taiyo3.png',
      name: '中高压',
      company: 'Taiyo Yuden',
    },
    { src: './src/assets/images/product/taiyo/taiyo4.png',
      name: '中高压',
      company: 'Taiyo Yuden',
    },
    { src: './src/assets/images/product/taiyo/taiyo5.png',
      name: '中高压',
      company: 'Taiyo Yuden',
    },
    { src: './src/assets/images/product/taiyo/taiyo6.png',
      name: '中高压',
      company: 'Taiyo Yuden',
    },
    { src: './src/assets/images/product/taiyo/taiyo7.jpg',
      name: '中高压',
      company: 'Taiyo Yuden',
    },
  ];
  
  const tab3Products = [
    { 
      src: './src/assets/images/product/taiyo/taiyo1.png',
      name: '中高压',
      company: 'Taiyo Yuden',
    },
    { src: './src/assets/images/product/taiyo/taiyo2.png',
      name: '中高压',
      company: 'Taiyo Yuden',
    },
    { src: './src/assets/images/product/taiyo/taiyo3.png',
      name: '中高压',
      company: 'Taiyo Yuden',
    },
    { src: './src/assets/images/product/taiyo/taiyo4.png',
      name: '中高压',
      company: 'Taiyo Yuden',
    },
    { src: './src/assets/images/product/taiyo/taiyo5.png',
      name: '中高压',
      company: 'Taiyo Yuden',
    },
    { src: './src/assets/images/product/taiyo/taiyo6.png',
      name: '中高压',
      company: 'Taiyo Yuden',
    },
    { src: './src/assets/images/product/taiyo/taiyo7.jpg',
      name: '中高压',
      company: 'Taiyo Yuden',
    },
  ];
  
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'TAIYO YUDEN',
      children: <ProductSwiper products={tab1Products} />,
    },
    {
      key: '2',
      label: 'ELNA',
      children: <ProductSwiper products={tab2Products} />,
    },
    {
      key: '3',
      label: 'HRS',
      children: <ProductSwiper products={tab3Products} />,
    },
  ];

  return (
    <div className="home-page">
      <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={4000} ref={carouselRef} effect="fade">
        <div className="banner-1">
          <Image
            preview={false}
            src="./src/assets/images/banner1.jpg"
            placeholder={
              <Image
                preview={false}
                src="./src/assets/images/banner1.jpg"
              />
            }
          />
          <div className='banner-text'>
            <div className='title'>为您护航</div>
            <div className='subtitle'>ESCORT YOU WITH ADVANCED TECHNOLOGY</div>
            <Paragraph>来专注于为消费电子、汽车电子、通信、工控、新能源等行业提供元器件产品，以及供应链服务和符合市场需求的增值服务</Paragraph>
          </div>
        </div>
        <div className="banner-2">
          <Image
            preview={false}
            src="./src/assets/images/banner2.jpg"
            placeholder={
              <Image
                preview={false}
                src="./src/assets/images/banner2.jpg"
              />
            }
          />
          <div className='banner-text'>
            <div className='title'>为您护航</div>
            <div className='subtitle'>ESCORT YOU WITH ADVANCED TECHNOLOGY</div>
            <Paragraph>来专注于为消费电子、汽车电子、通信、工控、新能源等行业提供元器件产品，以及供应链服务和符合市场需求的增值服务</Paragraph>
          </div>
        </div>
        <div className="banner-3">
          <Image
            preview={false}
            src="./src/assets/images/banner3.jpg"
            placeholder={
              <Image
                preview={false}
                src="./src/assets/images/banner3.jpg"
              />
            }
          />
          <div className='banner-text'>
            <div className='title'>为您护航</div>
            <div className='subtitle'>ESCORT YOU WITH ADVANCED TECHNOLOGY</div>
            <Paragraph>来专注于为消费电子、汽车电子、通信、工控、新能源等行业提供元器件产品，以及供应链服务和符合市场需求的增值服务</Paragraph>
          </div>
        </div>
      </Carousel>

      {/* slogan */}
      <div className='container'>
        <div className="slogan-area">
          <Row gutter={[24, 24]}>
            {slogans.map((slogan) => (
              <Col key={slogan.title} xs={12} md={6}>
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
      <div className='bg-img pt-40 pb-40'>
        <div className='container'>
          <div className='mb-30'>
            <Divider className='divider-text'>ABOUT US</Divider>
            <Title className='text-center text-primary' level={1}>关于 研达创新 EETL</Title>
          </div>
          <div style={{maxWidth: '1200px',margin: '0 auto'}}>
            <Paragraph className='text-paragraph text-indent'>公司始创于1997年，研达创新EETL是经销多家国内外品牌的电子元器件代理商，为电子终端产品制造商提供供应链服务。20年来专注于为消费电子、汽车电子、通信、工控、新能源等行业提供元器件产品，以及供应链服务和符合市场需求的增值服务。凭借自身努力与国内外多家著名电子元器件厂家建立了长期战略性的合作关系，成为其在中国大陆及中国香港地区的代理分销商。依托丰富的产品线资源和香港物流中心的资源优势，客户遍布中国、日本、泰国、新加坡、马来西亚、越南、中国台湾等地。</Paragraph>
            <Paragraph className='text-paragraph text-indent'>市场销售团队结合各品牌产品优势，借助自身年来在各应用领域的耕耘经验，在不同领域新市场成为各品牌重要的合作伙伴之一。总部位于中国深圳，在香港、上海、北京、日本、伯明翰设有销售据点。</Paragraph>
            <Paragraph className='text-paragraph text-indent'>作为专业的代理商，本公司拥有一批充满朝气、积极负责、经验丰富的市场销售团队和技术团队，以具有市场竞争力的解决方案为客户提供一站式全方位的服务。</Paragraph>
            <Paragraph className='text-paragraph text-indent mb-5 mt-25'>公司地址</Paragraph>
            {address.map((address) => (
              <Paragraph className='text-paragraph' key={address.title}>
                <Space size={16}>
                  {addressicon}
                  <div style={{whiteSpace: 'pre-line'}}>{address.content}</div>
                </Space>
              </Paragraph>
            ))}
            <Paragraph className='text-paragraph text-indent'>联系电话：0755-8837 7106</Paragraph>
          </div>
          <div className='text-center mt-50 mb-30'>
            <Button color="primary" variant="outlined"  shape="round" size="large" href="/aboutus" style={{width: '200px'}}>
              查看详情
            </Button>
          </div>
        </div>
      </div>
      
      {/* 产品中心 */}
      <div className='p-40'>
        <div className='container'>
          <div className='mb-30'>
            <Divider className='divider-text'>PRODUCT</Divider>
            <Title className='text-center text-primary' level={2}>产品中心</Title>
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
          <div className='productTabs-swiper mt-30'>
            <Tabs defaultActiveKey="1" type="card" centered size="large" items={items} onChange={onChange} />
          </div>
        </div>
      </div>

      {/* 新闻动态 */}
      <div className='bg-img pt-40 pb-40'>
        <div className='container'>
          <div className='mb-30'>
            <Divider className='divider-text'>NEWS</Divider>
            <Title className='text-center text-primary' level={2}>新闻动态</Title>
          </div>
          <NewsPage />
        </div>
      </div>
    </div>
  );
};

export default Home;
