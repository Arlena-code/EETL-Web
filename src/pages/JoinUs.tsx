import React from 'react';
import { List, Tag } from 'antd';
import { Link } from 'react-router-dom';

interface Article {
  id: number;
  title: string;
  date: string;
  category: string;
  preview: string;
}

const News: React.FC = () => {
  const articles: Article[] = [
    {
      id: 1,
      title: '行业数字化转型白皮书发布',
      date: '2024-03-15',
      category: '行业动态',
      preview: '最新行业趋势分析...'
    },
    {
      id: 2,
      title: '新产品版本更新日志',
      date: '2024-03-10',
      category: '产品更新',
      preview: '优化用户体验...'
    }
  ];

  return (
    <div className="news-page">
      <List
        itemLayout="vertical"
        dataSource={articles}
        renderItem={(article) => (
          <List.Item
            extra={<Tag color="blue">{article.category}</Tag>}
          >
            <List.Item.Meta
              title={<Link to={`/article/${article.id}`}>{article.title}</Link>}
              description={article.date}
            />
            <div className="article-preview">{article.preview}</div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default News;
