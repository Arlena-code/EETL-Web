import React from 'react';
import { Tabs, Image, Typography, Divider, theme } from 'antd';
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
const CoBranding: React.FC = () => {
  const { token } = useToken();
  
  const brandTaiyo = [
    { 
      src: './src/assets/images/product/taiyo/taiyo1.png',
      name: '陶瓷电容器',
      company: 'Taiyo Yuden',
      description: '2000多款产品',
      deliceryTime: '三个工作日內出貨'
    },
    { src: './src/assets/images/product/taiyo/taiyo2.png',
      name: '能源设备-电容',
      company: 'Taiyo Yuden',
      description: '2000多款产品',
      deliceryTime: '三个工作日內出貨'
    },
    { src: './src/assets/images/product/taiyo/taiyo3.png',
      name: '模块',
      company: 'Taiyo Yuden',
      description: '2000多款产品',
      deliceryTime: '三个工作日內出貨'
    },
    { src: './src/assets/images/product/taiyo/taiyo4.png',
      name: '多层陶瓷器件',
      company: 'Taiyo Yuden',
      description: '2000多款产品',
      deliceryTime: '三个工作日內出貨'
    },
    { src: './src/assets/images/product/taiyo/taiyo5.png',
      name: '电感器',
      company: 'Taiyo Yuden',
      description: '2000多款产品',
      deliceryTime: '三个工作日內出貨'
    },
    { src: './src/assets/images/product/taiyo/taiyo6.png',
      name: 'FBAR、SAW、RF模块',
      company: 'Taiyo Yuden',
      description: '2000多款产品',
      deliceryTime: '三个工作日內出貨'
    },
    { src: './src/assets/images/product/taiyo/taiyo7.jpg',
      name: '中高压',
      company: 'Taiyo Yuden',
      description: '2000多款产品',
      deliceryTime: '三个工作日內出貨'
    },
  ];

  const items: TabsProps['items'] = [
    {
      key: '0',
      label: '合作品牌',
      children: (
        <div className='bg-light p-20'>
          <Title level={3} className='text-secondary mb-5 mt-10'>EETL合作品牌</Title>
          <Divider style={{ marginTop: '0' }} />
          <Paragraph className='text-paragraph text-indent'>
            我们与全球多家知名电子元器件制造商建立了长期稳定的合作关系，为客户提供高质量的产品和服务。
          </Paragraph>
          <Paragraph className='text-paragraph text-indent'>
            以下是我们主要合作的品牌产品，点击左侧标签可以查看每个品牌的详细介绍。
          </Paragraph>
          <div className='mt-30'>
            <CoBrandingProduct brands={brandTaiyo} />
          </div>
        </div>
      ),
    },
    {
      key: '1',
      label: 'TAIYO YUDEN',
      children: (
        <div className='bg-light p-20'>
          <Title level={3} className='text-secondary mb-5 mt-10' style={{ textTransform: 'uppercase' }}>TAIYO YUDEN</Title>
          <Divider style={{ marginTop: '0' }} />
          <Image src='./src/assets/images/logo_company_01.png' height={30} preview={false} />
          <div className='mt-20'>
            <Paragraph className='text-paragraph text-indent'>太阳诱电自1950年创设以来，不断致力于研发、生产符合时代需求的电子元器件。现在，正在进行着电容器、电感器、电路产品、SAW/FBAR设备、能源器件、光记录媒体等的研究、开发、生产和销售。太阳诱电的产品主要用于IT和电子领域中，搭载于智能手机、个人计算机等通信、信息设备及影音设备等形形色色的设备上。</Paragraph>
            <Paragraph className='text-paragraph text-indent'>近年来，太诱还努力向不断扩大并且备受期待的汽车、工业设备、环境能源市场拓展产品线。今后，太诱将进一步加强与客户及所有利益相关人士的联系，并强烈期待构筑起双赢的合作伙伴关系。</Paragraph>
            <Paragraph className='text-paragraph text-indent'>主要产品：陶瓷电容器、电感器、移动通信用FBAR/SAW件、模块、储能元件</Paragraph>
            <Paragraph className='text-paragraph text-indent'>网址：<a href='https://www.yuden.co.jp/cs/' target='_blank'>https://www.yuden.co.jp/cs/</a></Paragraph>
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
          <Image src='./src/assets/images/logo_company_02.png' height={40} preview={false} />
          <div className='mt-20'>
            <Paragraph className='text-paragraph text-indent'>ELNA（伊娜）是日本老牌知名电解电容生产商,成立于1937年，总部设在日本横滨，上市公司。主要股东为：日本工业合作伙伴、旭硝子株式会社。全球拥有七家生产规模宏大的工厂及专业的研发中心，产品系列非常多:CERAFINE(红袍)、DUOREX(紫袍)、LongLife(银字)、SILMIC(II)(棕神)、FORAUDIO(黑底金字)。</Paragraph>
            <Paragraph className='text-paragraph text-indent'>ELNA制造经营电解电容产品已经有70多年，而研究开发音频专用电容也有了25年的历史,ELNA的电解电容在音频领域名列前茅。ELNA的音频专用电解电容在很多中、高档音响器材中都可以看到它的身影，特别是在天龙Denon、马兰士Marantz、金嗓子Accuphase、音乐之旅Electrocompaniet，等HI-FI、HI-END音响器材更常见。</Paragraph>
            <Paragraph className='text-paragraph text-indent'>网址：<a href='https://www.elna.co.jp/' target='_blank'>https://www.elna.co.jp/</a></Paragraph>
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
          <Image src='./src/assets/images/logo_company_03.png' height={50} preview={false} />
          <div className='mt-20'>
            <Paragraph className='text-paragraph text-indent'>广濑电机株式会社（Hirose Electric Group）是日本一家全球领先的创新连接方案提供商,先进的技术服务、优秀的客户支持及全球制造能力为客户提供多种连接器方案,包括:工业,通讯,消费类电子,电脑及汽车产业。公司于1937年在东京作为广濑制造成立。1963年8月，公司更名为广濑电机，并在1968年开始在国际上销售产品。</Paragraph>
            <Paragraph className='text-paragraph text-indent'>广濑电机株式会社也生产智能手机柔性印刷电路，公司从国外获得的收入约占总收入的70％左右。广濑一直以高质量，多品种，革新的产品一直以来在连接器行业中处于领先地位。</Paragraph>
            <Paragraph className='text-paragraph text-indent'>网址：<a href='https://www.hirose.com/?lang=zh' target='_blank'>https://www.hirose.com/?lang=zh</a></Paragraph>
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
          <Image src='./src/assets/images/logo_company_04.png' preview={false} />
          <div className='mt-20'>
            <Paragraph className='text-paragraph text-indent'>Prosemi是一家全球性服务的电路保护元件企业，为客户提供更具专业性、多种类的组合电路保护。主要产品有EV Fuses电动汽车熔断器、贴片方块保险丝、厚/薄膜贴片保险丝、圆管陶瓷保险丝、TVS管、ESD静电抑制器、放电管......</Paragraph>
            <Paragraph className='text-paragraph text-indent'>Prosemi一直致力于不断技术创新和产品性能的提升，以提供经过验证的解决方案， 根据每个客户的具体情况定制全面的解决方案，领跑于行业标准和超越客户期待。不断的向其他相关市场深入拓展，如新能源、汽车电子、工业配电、家电、发电机控制、船舶应用保护</Paragraph>
            <Paragraph className='text-paragraph text-indent'>发展历程：<br/>2008年 成立第一个实验室<br/>2010年 以IDH的形式将研究成果商业化，进入到消费电子和工业领域<br/>2012年 创立PROSEMI品牌，策划商业运营模式<br/>2014年 PROSEMI在中国苏州建立研发测试中心<br/>2016年 PROSEMI将业务拓展至汽车电子、新能源领域<br/>2018年 PROSEMI为拓展海外市场，成立海外子公司</Paragraph>
            <Paragraph className='text-paragraph text-indent'>网址：<a href='http://www.prosemitech.com/index_cn.aspx' target='_blank'>http://www.prosemitech.com/index_cn.aspx</a></Paragraph>
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
          <Image src='./src/assets/images/logo_company_05.png' preview={false} />
          <div className='mt-20'>
            <Paragraph className='text-paragraph text-indent'>罗姆Rohm作为一家半导体和电子元器件制造商，自创立60多年以来，通过不断积累各项设计技术、制造技术、品质保证技术以及解决方案提案能力，持续扩大业务版图。罗姆在漫长的发展历程中所积累的这些技术和能力可以归纳为“整合技术”、“IDM（垂直统合）”、“丰富的产品群”、“客户导向”这四大特色优势。</Paragraph>
            <Paragraph className='text-paragraph text-indent'>罗姆将充分发挥这些特色优势，聚焦“功率电子”和“模拟”这两大技术领域，为客户提供高附加价值的解决方案，为解决社会问题贡献力量。</Paragraph>
            <Paragraph className='text-paragraph text-indent'>网址：<a href='https://www.rohm.com.cn/' target='_blank'>https://www.rohm.com.cn/</a></Paragraph>
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
          <Title level={3} className='text-secondary mb-5 mt-10'>信维通信</Title>
          <Divider style={{ marginTop: '0' }} />
          <Image src='./src/assets/images/logo_company_08.png' preview={false} />
          <div className='mt-20'>
            <Paragraph className='text-paragraph text-indent'>深圳市信维通信股份有限公司于2006年4月27日成立，是首批国家级高新技术企业之一。2010年11月5日，公司在深圳证券交易所创业板上市，股票代码：300136.SZ。公司主要生产与射频相关的各类电子元器件及模组，如：天线及模组、无线充电模组、EMC/EMI射频隔离器件、精密连接器、高速连接器及线缆、无源器件、声学等。产品应用涉及消费电子（智能手机、个人电脑、智能穿戴设备等）、汽车、物联网/智能家居、通信、数据中心等领域，是国家支持和鼓励的新一代信息产业技术范畴。</Paragraph>
            <Paragraph className='text-paragraph text-indent'>2012年公司以收购世界知名天线厂商——英资莱尔德（北京）为契机，开启了国际化战略布局，搭建了可对接世界一流移动终端厂商的大客户平台。现今，公司的业务版图已遍布8个国家18个地区，完成了全球多个分部的建设。</Paragraph>
            <Paragraph className='text-paragraph text-indent'>截止2023年底，公司员工总数超1万人，营业收入75.48亿元，累计申请专利4138件。公司通过每年不低于营收8%的研发投入，不断引进优秀人才，增加自身技术竞争力，以满足全球客户的更高要求。未来，信维通信将不忘初心，坚持致力于通过对基础材料、基础技术的研究，创造出值得信赖的创新产品与解决方案，为我们的客户创造价值。</Paragraph>
            <Paragraph className='text-paragraph text-indent'>网址：<a href='http://www.sz-sunway.com' target='_blank'>http://www.sz-sunway.com</a></Paragraph>
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
          <Title level={3} className='text-secondary mb-5 mt-10'>芯能</Title>
          <Divider style={{ marginTop: '0' }} />
          <Image src='./src/assets/images/logo_company_09.png' preview={false} />
          <div className='mt-20'>
            <Paragraph className='text-paragraph text-indent'>深圳芯能半导体技术有限公司成立于2013年9月，是一家专注从事功率半导体研发、生产、销售的国家级高新技术企业。公司总部位于深圳，在浙江义乌建有车规级功率模块制造基地，深圳、上海、苏州设有研发中心，并在深圳、上海、苏州、青岛、顺德、杭州等地建立了销售办事处。公司现有员工100多人，研发和技术支持相关人员占比超过50%，经过多年的沉淀和发展，在高压功率器件领域已经成为国内知名的供应商，合作客户超过1000家，广泛分布于小家电、白色家电、工控、新能源汽车、以及太阳能逆变器等领域。</Paragraph>
            <Paragraph className='text-paragraph text-indent'>芯能坚持应用导向、专注研发、开放合作的理念，专注功率芯片、驱动芯片设计开发近十年，产品线不断完善，包括分立器件(Discrete)、智能功率模块(IPM)以及标准功率模块(PIM)，产品广泛应用于工控、家电、以及新能源汽车等市场。公司将继续秉承“责任、创新、坚韧、信任”的价值观，致力于为全球客户提供高可靠性的功率器件。</Paragraph>
            <Paragraph className='text-paragraph text-indent'>通过不断的技术创新让能量传递更有效率，为降低碳排放作出芯能人的贡献！建立能量转换链中最值得信赖的功率半导体品牌！</Paragraph>
            <Paragraph className='text-paragraph text-indent'>网址：<a href='http://www.invsemi.com/' target='_blank'>http://www.invsemi.com/</a></Paragraph>
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
          src="./src/assets/images/banner-cobrand.png"
          style={{ height: '250px', objectFit: 'cover', objectPosition: '50% 50%' }}
          placeholder={
            <Image
              preview={false}
              src="./src/assets/images/banner-cobrand.png"
            />
          }
        />
        <div className='banner-text' style={{ 
          maxWidth: '600px',
          width: '80%',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <Divider className='divider-text text-light'>Co-Branding</Divider>
          <Title className='text-center' level={2} style={{fontSize: token.fontSizeHeading1}}>合作品牌</Title>
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

export default CoBranding;
