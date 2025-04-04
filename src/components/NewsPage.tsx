// src/components/NewsPage.tsx

import React, { useEffect, useState } from 'react';
import { Card, Pagination, Row, Col, Button } from 'antd';
import type { PaginationProps } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const { Meta } = Card;

// 修改 NewsPage 组件接口
interface NewsPageProps {
  viewMode?: 'card' | 'article'; // 新增 viewMode prop
}
interface NewsItem {
  id: number;
  title: string;
  content: string;
  date: string;
  src: string;
}

import NewsPageImage1 from '@/assets/images/news/56056059.png';
import NewsPageImage2 from '@/assets/images/news/47124048.png';
import NewsPageImage3 from '@/assets/images/news/55563714.png';
// 新增文章新闻组件
const ArticleNews: React.FC<{ news: { id: number; title: string; content: string; pub_date: string }[] }> = ({ news }) => {
  
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`/news/${id}`);
  };

  // 定义一个函数来提取第一个 p 标签及其内容
  const extractFirstTwoParagraphs = (html: string) => {
    const matches  = html.match(/<p[^>]*>(.*?)<\/p>/g);
    if (matches) {
      // 取前两个匹配结果
      return matches.slice(0, 2).join('');
    }
    return html;
  };

  // 定义一个函数来提取第一张图片的 src
  const extractFirstImageSrc = (html: string) => {
    const match = html.match(/<img[^>]+src="([^">]+)"/);
    return match ? match[1] : '';
  };

  const BACKEND_URL = 'http://localhost:8000';
  return (
    <div className="article-news">
      {news.map((item) => (
        <div 
          key={item.id} 
          className="article-item mb-30"
          onClick={() => handleClick(item.id)}
          style={{ cursor: 'pointer' }}
        >
          {/* 使用提取的图片 src */}
          <img src={`${BACKEND_URL}${extractFirstImageSrc(item.content)}`} alt={item.title} className="article-image" />
          <div className="article-content">
            <h4 className="article-title">{item.title}</h4>
            <div className="article-text" dangerouslySetInnerHTML={{ __html: extractFirstTwoParagraphs(item.content) }} />
            <p className="article-date">{new Date(item.pub_date).toLocaleDateString()}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
const NewsPage: React.FC<NewsPageProps> = ({ viewMode = 'card' }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  // 模拟新闻数据
  const newsData: NewsItem[] = [
    {
      id: 1,
      src: NewsPageImage1,
      title: 'EETL产品推荐-TAIYO：MCOIL™金属类功率电感器和铁氧体类功率电感器',
      content: '本文将为大家介绍在各类市场发挥作用的太阳诱电功率电感：MCOIL™金属类功率电感器和铁氧体类功率电感器。',
      date: '2024-01-01',
    },
    {
      id: 2,
      src: NewsPageImage2,
      title: '新闻标题2',
      content: '新闻内容2',
      date: '2024-01-02',
    },
    {
      id: 3,
      src: NewsPageImage3,
      title: '新闻标题3',
      content: '新闻内容1',
      date: '2024-01-01',
    },
    {
      id: 4,
      src: NewsPageImage2,
      title: '新闻标题4',
      content: '新闻内容2',
      date: '2024-01-02',
    },
  ];

  // 分页逻辑
  const onChange: PaginationProps['onChange'] = (page) => {
    setCurrentPage(page);
  };
  const itemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
    if (type === 'prev') {
      return <a>上一页</a>;
    }
    if (type === 'next') {
      return <a>下一页</a>;
    }
    return originalElement;
  };

  // 获取当前页的新闻数据
  const currentNews = newsData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const [news, setNews] = useState<{ id: number; title: string; content: string; pub_date: string; src: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await axios.get<{ id: number; title: string; content: string; pub_date: string }[]>(
          'http://localhost:8000/api/news/' // 修改为正确的后端 API 地址
        );
        // 处理数据，添加 src 属性
        const processedNews = response.data.map(item => ({
          ...item,
          src: '' // 可以设置默认值，或者根据业务逻辑生成
        }));
        setNews(processedNews);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchNews();
  }, []);

  if (loading) {
    return <div>加载中，请稍候...</div>;
  }

  return (
    <div className="news-page">
      {/* 根据视图模式显示不同内容 */}
      {viewMode === 'card' ? (
        <div>
          <div className="news-list">
            <Row gutter={ {xs: 8, sm: 16, md: 24} }>
              {currentNews.map((news) => (
                <Col key={news.id} span={24} md={12} lg={8} xl={6}>
                  <Card className="card-image mb-20" hoverable cover={<img alt="news" src={news.src} />}>
                    <Meta title={news.title} description={news.date} />
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
          
          <div className='text-center mt-50 mb-30'>
            <Button color="primary" variant="outlined" className='button-normal-dark' shape="round" size="large" href="/aboutus" style={{width: '200px'}}>
              查看更多
            </Button>
          </div>
        </div>
      ) : (
        <ArticleNews news={news} />
      )}
      <div className="text-center mt-30">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={news.length} // 使用从 API 获取的新闻总数
          onChange={onChange}
          itemRender={itemRender}
          style={{justifyContent: 'center'}}
        />
      </div>
    </div>
  );
};

export default NewsPage;