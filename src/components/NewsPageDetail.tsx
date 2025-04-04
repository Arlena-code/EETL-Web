// src/components/NewsPageDetail.tsx
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, Divider, Typography, theme, Breadcrumb, Grid } from 'antd';
import { useParams } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';
import axios from 'axios';
import bannerNews from '@/assets/images/banner_news.jpg';
const { useBreakpoint } = Grid;
const { Title } = Typography;
const { useToken } = theme;

// 定义新闻数据的类型
type NewsData = {
  id: number;
  title: string;
  pub_date: string;
  src: string;
  content: string;
};

const NewsPageDetail: React.FC = () => {
  const { token } = useToken();
  const { t, i18n } = useTranslation();
  const screens = useBreakpoint();
  const { id } = useParams<{ id: string }>();
  const [newsData, setNewsData] = useState<NewsData | null>(null);

  useEffect(() => {
    const fetchNewsDetail = async () => {
      try {
        // 替换为实际的后端 API 地址
        const response = await axios.get<NewsData>(`http://localhost:8000/api/news/${id}/`);
        setNewsData(response.data);
      } catch (error) {
        console.error('获取新闻详情失败:', error);
      }
    };

    if (id) {
      fetchNewsDetail();
    }
  }, [id]);

  if (!newsData) {
    return <div>加载中...</div>;
  }

  return (
    <div style={{ paddingBottom: '80px' }}>
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
              <Title className='text-center' level={2} style={{ fontSize: screens.md ? token.fontSizeHeading1 : '1.5rem' }}>{t('common.news')}</Title>
            </div>
          )
            : (<Divider className='divider-text text-light'><Title className='mb-0' level={2}>News</Title></Divider>)
          }
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
          <p className="detail-date text-right">创建时间：{new Date(newsData.pub_date).toLocaleDateString()}</p>
          <div className="detail-content">
            <div dangerouslySetInnerHTML={{ __html: newsData.content }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPageDetail;