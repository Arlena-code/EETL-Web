import React from 'react';
import { Image, Divider, Typography, theme,Breadcrumb  } from 'antd';
import { useParams } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';

interface NewsItem {
  id: number;
  title: string;
  content: string;
  date: string;
  src: string;
}

const { Title } = Typography;
const { useToken } = theme;
const NewsPageDetail: React.FC = () => {
  const { token } = useToken();

  const { id } = useParams<{ id: string }>();
  // 这里应该从API或数据源获取新闻详情，暂时使用模拟数据
  const newsData: NewsItem = {
    id: Number(id),
    src: './src/assets/images/news/56056059.png',
    title: '新闻标题',
    content: '新闻详细内容',
    date: '2024-01-01',
  };

  return (
    <div style={{paddingBottom: '80px'}}>
      <div className="position-relative">
        <Image
          width={'100%'}
          preview={false}
          src="../src/assets/images/banner_news.jpg"
          style={{ height: '250px', objectFit: 'cover', objectPosition: '50% 50%' }}
          placeholder={
            <Image
              preview={false}
              src="../src/assets/images/banner_news.jpg"
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
          <Title className='text-center' level={2} style={{fontSize: token.fontSizeHeading1}}>新闻详情</Title>
        </div>
      </div>
      <div className='bg-light'>
        <div className='container'>
          <Breadcrumb
            className="breadcrumbs"
            separator=">"
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
                title: '新闻动态',
                href: '/news',
              },
              {
                title: newsData.title,
              },
            ]}
          />
        </div>
      </div>
      <div className='container'>
        <div className="news-detail mt-50 mb-50">
          <h1 className="detail-title text-center mb-10">{newsData.title}</h1>
          <Divider className='mt-0' />
          <p className="detail-date text-right">创建时间：{newsData.date}</p>
          <div className="detail-content">
            <img src={newsData.src} alt={newsData.title} className="detail-image" />
            {newsData.content}
          </div>
        </div>
      </div>
    </div>

  );
};

export default NewsPageDetail;