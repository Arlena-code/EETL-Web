import React from 'react';
import { Image, Divider, Typography, theme, Tabs, Flex } from 'antd';
import { PhoneFilled, MailFilled } from '@ant-design/icons';
const { Title, Text } = Typography;
import type { TabsProps } from 'antd';
import Amap from '../components/Amap';

const { useToken } = theme;
const addressIcon = <img src='./src/assets/icons/address.svg' alt="Address" style={{ width: '18x', height: '18px' }} />
const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'EETL 深圳',
    children: (
      <div className='bg-light p-20'>
        <Flex gap={40}>
          <Flex className='mb-15' align="center" gap={8}>
            {addressIcon}
            <div>
              <Text>地址：深圳市南山区留仙大道4168号众冠时代广场A座39楼3902室</Text><br/>
              <Text>Add： Room 3902, Block A, Zhongguan Times Square,No.4168 Liuxian Road,NanshanDistrict,Shenzhen, China. </Text>
            </div>
          </Flex>
          <div>
            <Flex className='mb-15' align="center" gap={8}>
              <PhoneFilled />
              <Text>电话：0755-8837 7106</Text>
            </Flex>
            <Flex align="center" gap={8}>
              <MailFilled />
              <Text>邮箱：Sales@etlevo.com</Text>
            </Flex>
          </div>
        </Flex>
        <Divider />
        <div className='mt-30'>
          <Amap />
        </div>
      </div>
    ),
  },
]
const Contact: React.FC = () => {
  const { token } = useToken();
  const onChange = (key: string) => {
    console.log(key);
  };
  return (
    <div style={{paddingBottom: '80px'}}>
      <div className="position-relative">
        <Image
          width={'100%'}
          preview={false}
          src="./src/assets/images/banner_joinus.jpg"
          style={{ height: '250px', objectFit: 'cover', objectPosition: '50% 80%' }}
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
          <Divider className='divider-text text-light'>CONTACT US</Divider>
          <Title className='text-center' level={2} style={{fontSize: token.fontSizeHeading1}}>联系我们</Title>
        </div>
      </div>
      <div className='container'>
      <div className='tabs-common mt-30 mb-30'>
          <Tabs defaultActiveKey="1" tabPosition="left" type="card" centered size="large" className='tabs-vertical-75' items={items} onChange={onChange} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
