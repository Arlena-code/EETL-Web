import React, { useEffect, useRef, useState } from 'react';
import { Flex, Card, Timeline, Typography, theme, Image, Divider, Row, Col, Grid } from 'antd';
import { useTranslation } from 'react-i18next';
const { useToken } = theme;
const { Title, Text, Paragraph } = Typography;
const { useBreakpoint } = Grid;
// images
import bannerAbout from '@/assets/images/banner_about.jpg';
import ImageCompany from '@/assets/images/company.jpg';

const AboutPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { token } = useToken();
  const screens = useBreakpoint();
  const [isIntersecting, setIsIntersecting] = useState(false);
  const timelineRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);

  // 时间轴数据
  const timelineItems = (t('aboutUs.history.timeline', { returnObjects: true }) as Array<{ label: string; content: string }>).map((item) => ({
    label: item.label,
    content: item.content,
    color: token.colorSuccess
  }));

  return (
    <div style={{paddingBottom: '80px'}}>
      <div className="position-relative">
        <Image
          width={'100%'}
          preview={false}
          src={bannerAbout}
          style={{ height: screens.md ? '250px' : '150px', objectFit: 'cover', objectPosition: '50% 80%' }}
          placeholder={
            <Image
              preview={false}
              src={bannerAbout}
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
              <Divider className='divider-text text-light'>ABOUT US</Divider>
              <Title className='text-center' level={2} style={{fontSize: screens.md ? token.fontSizeHeading1 : '1.5rem'}}>{t('common.aboutus')}</Title>
            </div>
          )
            : (<Divider className='divider-text text-light'><Title className='mb-0' level={2}>ABOUT US</Title></Divider>)
          }
        </div>
      </div>
      <div className='container'>
        <div className='pl-5 pr-5'>
          <Row gutter={screens.lg ? token.sizeXXL : token.sizeMD} style={{ padding: screens.xxl ? '80px 0 40px' : screens.lg ? '40px 0 20px' : '20px 0 20px' }}>
            {screens.lg && ( // 仅在md及以上屏幕显示
              <Col span={9}>
                <img className='w-100' src={ImageCompany} alt={t('aboutUs.title')} />
              </Col>
            )}

            {/* 内容区域 */}
            <Col span={24} lg={15}>
              <Title level={1} style={{fontSize: token.fontSizeHeading3, lineHeight: '150%'}}>{t('aboutUs.mainTitle')}</Title>
              <Divider className='divider-line' style={{ marginTop: token.marginSM }} />
              {!screens.lg && (
                <div>
                  <img className='img-fluid' src={ImageCompany} alt={t('aboutUs.title')} />
                </div>
              )}
              <Flex vertical>
                <Paragraph className='text-indent font-size1' style={{lineHeight: '200%'}}>
                  {t('aboutUs.companyIntro.paragraph1')}
                </Paragraph>
                <Paragraph className='text-indent font-size1 mb-0' style={{ lineHeight: '200%' }}>
                  {t('aboutUs.companyIntro.paragraph2')}
                </Paragraph>
                {i18n.language !== 'en' && (
                <ul className='font-size1 mb-10' style={{ lineHeight: '200%', paddingLeft: '2em',listStyle: 'inside' }}>
                  <li>{t('aboutUs.companyIntro.applications.consumer')}</li>
                  <li>{t('aboutUs.companyIntro.applications.automotive')}</li>
                  <li>{t('aboutUs.companyIntro.applications.communication')}</li>
                  <li>{t('aboutUs.companyIntro.applications.industrial')}</li>
                  <li>{t('aboutUs.companyIntro.applications.newEnergy')}</li>
                </ul>)}
                <Paragraph className='text-indent font-size1' style={{ lineHeight: '200%' }}>
                  {t('aboutUs.companyIntro.paragraph3')}
                </Paragraph>
                <Paragraph className='text-indent font-size1' style={{ lineHeight: '200%' }}>
                  {t('aboutUs.companyIntro.paragraph4')}
                </Paragraph>
              </Flex>
            </Col>
          </Row>
        </div>

        <div>
          {/* 核心优势 */}
          <div className='mt-30 mb-30'>
            <Divider className='divider-text divider-text-sm'>{t('aboutUs.coreValues.title')}</Divider>
            <Title className='text-center text-primary' level={3}>{t('aboutUs.coreValues.subtitle')}</Title>
          </div>
          <Row justify='center' gutter={token.sizeMD} style={{ flexDirection: screens.md ? 'row' : 'column' }}>
            <Col span={24} lg={8}>
              <Card className='h-100'>
                <Title level={4}>
                  {t('aboutUs.coreValues.productLine.title')}
                </Title>
                <Paragraph className='font-size1' style={{lineHeight: '175%'}}>
                  {t('aboutUs.coreValues.productLine.content')}
                </Paragraph>
              </Card>
            </Col>
            <Col span={24} lg={8}>
              <Card className='h-100'>
                <Title level={4}>
                  {t('aboutUs.coreValues.logistics.title')}
                </Title>
                <Paragraph className='font-size1' style={{lineHeight: '175%'}}>
                  {t('aboutUs.coreValues.logistics.content')}
                </Paragraph>
              </Card>
            </Col>
            <Col span={24} lg={8}>
              <Card className='h-100'>
                <Title level={4}>
                  {t('aboutUs.coreValues.service.title')}
                </Title>
                <Paragraph className='font-size1' style={{lineHeight: '175%'}}>
                  {t('aboutUs.coreValues.service.content')}
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </div>

        <div className='pt-40'>
          <div className='mt-30'>
            <Divider className='divider-text divider-text-sm'>{t('aboutUs.history.title')}</Divider>
            <Title className='text-center text-primary' level={3}>{t('aboutUs.history.subtitle')}</Title>
          </div>

          {/* 里程碑 */}
          <Flex vertical style={{ padding: token.paddingLG }} ref={timelineRef}>
            <Timeline
              className='timeline'
              mode="alternate" 
              items={timelineItems.map((item, index) => ({
                color: item.color,
                children: (
                  <div 
                    className={`about-timeline-content ${isIntersecting ? 'animate' : ''}`}
                    style={{ 
                      // 根据索引设置动画延迟，实现依次出现效果
                      animationDelay: `${isIntersecting ? index * 0.5 : 0}s` 
                    }}
                  >
                    <Text className="about-timeline-label" strong style={{ fontSize: token.fontSizeXL }}>
                      {item.label}
                    </Text>
                    <Paragraph className='font-size1' style={{ marginBottom: token.marginXS, whiteSpace: 'pre-line' }}>
                      {item.content}
                    </Paragraph>
                  </div>
                ),
              }))}
            />
          </Flex>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
