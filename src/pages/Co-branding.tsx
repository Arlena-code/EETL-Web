import React from 'react';
import { useTranslation } from 'react-i18next';
import { Tabs, Image, Typography, Divider, theme, Grid } from 'antd';
import type { TabsProps } from 'antd';
import CoBrandingProduct from '../components/CoBranding';
interface CoBranding {
  id: number;
  name: string;
  category: string;
  description: string;
  features: string[];
  image: string;
}
const { Title, Paragraph } = Typography;
const { useToken } = theme;
const { useBreakpoint } = Grid;

import bannerCoBranding from '@/assets/images/banner-cobrand.jpg';
import logoCompany01 from '@/assets/images/logo_company_01.png';
import logoCompany02 from '@/assets/images/logo_company_02.png';
import logoCompany03 from '@/assets/images/logo_company_03.png';
import logoCompany04 from '@/assets/images/logo_company_04.png';
import logoCompany05 from '@/assets/images/logo_company_05.png';
import logoCompany06 from '@/assets/images/logo_company_08.png';
import logoCompany07 from '@/assets/images/logo_company_09.png';
import productTaiyo1 from '@/assets/images/product/brands/taiyo1.png';
import productTaiyo2 from '@/assets/images/product/brands/taiyo2.png';
import productTaiyo3 from '@/assets/images/product/brands/taiyo3.png';
import productTaiyo4 from '@/assets/images/product/brands/taiyo4.png';
import productTaiyo5 from '@/assets/images/product/brands/taiyo5.png';
import productTaiyo6 from '@/assets/images/product/brands/taiyo6.png';
const CoBranding: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { token } = useToken();
  const screens = useBreakpoint();
  const brandTaiyo = [
    { 
      src: productTaiyo1,
      name: t('product.Taiyo1'),
      company: 'Taiyo Yuden',
      description: '2000多款产品',
      deliceryTime: '三个工作日內出貨'
    },
    { src: productTaiyo2,
      name: t('product.Taiyo2'),
      company: 'Taiyo Yuden',
      description: '2000多款产品',
      deliceryTime: '三个工作日內出貨'
    },
    { src: productTaiyo3,
      name: t('product.Taiyo3'),
      company: 'Taiyo Yuden',
      description: '2000多款产品',
      deliceryTime: '三个工作日內出貨'
    },
    { src: productTaiyo4,
      name: t('product.Taiyo4'),
      company: 'Taiyo Yuden',
      description: '2000多款产品',
      deliceryTime: '三个工作日內出貨'
    },
    { src: productTaiyo5,
      name: t('product.Taiyo5'),
      company: 'Taiyo Yuden',
      description: '2000多款产品',
      deliceryTime: '三个工作日內出貨'
    },
    { src: productTaiyo6,
      name: t('product.Taiyo6'),
      company: 'Taiyo Yuden',
      description: '2000多款产品',
      deliceryTime: '三个工作日內出貨'
    },
  ];

  const items: TabsProps['items'] = [
    {
      key: '0',
      label: t('coBranding.partnerBrands'),
    },
    {
      key: '1',
      label: 'TAIYO YUDEN',
      children: (
        <div className='bg-light p-20'>
          <Title level={3} className='text-secondary mb-5 mt-10' style={{ textTransform: 'uppercase' }}>TAIYO YUDEN</Title>
          <Divider style={{ marginTop: '0' }} />
          <Image src={logoCompany01} height={30} preview={false} />
          <div className='mt-20'>
            <Paragraph className='text-paragraph text-indent'>{t('coBranding.taiyo.intro1')}</Paragraph>
            <Paragraph className='text-paragraph text-indent'>{t('coBranding.taiyo.intro2')}</Paragraph>
            <Paragraph className='text-paragraph text-indent'>{t('coBranding.taiyo.partnership')}</Paragraph>
            <Paragraph className='text-paragraph text-indent'>{t('coBranding.taiyo.mainProducts')}</Paragraph>
            <Paragraph className='text-paragraph text-indent'>{t('coBranding.website')}：<a href='https://www.yuden.co.jp/cs/' target='_blank'>https://www.yuden.co.jp/cs/</a></Paragraph>
          </div>
          <div className='mt-30'>
            <CoBrandingProduct brands={brandTaiyo} />
          </div>
        </div>
      ),
    },
    {
      key: '2',
      label: 'ELNA',
      children: (
        <div className='bg-light p-20'>
          <Title level={3} className='text-secondary mb-5 mt-10' style={{ textTransform: 'uppercase' }}>ELNA</Title>
          <Divider style={{ marginTop: '0' }} />
          <span className='mr-30'><Image src={logoCompany02} height={40} preview={false} /></span><Image src={logoCompany01} height={30} preview={false} />
          <div className='mt-20'>
            <Paragraph className='text-paragraph text-indent'>{t('coBranding.elna.intro1')}</Paragraph>
            <Paragraph className='text-paragraph text-indent'>{t('coBranding.elna.intro2')}</Paragraph>
            <Paragraph className='text-paragraph text-indent'>{t('coBranding.elna.partnership')}</Paragraph>
            <Paragraph className='text-paragraph text-indent'>{t('coBranding.website')}：<a href='https://www.elna.co.jp/' target='_blank'>https://www.elna.co.jp/</a></Paragraph>
          </div>
          <div className='mt-30'>
            <CoBrandingProduct brands={brandTaiyo} />
          </div>
        </div>
      ),
    },
    {
      key: '3',
      label: 'HRS',
      children: (
        <div className='bg-light p-20'>
          <Title level={3} className='text-secondary mb-5 mt-10' style={{ textTransform: 'uppercase' }}>HRS</Title>
          <Divider style={{ marginTop: '0' }} />
          <Image src={logoCompany03} height={50} preview={false} />
          <div className='mt-20'>
            <Paragraph className='text-paragraph text-indent'>{t('coBranding.hrs.intro1')}</Paragraph>
            <Paragraph className='text-paragraph text-indent'>{t('coBranding.hrs.partnership')}</Paragraph>
            <Paragraph className='text-paragraph text-indent'>{t('coBranding.website')}：<a href='https://www.hirose.com/?lang=zh' target='_blank'>https://www.hirose.com/?lang=zh</a></Paragraph>
          </div>
          <div className='mt-30'>
            <CoBrandingProduct brands={brandTaiyo} />
          </div>
        </div>
      ),
    },
    {
      key: '4',
      label: 'PROSEMI',
      children: (
        <div className='bg-light p-20'>
          <Title level={3} className='text-secondary mb-5 mt-10' style={{ textTransform: 'uppercase' }}>Prosemi</Title>
          <Divider style={{ marginTop: '0' }} />
          <Image src={logoCompany04} preview={false} />
          <div className='mt-20'>
            <Paragraph className='text-paragraph text-indent'>{t('coBranding.prosemi.intro1')}</Paragraph>
            <Paragraph className='text-paragraph text-indent'>{t('coBranding.prosemi.partnership')}</Paragraph>
            <Paragraph className='text-paragraph text-indent'>{t('coBranding.website')}：<a href='http://www.prosemitech.com/index_cn.aspx' target='_blank'>http://www.prosemitech.com/index_cn.aspx</a></Paragraph>
          </div>
          <div className='mt-30'>
            <CoBrandingProduct brands={brandTaiyo} />
          </div>
        </div>
      ),
    },
    {
      key: '5',
      label: 'ROHM',
      children: (
        <div className='bg-light p-20'>
          <Title level={3} className='text-secondary mb-5 mt-10' style={{ textTransform: 'uppercase' }}>Rohm</Title>
          <Divider style={{ marginTop: '0' }} />
          <Image src={logoCompany05} preview={false} />
          <div className='mt-20'>
            <Paragraph className='text-paragraph text-indent'>{t('coBranding.rohm.intro1')}</Paragraph>
            <Paragraph className='text-paragraph text-indent'>{t('coBranding.rohm.partnership')}</Paragraph>
            <Paragraph className='text-paragraph text-indent'>{t('coBranding.website')}：<a href='https://www.rohm.com.cn/' target='_blank'>https://www.rohm.com.cn/</a></Paragraph>
          </div>
          <div className='mt-30'>
            <CoBrandingProduct brands={brandTaiyo} />
          </div>
        </div>
      ),
    },
    {
      key: '6',
      label: 'SUNWAY',
      children: (
        <div className='bg-light p-20'>
          <Title level={3} className='text-secondary mb-5 mt-10'>{t('coBranding.sunway.title')}</Title>
          <Divider style={{ marginTop: '0' }} />
          <Image src={logoCompany06} preview={false} />
          <div className='mt-20'>
            <Paragraph className='text-paragraph text-indent'>{t('coBranding.sunway.intro1')}</Paragraph>
            <Paragraph className='text-paragraph text-indent'>{t('coBranding.sunway.partnership')}</Paragraph>
            <Paragraph className='text-paragraph text-indent'>{t('coBranding.website')}：<a href='http://www.sz-sunway.com' target='_blank'>http://www.sz-sunway.com</a></Paragraph>
          </div>
          <div className='mt-30'>
            <CoBrandingProduct brands={brandTaiyo} />
          </div>
        </div>
      ),
    },
    {
      key: '7',
      label: 'INVSEMI',
      children: (
        <div className='bg-light p-20'>
          <Title level={3} className='text-secondary mb-5 mt-10'>{t('coBranding.invsemi.title')}</Title>
          <Divider style={{ marginTop: '0' }} />
          <Image src={logoCompany07} preview={false} />
          <div className='mt-20'>
            <Paragraph className='text-paragraph text-indent'>{t('coBranding.invsemi.intro1')}</Paragraph>
            <Paragraph className='text-paragraph text-indent'>{t('coBranding.invsemi.partnership')}</Paragraph>
            <Paragraph className='text-paragraph text-indent'>{t('coBranding.invsemi.vision')}</Paragraph>
            <Paragraph className='text-paragraph text-indent'>{t('coBranding.website')}：<a href='http://www.invsemi.com/' target='_blank'>http://www.invsemi.com/</a></Paragraph>
          </div>
          <div className='mt-30'>
            <CoBrandingProduct brands={brandTaiyo} />
          </div>
        </div>
      ),
    }
  ];
  const onChange = (key: string) => {
    console.log(key);
  };

  return (
    <div style={{paddingBottom: '80px'}}>
      <div className="position-relative">
        <Image
          width={'100%'}
          preview={false}
          src={bannerCoBranding}
          style={{ height: screens.md ? '250px' : '150px', objectFit: 'cover', objectPosition: '50% 50%' }}
          placeholder={
            <Image
              preview={false}
              src={bannerCoBranding}
            />
          }
        />
        <div className='banner-text' style={{ 
          maxWidth: '600px',
          width: '80%',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          {i18n.language !== 'en' ? (
            <div>
              <Divider className='divider-text text-light'>{t('coBranding.partnerBrands')}</Divider>
              <Title className='text-center' level={2} style={{fontSize: screens.md ? token.fontSizeHeading1 : '1.5rem'}}>{t('coBranding.partnerBrands')}</Title>
            </div>
          )
            : (<Divider className='divider-text text-light'><Title className='mb-0' level={2}>{t('coBranding.partnerBrands')}</Title></Divider>)
          }
        </div>
      </div>
      <div className='container'>
        <div className='tabs-common mt-30 mb-30'>
          <Tabs defaultActiveKey="1" tabPosition={screens.md ? "left" : 'top'} type="card" centered size="large" className='tabs-vertical-75' items={items} onChange={onChange} />
        </div>
      </div>
    </div>
  );
};

export default CoBranding;
