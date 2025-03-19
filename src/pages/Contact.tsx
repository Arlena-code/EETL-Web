import React from 'react';
import { Image, Divider, Typography, theme, Tabs, Flex, Grid } from 'antd';
import { PhoneFilled, MailFilled } from '@ant-design/icons';
const { Title, Text } = Typography;
import type { TabsProps } from 'antd';
import Amap from '../components/Amap';

const { useToken } = theme;
const { useBreakpoint } = Grid;
import bannerContact from '@/assets/images/banner_contact.png';
import addressicon from '@/assets/icons/address.svg';
const addressIcon = <img src={addressicon} alt="Address" style={{ width: '18x', height: '18px' }} />

const Contact: React.FC = () => {
  const { token } = useToken();
  const screens = useBreakpoint();
  
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'EETL 深圳',
      children: (
        <div className={`${screens.md ? 'p-20' : ''} bg-light`}>
          <Flex gap={screens.md ? 40 : 8} vertical={!screens.md} className={screens.md ? '' : 'p-10'}>
            <Flex className='' align="center" gap={8}>
              {addressIcon}
              <div>
                <Text>地址：39楼3902室</Text><br/>
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
            <Amap lng={113.9700} lat={22.5884} infoWindowContent='<div style="padding: 10px;">EETL 深圳办公室<br/>众冠时代广场A座39楼</div>' />  {/* 深圳坐标 */}
          </div>
        </div>
      ),
    },
    {
      key: '2',
      label: 'EETL 上海',
      children: (
        <div className={`${screens.md ? 'p-20' : ''} bg-light`}>
          <Flex gap={screens.md ? 40 : 8} vertical={!screens.md} className={screens.md ? '' : 'p-10'}>
            <Flex className='' align="center" gap={8}>
              {addressIcon}
              <div>
                <Text>地址：上海市长宁区仙霞路319号远东国际广场A栋6楼603室</Text><br/>
                <Text>Add： Room 603, 6 / F, Building A, Far East International Plaza, No.319 Xianxia Road, Changning District, Shanghai，China. </Text>
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
            <Amap lng={121.4072} lat={31.2124} infoWindowContent='<div style="padding: 10px;">EETL 深圳<br/>众冠时代广场A座39楼</div>' />  {/* 上海坐标 */}
          </div>
        </div>
      ),
    },
    {
      key: '3',
      label: 'EETL 北京',
      children: (
        <div className={`${screens.md ? 'p-20' : ''} bg-light`}>
          <Flex gap={screens.md ? 40 : 8} vertical={!screens.md} className={screens.md ? '' : 'p-10'}>
            <Flex className='' align="center" gap={8}>
              {addressIcon}
              <div>
                <Text>地址：北京市朝阳区来广营西路5号院诚盈中心1号楼5层515室</Text><br/>
                <Text>Add： Room 515, Building 1, Chengying Center, No.5 Laiguangying West Road, Chaoyang District, Beijing, China. </Text>
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
            <Amap lng={116.4725} lat={40.0273} infoWindowContent='<div style="padding: 10px;">EETL 北京<br/>朝阳区院诚盈中心1号楼</div>' />  {/* 北京坐标 */}
          </div>
        </div>
      ),
    },
    {
      key: '4',
      label: 'EETL 香港',
      children: (
        <div className={`${screens.md ? 'p-20' : ''} bg-light`}>
          <Flex gap={screens.md ? 40 : 8} vertical={!screens.md}  className={screens.md ? '' : 'p-10'}>
            <Flex className='' align="center" gap={8}>
              {addressIcon}
              <div>
                <Text>地址：香港新界荃湾柴湾角街84-92号顺丰工业中心16楼P-Q室</Text><br/>
                <Text>Add： Room P-Q,16th Floor，Shield Industrial Centre，No.84-92 Chai Wan Kok Street，Tsuen Wan，New Territories，Hong Kong.</Text>
              </div>
            </Flex>
            <div style={{whiteSpace: 'nowrap'}}>
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
            <Amap lng={114.1204} lat={22.3761} infoWindowContent='<div style="padding: 10px;">EETL 香港<br/>顺丰工业中心16楼</div>' />  {/* 香港坐标 */}
          </div>
        </div>
      ),
    },
  ]
  const onChange = (key: string) => {
    console.log(key);
  };
  return (
    <div style={{paddingBottom: '80px'}}>
      <div className="position-relative">
        <Image
          width={'100%'}
          preview={false}
          src={bannerContact}
          style={{ height: screens.md ? '250px' : '150px', objectFit: 'cover', objectPosition: '50% 50%' }}
          placeholder={
            <Image
              preview={false}
              src={bannerContact}
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
      <div className='container mt-50 mb-50'>
        <div className='tabs-common tabs-vertical-4in1'>
          <Tabs defaultActiveKey="1" tabPosition={screens.md ? "left" : 'top'} type="card" centered size="large" className='tabs-vertical-75' items={items} onChange={onChange} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
