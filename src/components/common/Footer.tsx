import React from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t, i18n  } = useTranslation();
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
          <Flex vertical gap={15} style={{ width: screens.md ? '33.33%' : '100%' }} className='pt-40 pb-20'>
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
                <Text>{t('footer.company')}</Text>
              </Flex>
              <Flex className='mb-15' align="center" gap={8}>
                <PhoneFilled style={{fontSize: '18px'}} />
                <Text>{t('footer.Tel')}：0755-8837 7106</Text>
              </Flex>
              <Flex className='mb-15' align="center" gap={8}>
                <MailFilled style={{fontSize: '18px'}} />
                <Text>{t('footer.Email')}：Sales@eetl-evo.com</Text>
              </Flex>
              <Flex align="center" gap={8}>
                {addressIcon}
                <Text>
                {i18n.language !== 'en' && (
                  <div>地址：深圳市南山区留仙大道4168号众冠时代广场A座39楼3902室</div>
                )}Add： Room 3902, Block A, Zhongguan Times Square, No.4168 Liuxian Road, Nanshan District, Shenzhen, China.</Text>
              </Flex>
            </div>
          </Flex>
          <Divider type="vertical" style={{ height: 'auto', margin: '0 10px', borderColor: 'rgba(255, 255, 255, 0.2)' }} />
          {/* 第二块：产品咨询 */}
          <Flex vertical gap={15} style={{ width: screens.md ? '33.33%' : '100%' }} className={`${screens.md ? 'mt-30 pt-45' : ''} pb-20`}>
            <Text className='mb-5' style={{ fontSize: 18 }}>{t('footer.productConsultation.title')}</Text>
            <Text>
              {t('footer.productConsultation.description')}
            </Text>
            <ul>
              <li className='mb-15'>• {t('footer.productConsultation.benefits.solution')}</li>
              <li className='mb-15'>• {t('footer.productConsultation.benefits.communication')}</li>
            </ul>
            <div className='text-center pt-15'>
              <Button color="primary" className='button-normal' shape="round" href="mailto:Sales@eetl-evo.com" style={{width: '160px',height: '46px'}}>
                {t('footer.productConsultation.consultButton')}
              </Button>
            </div>
          </Flex>
          <Divider type="vertical" style={{ height: 'auto', margin: '0 10px', borderColor: 'rgba(255, 255, 255, 0.2)' }} />
          {/* 第三块：分部地址 */}
          <Flex vertical gap={15} style={{ width: screens.md ? '33.33%' : '100%' }} className={`${screens.md ? 'mt-30 pt-45' : ''} pb-20`}>
            <Text style={{ fontSize: 18 }}>{t('footer.BranchAdd')}</Text>
            <Flex align="center" gap={8}>
              {addressIcon}
              <Text>
                {i18n.language !== 'en' && (
                  <div>上海：上海市长宁区仙霞路319号远东国际广场A栋6楼603室</div>
                )}
                Add： Room 603, 6 / F, Building A, Far East International Plaza, No.319 Xianxia Road, Changning District, Shanghai，China.
              </Text>
            </Flex>
            <Flex align="center" gap={8}>
              {addressIcon}
              <Text>
              {i18n.language !== 'en' && (
                  <div>北京：北京市朝阳区来广营西路5号院诚盈中心1号楼5层515室</div>
                )}
                Add： Room 515, Building 1, Chengying Center, No.5 Laiguangying West Road, Chaoyang District, Beijing, China.
              </Text>
            </Flex>
            <Flex align="center" gap={8}>
              {addressIcon}
              <Text>
              {i18n.language !== 'en' && (
                  <div>香港：香港新界荃灣柴灣角街84-92號順豐工業中心16楼P-Q室</div>
                )}
                Add： Room P-Q ,16th Floor,Shield Industrial Centre,No.84-92 Chai Wan Kok Street, Tsuen Wan, New Territories, Hong Kong.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </div>
      <FloatButton.BackTop visibilityHeight={0} />
      <Divider style={{ margin: '20px 0' }} />

      {/* 版权信息 */}
      <div className="footer-bottom pb-20 pt-20" style={{ textAlign: 'center', display: 'block' }}>
        <div className="footer-copyright">
          {t('footer.copyright')}<span className='ml-30'>粤ICP备2021155542号</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
