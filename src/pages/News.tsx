import React from 'react';
import { Image, Divider, Typography, theme, Tabs, Grid  } from 'antd';
import type { TabsProps } from 'antd';
import NewsPage from '../components/NewsPage';
import { useTranslation } from 'react-i18next';
const { Title } = Typography;
const { useToken } = theme;
const { useBreakpoint } = Grid;
import bannerNews from '@/assets/images/banner_news.jpg';
const News: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { token } = useToken();
  const screens = useBreakpoint();
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: '产品动态',
      children: (
        <div className='bg-light p-20'>
          <div className='pb-50'>
            <NewsPage viewMode="article" />
          </div>
        </div>
      ),
    },
    {
      key: '2',
      label: '员工风采',
      children: (
        <div className='bg-light p-20'>
          <div className='mt-30'>
          </div>
        </div>
      ),
    },
  ];
  const onChange = (key: string) => {
    console.log(key);
  };
  
  return (
    <div style={{paddingBottom: '80px'}}>
      <div className="position-relative">
        <Image
          width={'100%'}
          preview={false}
          src={bannerNews}
          style={{ height: screens.md ? '250px' : '150px', objectFit: 'cover', objectPosition: '50% 50%' }}
          placeholder={
            <Image
              preview={false}
              src={bannerNews}
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
              <Divider className='divider-text text-light'>News</Divider>
              <Title className='text-center' level={2} style={{fontSize: screens.md ? token.fontSizeHeading1 : '1.5rem'}}>{t('common.news')}</Title>
            </div>
          )
            : (<Divider className='divider-text text-light'><Title className='mb-0' level={2}>News</Title></Divider>)
          }
        </div>
      </div>
      <div className='container'>
        <div className='tabs-common mt-30 mb-30'>
          <Tabs defaultActiveKey="1" tabPosition={screens.md ? "left" : 'top'} type="card" centered size="large" className='tabs-vertical-75' items={items} onChange={onChange} />
        </div>
      </div>
    </div>
  );
};

export default News;
