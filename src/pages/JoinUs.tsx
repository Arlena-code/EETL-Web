import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, Typography, Divider, theme, Row, Col, Button, Grid } from 'antd';
const { Title, Paragraph } = Typography;
const { useToken } = theme;
const { useBreakpoint } = Grid;
import bannerJoinUs from '@/assets/images/banner_joinus.jpg';
const JoinUs: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { token } = useToken();
  const screens = useBreakpoint();
  return (
    <div style={{paddingBottom: '80px'}}>
      <div className="position-relative">
        <Image
          width={'100%'}
          preview={false}
          src={bannerJoinUs}
          style={{ height: screens.md ? '250px' : '150px', objectFit: 'cover', objectPosition: '50% 50%' }}
          placeholder={
            <Image
              preview={false}
              src={bannerJoinUs}
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
              <Divider className='divider-text text-light'>JOIN US</Divider>
              <Title className='text-center' level={2} style={{fontSize: screens.md ? token.fontSizeHeading1 : '1.5rem'}}>{t('joinUs.title')}</Title>
            </div>
          )
            : (<Divider className='divider-text text-light'><Title className='mb-0' level={2}>Join Us</Title></Divider>)
          }
        </div>
      </div>
      <div className='container'>
        <div className='text-center mt-40 mb-30'>
          <Title className='text-primary' level={1}>{t('joinUs.jobTitle')}</Title>
          <Title className='text-primary' level={2} style={{fontWeight: 'normal'}}>{t('joinUs.welcome')}</Title>
        </div>
        <div className='mt-20'>
          <Row gutter={30}>
            <Col className='mb-30' span={24} lg={8}>
              <div className='h-100' style={{backgroundColor: '#f5f5f5',borderTop: '1px solid #340b6d',padding: '20px'}}>
                <Title level={3} className='text-center pb-10 font-weight-normal-ch'>{t('joinUs.salesEngineer.title')}</Title>
                <Paragraph className='mb-30'>
                  <div className='font-size1'>{t('joinUs.salesEngineer.responsibilities.title')}：</div>
                  <ul className='list-common mt-10 mb-10'>
                    {(t('joinUs.salesEngineer.responsibilities.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </Paragraph>
                <Paragraph className='mb-30'>
                  <div className='font-size1'>{t('joinUs.salesEngineer.requirements.title')}：</div>
                  <ul className='list-common mt-10 mb-10'>
                    {(t('joinUs.salesEngineer.requirements.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </Paragraph>
              </div>
            </Col>
            <Col className='mb-30' span={24} lg={8}>
              <div className='h-100' style={{backgroundColor: '#f5f5f5',borderTop: '1px solid #340b6d',padding: '20px'}}>
                <Title level={3} className='text-center pb-10 font-weight-normal-ch'>{t('joinUs.customerService.title')}</Title>
                <Paragraph className='mb-30'>
                  <div className='font-size1'>{t('joinUs.customerService.responsibilities.title')}：</div>
                  <ul className='list-common mt-10 mb-10'>
                    {(t('joinUs.customerService.responsibilities.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </Paragraph>
                <Paragraph className='mb-30'>
                  <div className='font-size1'>{t('joinUs.customerService.requirements.title')}：</div>
                  <ul className='list-common mt-10 mb-10'>
                    {(t('joinUs.customerService.requirements.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </Paragraph>
              </div>
            </Col>
            <Col className='mb-30' span={24} lg={8}>
              <div className='h-100' style={{backgroundColor: '#f5f5f5',borderTop: '1px solid #340b6d',padding: '20px'}}>
                <Title level={3} className='text-center pb-10 font-weight-normal-ch'>{t('joinUs.productManager.title')}</Title>
                <Paragraph className='mb-30'>
                  <div className='font-size1'>{t('joinUs.productManager.responsibilities.title')}：</div>
                  <ul className='list-common mt-10 mb-10'>
                    {(t('joinUs.productManager.responsibilities.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </Paragraph>
                <Paragraph className='mb-30'>
                  <div className='font-size1'>{t('joinUs.productManager.requirements.title')}：</div>
                  <ul className='list-common mt-10 mb-10'>
                    {(t('joinUs.productManager.requirements.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </Paragraph>
              </div>
            </Col>
          </Row>
        </div>
        <div className='mt-50 mb-30 text-center'>
          <Button color="primary" variant="outlined" shape="round" size="large" href="/require" style={{width: '200px'}}>
            {t('joinUs.submitResume')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
