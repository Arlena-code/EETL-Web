import React from 'react';
import { Image, Typography, Divider, theme, Row, Col, Button } from 'antd';
const { Title, Paragraph } = Typography;
const { useToken } = theme;

const JoinUs: React.FC = () => {
  const { token } = useToken();

  return (
    <div style={{paddingBottom: '80px'}}>
      <div className="position-relative">
        <Image
          width={'100%'}
          preview={false}
          src="./src/assets/images/banner_joinus.jpg"
          style={{ height: '250px', objectFit: 'cover', objectPosition: '50% 50%' }}
          placeholder={
            <Image
              preview={false}
              src="./src/assets/images/banner_joinus.jpg"
            />
          }
        /> 
        <div className='banner-text' style={{ 
          maxWidth: '600px',
          width: '80%',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <Divider className='divider-text text-light'>Join Us</Divider>
          <Title className='text-center' level={2} style={{fontSize: token.fontSizeHeading1}}>加入我们</Title>
        </div>
      </div>
      <div className='container'>
        <div className='text-center mt-40 mb-30'>
          <Title className='text-primary' level={1}>招聘职位</Title>
          <Title className='text-primary' level={2} style={{fontWeight: 'normal'}}>欢迎加入EETL 共创美好未来</Title>
        </div>
        <div className='mt-20'>
          <Row gutter={30}>
            <Col span={12} lg={8}>
              <div className='mb-20 h-100' style={{backgroundColor: '#f5f5f5',borderTop: '1px solid #340b6d',padding: '20px'}}>
                <Title level={3} className='text-center pb-10' style={{fontWeight: 'normal'}}>销售工程师</Title>
                <Paragraph className='mb-30'>
                  <div className='font-size1'>工作职责：</div>
                  <ul className='list-common mt-10 mb-10'>
                    <li>1、负责被动元器件产品的推广销售工作，开发新客户资源，寻找潜在客户并达成交易；</li>
                    <li>2、负责管理维护现有客户关系，与终端客户搭建长期合作关系；</li>
                    <li>3、完成公司制定的销售任务及回款计划; </li>
                    <li>4、完成公司领导安排及其他部门需要配合的相关工作。</li>
                  </ul>
                </Paragraph>
                <Paragraph className='mb-30'>
                  <div className='font-size1'>工作要求：</div>
                  <ul className='list-common mt-10 mb-10'>
                    <li>1、全日制大专及以上学历，电子类或市场营销等相关专业；</li>
                    <li>2、具有良好的人际沟通、商务谈判能力，能够独立分析和解决问题，抗压能力强；</li>
                    <li>3、工作积极主动，能够吃苦耐劳，勇于开拓创新，热爱销售工作，具有责任心和团队协作精神。 </li>
                  </ul>
                </Paragraph>
              </div>
            </Col>
            <Col span={12} lg={8}>
              <div className='mb-20 h-100' style={{backgroundColor: '#f5f5f5',borderTop: '1px solid #340b6d',padding: '20px'}}>
                <Title level={3} className='text-center pb-10' style={{fontWeight: 'normal'}}>客服专员</Title>
                <Paragraph className='mb-30'>
                  <div className='font-size1'>工作职责：</div>
                  <ul className='list-common mt-10 mb-10'>
                    <li>1、与客户对接，负责跟进客户订单的执行，交期跟进，出货安排等，确保按要求完成交付；</li>
                    <li>2、收集/分析客户需求, 合理控制库存，提高库存周转率；</li>
                    <li>3、负责确认客户的应收账款并跟进催收工作；</li>
                    <li>4、及时处理、回复客户的诉求，维护好客户关系；</li>
                    <li>5、完成公司领导安排及其他部门需要配合的相关工作。</li>
                  </ul>
                </Paragraph>
                <Paragraph className='mb-30'>
                  <div className='font-size1'>工作要求：</div>
                  <ul className='list-common mt-10 mb-10'>
                    <li>1、大专以上学历应届毕业生或有1-2年跟单工作经验；</li>
                    <li>2、善于学习，有较强的沟通能力、抗压能力,并且有较强的责任心和职业道德；</li>
                    <li>3、服从上级安排的工作，工作细致认真、积极主动、有团队协同作战的能力。 </li>
                  </ul>
                </Paragraph>
              </div>
            </Col>
            <Col span={12} lg={8}>
            <div className='mb-20 h-100' style={{backgroundColor: '#f5f5f5',borderTop: '1px solid #340b6d',padding: '20px'}}>
                <Title level={3} className='text-center pb-10' style={{fontWeight: 'normal'}}>产品经理</Title>
                <Paragraph className='mb-30'>
                  <div className='font-size1'>工作职责：</div>
                  <ul className='list-common mt-10 mb-10'>
                    <li>1、负责连接器原厂的对接及原厂关系的维护，价格谈判，订单交期达成，库存控制等；</li>
                    <li>2、协助销售人员推广产品，为客户提供项目设计的产品方案；</li>
                    <li>3、负责协助销售跟进目标客户，协调客户公关，解决客户的设计和生产问题；</li>
                    <li>4、完成公司制定的业绩目标； </li>
                    <li>5、完成领导交待的其他事务。</li>
                  </ul>
                </Paragraph>
                <Paragraph className='mb-30'>
                  <div className='font-size1'>工作要求：</div>
                  <ul className='list-common mt-10 mb-10'>
                    <li>1、全日制本科以上学历，市场营销、工商管理、经济等专业；</li>
                    <li>2、语言要求：英语8级 或 日语1级 或 日语2级且英语6级，有较强的读写能力；</li>
                    <li>3、有较强的协调、沟通能力及人际交往能力以及敏锐的洞察力，具有很强的判断与决策能力，计划和执行能力；</li>
                    <li>4、学习能力和理解能力较强，能尽快熟悉与公司业务相关的知识；工作谨慎细心，责任心强，有工作激情和良好的职业素养与职业操守。</li>
                  </ul>
                </Paragraph>
              </div>
            </Col>
          </Row>
        </div>
        <div className='mt-50 mb-30 text-center'>
          <Button color="primary" variant="outlined"  shape="round" size="large" href="/require" style={{width: '200px'}}>
            投递简历
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
