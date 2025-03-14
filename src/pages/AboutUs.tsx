import React from 'react';
import { Flex, Card, Button, Timeline, Typography, theme } from 'antd';
import { 
  MailOutlined, 
  ReadOutlined, 
  DownloadOutlined,
  LineChartOutlined
} from '@ant-design/icons';

const { useToken } = theme;
const { Title, Text, Paragraph } = Typography;

const AboutPage: React.FC = () => {
  const { token } = useToken();

  // 时间轴数据
  const timelineItems = [
    { 
      label: '2015 创立', 
      content: '成立科技研发中心',
      color: token.colorSuccess 
    },
    { 
      label: '2018 融资', 
      content: '完成A轮千万级融资',
      color: token.colorPrimary 
    },
    { 
      label: '2020 突破', 
      content: '用户数突破百万大关',
      color: token.colorWarning 
    }
  ];

  return (
    <Flex vertical gap={token.sizeXXL} style={{ padding: token.paddingLG }}>
      {/* 自定义页头 */}
      <Flex vertical gap={token.sizeSM}>
        <Flex 
          align="center"
          justify="space-between"
          wrap="wrap"
          gap={token.sizeMD}
        >
          <Flex align="center" gap={token.sizeSM}>
            <LineChartOutlined style={{ fontSize: token.fontSizeXL }} />
            <Title level={2} style={{ margin: 0 }}>
              关于我们
            </Title>
          </Flex>
          <Button 
            type="primary" 
            icon={<MailOutlined />}
            href="/contact"
            size="large"
          >
            立即联系
          </Button>
        </Flex>
        <Text type="secondary" style={{ fontSize: token.fontSizeLG }}>
          数字化解决方案领导者
        </Text>
      </Flex>

      {/* 内容区域 */}
      <Flex gap={token.sizeXL} wrap="wrap">
        {/* 里程碑卡片 */}
        <Card
          title={<Text strong>发展历程</Text>}
          style={{ flex: 1, minWidth: 320 }}
          styles={{
            body: { padding: 0 }
          }}
        >
          <Flex vertical style={{ padding: token.paddingLG }}>
            <Timeline
              items={timelineItems.map(item => ({
                color: item.color,
                label: (
                  <Text strong style={{ fontSize: token.fontSizeLG }}>
                    {item.label}
                  </Text>
                ),
                children: (
                  <Paragraph 
                    type="secondary"
                    style={{ marginBottom: token.marginXS }}
                  >
                    {item.content}
                  </Paragraph>
                )
              }))}
            />
          </Flex>
        </Card>

        {/* 核心价值卡片 */}
        <Card
          title={<Text strong>核心价值</Text>}
          style={{ flex: 1, minWidth: 320 }}
          actions={[
            <Flex gap={token.sizeXS} key="actions">
              <ReadOutlined />
              <DownloadOutlined />
            </Flex>
          ]}
        >
          <Flex vertical gap={token.sizeMD}>
            <Title level={4} style={{ color: token.colorPrimary }}>
              创新驱动发展
            </Title>
            <Paragraph type="secondary">
              我们每年将超过30%的营收投入研发，持续引领行业技术创新
            </Paragraph>
            
            <Title level={4} style={{ color: token.colorPrimary }}>
              技术赋能未来
            </Title>
            <Paragraph type="secondary">
              拥有50+项技术专利，服务全球1000+企业客户
            </Paragraph>
          </Flex>
        </Card>
      </Flex>
    </Flex>
  );
};

export default AboutPage;
