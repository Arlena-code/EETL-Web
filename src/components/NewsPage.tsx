import React, { useState } from 'react';
import { Card, Pagination, Row, Col, Button } from 'antd';
import type { PaginationProps } from 'antd';

const { Meta } = Card;

interface NewsItem {
  id: number;
  title: string;
  content: string;
  date: string;
  src: string;
}

const NewsPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5; // 每页显示5条新闻

  // 模拟新闻数据
  const newsData: NewsItem[] = [
    {
      id: 1,
      src: './src/assets/images/news/56056059.png',
      title: '新闻标题1',
      content: '新闻内容1',
      date: '2024-01-01',
    },
    {
      id: 2,
      src: './src/assets/images/news/47124048.png',
      title: '新闻标题2',
      content: '新闻内容2',
      date: '2024-01-02',
    },
    {
      id: 3,
      src: './src/assets/images/news/55563714.png',
      title: '新闻标题3',
      content: '新闻内容1',
      date: '2024-01-01',
    },
    {
      id: 4,
      src: './src/assets/images/news/47124048.png',
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
      <div className='text-center mt-50 mb-30'>
        <Button color="primary" variant="outlined"  shape="round" size="large" href="/aboutus" style={{width: '200px'}}>
          查看更多
        </Button>
      </div>
    </div>
  );
};

export default NewsPage;