import React from 'react';
import { Image, Divider, Typography, theme, Tabs  } from 'antd';
import type { TabsProps } from 'antd';
import NewsPage from '../components/NewsPage';

const { Title } = Typography;
const { useToken } = theme;

const News: React.FC = () => {
  const { token } = useToken();

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
          src="./src/assets/images/banner_news.jpg"
          style={{ height: '250px', objectFit: 'cover', objectPosition: '50% 50%' }}
          placeholder={
            <Image
              preview={false}
              src="./src/assets/images/banner_news.jpg"
            />
          }
        />
        <div className='banner-text' style={{ 
          maxWidth: '600px',
          width: '80%',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <Divider className='divider-text text-light'>News</Divider>
          <Title className='text-center' level={2} style={{fontSize: token.fontSizeHeading1}}>新闻动态</Title>
        </div>
      </div>
      <div className='container'>
        <div className='tabs-common mt-30 mb-30'>
          <Tabs defaultActiveKey="1" tabPosition="left" type="card" centered size="large" className='tabs-vertical-75' items={items} onChange={onChange} />
        </div>
      </div>
    </div>
  );
};

export default News;
