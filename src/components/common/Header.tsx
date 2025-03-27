import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, type MenuProps, Input, Button, Grid, Drawer, Space, Dropdown } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import type { DrawerStyles } from 'antd/es/drawer/DrawerPanel';
import { CloseOutlined } from '@ant-design/icons'
import { 
  HomeFilled,
  GlobalOutlined,
  MenuOutlined
} from '@ant-design/icons';
import type { GetProps } from 'antd';

const { useBreakpoint } = Grid;
import logo from '@/assets/images/EETL_logo.png'
import langicon from '@/assets/icons/Chinese.svg'
import englishicon from '@/assets/icons/English.svg'

type SearchProps = GetProps<typeof Input.Search>
const { Search } = Input
const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value)

type MenuItem = Required<MenuProps>['items'][number];

const AppHeader: React.FC = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const screens = useBreakpoint();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const [language, setLanguage] = useState('zh'); // 当前语言状态
  const [langIcon, setLangIcon] = useState(langicon); // 当前语言图标

  const handleLanguageChange = (lang: string) => {
    const fullLang = lang === 'zh' ? 'zh' : 'en'; 
    setLanguage(fullLang);
    setLangIcon(lang === 'zh' ? langicon : englishicon);
    i18n.changeLanguage(fullLang); 
    // console.log('切换到', lang === 'zh' ? '简体中文' : 'English');
  };

  const drawerStyles: DrawerStyles = {
    body: {
      padding: 0,
    },
  };

  // 在渲染时使用language状态
  const currentLanguage = language === 'zh' ? '简体中文' : 'English';

  const menuItems: MenuItem[] = [
    { 
      key: '/',
      label: (
        <Link to="/" 
          onMouseEnter={(e) => e.currentTarget.textContent = 'Home'}
          onMouseLeave={(e) => e.currentTarget.textContent = t('home')}
        >
          {t('home')}
        </Link>
      ),
      icon: <HomeFilled />
    },
    {
      key: '/aboutus',
      label: (
        <Link to="/aboutus"
          onMouseEnter={(e) => e.currentTarget.textContent = 'About Us'}
          onMouseLeave={(e) => e.currentTarget.textContent = t('aboutUs.title')}
        >
          {t('aboutUs.title')}
        </Link>
      ),
    },
    {
      key: '/products',
      label: (
        <Link to="/products"
          onMouseEnter={(e) => e.currentTarget.textContent = 'Products'}
          onMouseLeave={(e) => e.currentTarget.textContent = t('products')}
        >
          {t('products')}
        </Link>
      ),
    },
    {
      key: '/co-branding',
      label: (
        <Link to="/co-branding"
          onMouseEnter={(e) => e.currentTarget.textContent = 'Partner Brands'}
          onMouseLeave={(e) => e.currentTarget.textContent = t('partnerBrands')}
        >
          {t('partnerBrands')}
        </Link>
      ),
    },
    {
      key: '/news',
      label: (
        <Link to="/news"
          onMouseEnter={(e) => e.currentTarget.textContent = 'News'}
          onMouseLeave={(e) => e.currentTarget.textContent = t('news')}
        >
          {t('news')}
        </Link>
      ),
    },
    {
      key: '/joinus',
      label: (
        <Link to="/joinus"
          onMouseEnter={(e) => e.currentTarget.textContent = 'Join Us'}
          onMouseLeave={(e) => e.currentTarget.textContent = t('joinUs.title')}
        >
          {t('joinUs.title')}
        </Link>
      ),
    },
    {
      key: '/contact',
      label: (
        <Link to="/contact"
          onMouseEnter={(e) => e.currentTarget.textContent = 'Contact Us'}
          onMouseLeave={(e) => e.currentTarget.textContent = t('contact')}
        >
          {t('contact')}
        </Link>
      ),
    }
  ];

  return (
    <header>
      <div className="header-container">
        <div className='container header-top'>
          {/* Logo */}
          <a href='/'>
            {screens.md ? (
              <img 
                src={logo}
                alt="研达创新电子（深圳）有限公司-EETL" 
                style={{ height: 40 }} 
              />
            ) : (
              <img 
                src={logo}
                alt="研达创新电子（深圳）有限公司-EETL" 
                style={{ height: 30 }} 
              />
            )}
          </a>
          
          
          {/* 搜索框 */}
          {screens.md && (
            <Search 
              size="large" 
              allowClear 
              placeholder={t("searchPlaceholder")}
              onSearch={onSearch} 
              style={{ maxWidth: 615 }} // 修复：使用对象而非字符串
              enterButton 
            />
          )}

          {/* 語言切換 */}
          {screens.md ? (
          <div className='languageBtn'>
            <GlobalOutlined style={{ fontSize: '18px' }} />
            {/* 简体中文 */}
            <Button
              type="text"
              onClick={() => handleLanguageChange('zh')}
            >
              {screens.md ? '简体中文' : ''}
            </Button>

            {/* 英文 */}
            <Button
              type="text"
              onClick={() => handleLanguageChange('en')}
            >
              {screens.md ? 'ENG' : ''}
            </Button>
          </div>
          ) : (
              <Space size={16}>
                <Dropdown menu={{ items: [
                    { key: 'zh', label: '简体中文', onClick: () => handleLanguageChange('zh') },
                    { key: 'en', label: 'English', onClick: () => handleLanguageChange('en') }
                  ] }} trigger={['click']}>
                  <img 
                    className='icon-size' 
                    src={langIcon} 
                    style={{ cursor: 'pointer' }} 
                    alt={currentLanguage} 
                  />
                </Dropdown>
                <Button 
                  type="text" 
                  onClick={showDrawer}
                  icon={<MenuOutlined />}
                />
              </Space>
          )}  
        </div>
      </div>
      <div className='bg-light'>

        <div className="container pl-0 pr-0">
          {/* 菜單 */}
          {screens.md ? (
            <Menu
              mode="horizontal"
              selectedKeys={[location.pathname]}
              items={menuItems}
              className='header-menu'
              style={{
                backgroundColor: '#f8f9fc',
                borderBottom: '1px solid #f0f0f0'
              }}
            />
          ) : (
            <div className='p-10'>
              <Search
                allowClear 
                placeholder={t("searchPlaceholder")} 
                onSearch={onSearch} 
                style={{ maxWidth: 615 }} // 修复：使用对象而非字符串
                enterButton 
              />
            </div>
          )}
        </div>
      </div>
      <Drawer
        title={<img src={logo} alt="研达创新电子（深圳）有限公司-EETL" style={{ height: 30 }} />}
        placement="left"
        closable={false}
        onClose={onClose}
        open={open}
        width={"80%"}
        styles={drawerStyles}
        className='drawer-navbar'
        extra={
          <CloseOutlined style={{fontSize: 20}} onClick={onClose} />
        }
      >
        <Menu
          mode="vertical"
          selectedKeys={[location.pathname]}
          items={menuItems}
          onClick={onClose}
          className='header-menu'
          style={{
            backgroundColor: '#f8f9fc',
          }}
        />
      </Drawer>
    </header>
  );
};

export default AppHeader;
