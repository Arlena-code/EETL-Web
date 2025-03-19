import React, { useState } from 'react';
import { Card, Pagination, Row, Col, Button } from 'antd';
import type { PaginationProps } from 'antd';
import { useNavigate } from 'react-router-dom';

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
const ArticleNews: React.FC<{ news: NewsItem[] }> = ({ news }) => {
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`/news/${id}`);
  };

  return (
    <div className="article-news">
      {news.map((item) => (
        <div 
          key={item.id} 
          className="article-item mb-30"
          onClick={() => handleClick(item.id)}
          style={{ cursor: 'pointer' }}
        >
          <img src={item.src} alt={item.title} className="article-image" />
          <div className="article-content">
            <h4 className="article-title">{item.title}</h4>
            <p className="article-text">{item.content}</p>
            <p className="article-date">{item.date}</p>
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
        <ArticleNews news={currentNews} />
      )}
      <div className="text-center mt-30">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={newsData.length}
          onChange={onChange}
          itemRender={itemRender}
          style={{justifyContent: 'center'}}
        />
      </div>
    </div>
  );
};

export default NewsPage;