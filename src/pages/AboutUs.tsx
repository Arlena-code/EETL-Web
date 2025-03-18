import React from 'react';
import { Flex, Card, Timeline, Typography, theme, Image, Divider, Row, Col } from 'antd';

const { useToken } = theme;
const { Title, Text, Paragraph } = Typography;

const AboutPage: React.FC = () => {
  const { token } = useToken();

  // 时间轴数据
  const timelineItems = [
    { 
      label: '1997年 创立', 
      content: '经销多家国内外品牌的电子元器件代理商',
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
    <div style={{paddingBottom: '80px'}}>
      <div className="position-relative">
        <Image
          width={'100%'}
          preview={false}
          src="./src/assets/images/banner_about.jpg"
          style={{ height: '250px', objectFit: 'cover', objectPosition: '50% 80%' }}
          placeholder={
            <Image
              preview={false}
              src="./src/assets/images/banner_about.jpg"
            />
          }
        />
        <div className='banner-text' style={{ 
          maxWidth: '600px',
          width: '80%',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <Divider className='divider-text text-light'>ABOUT US</Divider>
          <Title className='text-center' level={2} style={{fontSize: token.fontSizeHeading1}}>关于我们</Title>
        </div>
      </div>
      <div className='container'>
        <Row gutter={token.sizeXXL} style={{ padding: '80px 0 40px' }}>
          <Col span={12}>
            <img className='w-100' src='./src/assets/images/company.png' alt="关于我们-研达创新电子（深圳）有限公司" />
          </Col>

          {/* 内容区域 */}
          <Col span={12}>
            <Title level={1} style={{fontSize: token.fontSizeHeading3, lineHeight: '150%'}}><span style={{fontSize: token.fontSizeHeading2}}>EETL</span><br/>研达创新电子（深圳）有限公司</Title>
            <Divider className='divider-line' style={{ marginTop: token.marginSM }} />
            <Flex vertical>
              <Paragraph className='text-indent font-size1' style={{lineHeight: '200%'}}>
                研达创新EETL公司总部坐落于深圳市南山区西丽大学城片区的众冠时代广场，毗邻美丽的大沙河和西丽湖。公司始创于1997年，是经销多家国内外品牌的电子元器件代理商，为电子终端产品制造商提供供应链服务。
              </Paragraph>
              <Paragraph className='text-indent font-size1' style={{lineHeight: '200%'}}>
                20年来专注于为消费电子、汽车电子、通信、汽车电子、工控、新能源等行业提供元器件产品，以及供应链服务和符合市场需求的增值服务。凭借自身努力与国内外多家著名电子元器件厂家建立了长期战略性的合作关系，成为其在中国大陆及中国香港地区的代理分销商。依托丰富的产品线资源和香港物流中心的资源优势，客户遍布中国、日本、泰国、新加坡、马来西亚、越南、中国台湾等地。
              </Paragraph>
              <Paragraph className='text-indent font-size1' style={{lineHeight: '200%'}}>
                市场销售团队结合各品牌的产品优势，借助自身多年来在各应用领域的耕耘经验，在不同领域新市场成为各品牌重要的合作伙伴之一。
              </Paragraph>
              <Paragraph className='text-indent font-size1' style={{lineHeight: '200%'}}>
                总部位于中国深圳，在香港、上海、北京、日本设有销售据点。作为专业的代理商，本公司拥有一批充满朝气、积极负责、经验丰富的市场销售团队和技术团队，以具有市场竞争力的解决方案为客户提供一站式全方位的服务。
              </Paragraph>
              
          </Flex>
          </Col>
        </Row>

        <div>
          <div className='mt-30'>
            <Divider className='divider-text divider-text-sm'>HISTORY</Divider>
            <Title className='text-center text-primary' level={3}>发展历程</Title>
          </div>

          {/* 里程碑 */}
          <Flex vertical style={{ padding: token.paddingLG }}>
            <Timeline
              mode="alternate"
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
        </div>
        <div>
          {/* 核心价值 */}
          <div className='mt-30 mb-30'>
            <Divider className='divider-text divider-text-sm'>CORE VALUES</Divider>
            <Title className='text-center text-primary' level={3}>核心价值</Title>
          </div>
          <Flex justify='center' align='center' gap={token.sizeMD}>
            <Card>
              <Title level={4}>
                创新驱动发展
              </Title>
              <Paragraph type="secondary">
                我们每年将超过30%的营收投入研发，持续引领行业技术创新
              </Paragraph>
            </Card>
            <Card>
              <Title level={4}>
                技术赋能未来
              </Title>
              <Paragraph type="secondary">
                拥有50+项技术专利，服务全球1000+企业客户
              </Paragraph>
            </Card>
            <Card>
              <Title level={4}>
                技术赋能未来
              </Title>
              <Paragraph type="secondary">
                拥有50+项技术专利，服务全球1000+企业客户
              </Paragraph>
            </Card>
          </Flex>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
