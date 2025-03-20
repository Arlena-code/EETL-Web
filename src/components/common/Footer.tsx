import React from 'react';
import { Flex, Typography, Divider, Button, FloatButton, Grid  } from 'antd';
import { PhoneFilled, MailFilled } from '@ant-design/icons';

const { Text } = Typography;
import logo from '@/assets/images/EETL_logo_light.png'

const { useBreakpoint } = Grid;
import AddressIcon from '@/assets/icons/address-light.svg';
import CompanyIcon from '@/assets/icons/company-light.svg';

// 将 SVG 转换为 React 组件
const addressIcon = (
  <img src={AddressIcon} alt="Address" style={{ width: '18px', height: '18px' }} />
);
const companyIcon = (
  <img src={CompanyIcon} alt="Company" style={{ width: '18px', height: '18px' }} />
);
const Footer: React.FC = () => {
  const screens = useBreakpoint();
  return (
    <footer style={{ background: '#102f5a' }}>
      <div className='container'>
        <Flex 
          justify="space-between" 
          gap={16} 
          style={{ alignItems: 'stretch', flexDirection: screens.md ? 'row' : 'column' }}
        >
          {/* 第一块：Logo 和联系方式 */}
          <Flex vertical gap={15} style={{ width: screens.md ? '30%' : '100%' }} className='pt-40 pb-20'>
            <div>
              <img 
                src={logo}
                alt="Logo"
                style={{ height: screens.md ? 60 : 40 }}
              />
            </div>
            <div className='pt-10 pl-5'>
              <Flex className='mb-15' align="center" gap={8}>
                {companyIcon}
                <Text>公司：研达创新电子（深圳）有限公司</Text>
              </Flex>
              <Flex className='mb-15' align="center" gap={8}>
                {addressIcon}
                <Text>地址：深圳市南山区留仙大道4168号众冠时代广场A座39楼3902室</Text>
              </Flex>
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
          <Divider type="vertical" style={{ height: 'auto', margin: '0 10px', borderColor: 'rgba(255, 255, 255, 0.2)' }} />
          {/* 第二块：产品咨询 */}
          <Flex vertical gap={15} style={{ width: screens.md ? '35%' : '100%' }} className={`${screens.md ? 'mt-30 pt-45' : ''} pb-20`}>
            <Text className='mb-5' style={{ fontSize: 18 }}>产品咨询</Text>
            <Text>
              无论是批量采购询价、替代料号匹配，还是技术参数确认，只需留下您的需求，将会获得：
            </Text>
            <ul>
              <li className='mb-15'>• 20年+行业经验团队的一站式解决方案；</li>
              <li className='mb-15'>• 自主选择沟通方式：在线客服/企业微信/专属客户经理电话跟进，
              守护每一次询盘的安全与效率，让元器件采购更智能、更省心。</li>
            </ul>
            <div className='text-center pt-15'>
              <Button color="primary" className='button-normal' shape="round" href="/aboutus" style={{width: '160px',height: '46px'}}>
                点击咨询
              </Button>
            </div>
          </Flex>
          <Divider type="vertical" style={{ height: 'auto', margin: '0 10px', borderColor: 'rgba(255, 255, 255, 0.2)' }} />
          {/* 第三块：分部地址 */}
          <Flex vertical gap={15} style={{ width: screens.md ? '35%' : '100%' }} className={`${screens.md ? 'mt-30 pt-45' : ''} pb-20`}>
            <Text style={{ fontSize: 18 }}>分部地址</Text>
            <Flex align="center" gap={8}>
              {addressIcon}
              <Text>
                上海：上海市长宁区仙霞路319号远东国际广场A栋6楼603室
              </Text>
            </Flex>
            <Flex align="center" gap={8}>
              {addressIcon}
              <Text>
                北京：北京市朝阳区来广营西路5号院诚盈中心1号楼5层515室
              </Text>
            </Flex>
            <Flex align="center" gap={8}>
              {addressIcon}
              <Text>
                香港：香港新界荃灣柴灣角街84-92號順豐工業中心16楼P-Q室
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </div>
      <FloatButton.BackTop visibilityHeight={0} />
      <Divider style={{ margin: '20px 0' }} />

      {/* 版权信息 */}
      <Text className='pb-20 pt-20' style={{ textAlign: 'center', display: 'block' }}>
        版权所有 © 研达创新电子（深圳）有限公司 <span className='ml-30'>粤ICP备2021155542号</span>
      </Text>
    </footer>
  );
};

export default Footer;
