import React from 'react';
import { Flex, Card, Timeline, Typography, theme, Image, Divider, Row, Col, Grid } from 'antd';

const { useToken } = theme;
const { Title, Text, Paragraph } = Typography;
const { useBreakpoint } = Grid;
//images
import bannerAbout from '@/assets/images/banner_about.jpg';
import ImageCompany from '@/assets/images/company.png';
const AboutPage: React.FC = () => {
  const { token } = useToken();
  const screens = useBreakpoint();
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
          src={bannerAbout}
          style={{ height: screens.md ? '250px' : '150px', objectFit: 'cover', objectPosition: '50% 80%' }}
          placeholder={
            <Image
              preview={false}
              src={bannerAbout}
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
        <Row gutter={token.sizeXXL} style={{ padding: screens.md ? '80px 0 40px' : '20px 0 40px' }}>
          {screens.md && ( // 仅在md及以上屏幕显示
            <Col span={12}>
              <img className='w-100' src={ImageCompany} alt="关于我们-研达创新电子（深圳）有限公司" />
            </Col>
          )}

          {/* 内容区域 */}
          <Col span={24} lg={12}>
          <Title level={1} style={{fontSize: token.fontSizeHeading3, lineHeight: '150%'}}>研达创新EETL | 28年电子元器件代理专家 | 一站式供应链服务</Title>
            {/* <Title level={1} style={{fontSize: token.fontSizeHeading3, lineHeight: '150%'}}><span style={{fontSize: token.fontSizeHeading2}}>EETL</span><br/>研达创新电子（深圳）有限公司</Title> */}
            <Divider className='divider-line' style={{ marginTop: token.marginSM }} />
            {!screens.md && (
              <div>
                <img className='w-100' src={ImageCompany} alt="关于我们-研达创新电子（深圳）有限公司" />
              </div>
            )}
            <Flex vertical>
              <Paragraph className='text-indent font-size1' style={{lineHeight: '200%'}}>
                研达创新电子（深圳）有限公司（简称 EETL）成立于 1997 年，总部位于深圳市南山区西丽大学城片区的众冠时代广场，毗邻美丽的大沙河和西丽湖。公司致力于为电子终端产品制造商提供专业的电子元器件供应链服务，凭借自身努力与国内外多家著名电子元器件厂家建立了长期战略性的合作关系，成为其在中国大陆及中国香港地区的代理分销商。
              </Paragraph>
              <Paragraph className='text-indent font-size1 mb-0' style={{ lineHeight: '200%' }}>
              EETL 在电子元配件行业中占据了独特的地位，EETL 的产品和服务广泛应用于多个领域，包括但不限于：
              </Paragraph>
              <ul className='font-size1 mb-10' style={{ lineHeight: '200%', paddingLeft: '2em',listStyle: 'inside' }}>
                <li>消费电子：为各类消费电子产品提供高品质的元器件。</li>
                <li>汽车电子：支持汽车电子领域的创新和发展。</li>
                <li>通信：助力通信设备制造商实现高效、稳定的通信网络。</li>
                <li>工业控制：为工业自动化和智能制造提供可靠的元器件支持。</li>
                <li>新能源：推动新能源技术的应用和普及。</li>
              </ul>
              <Paragraph className='text-indent font-size1' style={{ lineHeight: '200%' }}>
                我们专注于为消费电子、汽车电子、通信、工业控制、新能源等行业提供元器件产品，以及供应链服务和符合市场需求的增值解决方案。公司依托丰富的产品线资源和香港/深圳/上海三地保税仓协同资源优势，客户网络覆盖中国、日本、泰国、新加坡、马来西亚、越南、中国台湾等地。
              </Paragraph>
              <Paragraph className='text-indent font-size1' style={{ lineHeight: '200%' }}>
                EETL 的市场销售团队结合各品牌的产品优势，借助多年在各应用领域的深耕经验，成功地在不同领域的新市场中成为各品牌的重要合作伙伴。公司不仅在中国大陆设有总部，在香港、上海、北京、日本等地也设有销售据点，形成了广泛的销售网络。
              </Paragraph>
          </Flex>
          </Col>
        </Row>

        <div>
          {/* 核心优势 */}
          <div className='mt-30 mb-30'>
            <Divider className='divider-text divider-text-sm'>CORE VALUES</Divider>
            <Title className='text-center text-primary' level={3}>核心优势</Title>
          </div>
          <Row justify='center' gutter={token.sizeMD} style={{ flexDirection: screens.md ? 'row' : 'column' }}>
            <Col span={24} lg={8}>
              <Card className='h-100'>
                <Title level={4}>
                  丰富的产品线
                </Title>
                <Paragraph className='font-size1' style={{lineHeight: '175%'}}>
                EETL 代理经销多家国内外知名品牌的电子元器件，产品覆盖电阻、电容、电感、二极管、三极管等基础元器件，以及微控制器（MCU）、集成电路（IC）等高附加值产品。这些丰富的产品线使 EETL 能够满足不同客户在消费电子、汽车电子、通信、工业控制、新能源等领域的多样化需求。
                </Paragraph>
              </Card>
            </Col>
            <Col span={24} lg={8}>
              <Card className='h-100'>
                <Title level={4}>
                强大的物流资源
                </Title>
                <Paragraph className='font-size1' style={{lineHeight: '175%'}}>
                EETL 充分利用其在深圳、香港和上海三地的物流中心优势，确保了高效的供应链管理和快速的物流配送。这种地理上的战略布局使得 EETL 能够迅速响应客户需求，提供及时、准确的交货服务，极大地提升了客户满意度。
                </Paragraph>
              </Card>
            </Col>
            <Col span={24} lg={8}>
              <Card className='h-100'>
                <Title level={4}>
                客制化供应链服务
                </Title>
                <Paragraph className='font-size1' style={{lineHeight: '175%'}}>
                EETL 拥有一支经验丰富的市场销售团队和技术团队，能够根据客户的特定需求，提供从产品选型到技术支持的一站式服务。这种定制化的服务不仅帮助客户解决了技术难题，还为他们提供了具有市场竞争力的电子元器件解决方案。
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </div>

        <div className='pt-40'>
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
      </div>
    </div>
  );
};

export default AboutPage;
