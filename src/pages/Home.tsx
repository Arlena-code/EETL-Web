import React from 'react';
import { Carousel, Card, Row, Col, Typography } from 'antd';
import type { CarouselRef } from 'antd/es/carousel';
import { Link } from 'react-router-dom';

const { Title, Paragraph } = Typography;

const Home: React.FC = () => {
  const carouselRef = React.useRef<CarouselRef>(null);

  const features = [
    {
      title: '专业技术团队',
      content: '拥有20年行业经验的高级工程师团队',
      link: '/about#team'
    },
    {
      title: '智能解决方案',
      content: '基于AI和大数据的企业级解决方案',
      link: '/services'
    },
    {
      title: '成功案例',
      content: '服务全球500强企业典型案例',
      link: '/cases'
    }
  ];

  return (
    <div className="home-page">
      <Carousel ref={carouselRef} autoplay effect="fade">
        <div className="banner-1">
          <Title level={2}>创新驱动发展</Title>
          <Paragraph>引领行业数字化转型</Paragraph>
        </div>
        <div className="banner-2">
          <Title level={2}>智能解决方案</Title>
          <Paragraph>助力企业高效运营</Paragraph>
        </div>
      </Carousel>

      <Row gutter={[24, 24]} className="feature-cards">
        {features.map((feature) => (
          <Col key={feature.title} xs={24} md={8}>
            <Card 
              title={feature.title}
              hoverable
              extra={<Link to={feature.link}>了解更多</Link>}
            >
              {feature.content}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
