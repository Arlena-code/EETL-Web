import React from 'react';
import { Menu, type MenuProps, Input, Button, Grid } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { 
  HomeFilled,
  GlobalOutlined,
  MenuOutlined
} from '@ant-design/icons';
import type { GetProps } from 'antd';

const { useBreakpoint } = Grid;
import logo from '@/assets/images/EETL_logo.png'

type SearchProps = GetProps<typeof Input.Search>
const { Search } = Input
const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value)

type MenuItem = Required<MenuProps>['items'][number];
const menuItems: MenuItem[] = [
  { 
    key: '/',
    label: (
      <Link to="/" 
        onMouseEnter={(e) => e.currentTarget.textContent = 'Home'}
        onMouseLeave={(e) => e.currentTarget.textContent = '首页'}
      >
        首页
      </Link>
    ),
    icon: <HomeFilled />
  },
  {
    key: '/aboutus',
    label: (
      <Link to="/aboutus"
        onMouseEnter={(e) => e.currentTarget.textContent = 'About Us'}
        onMouseLeave={(e) => e.currentTarget.textContent = '公司介绍'}
      >
        公司介绍
      </Link>
    ),
  },
  {
    key: '/products',
    label: (
      <Link to="/products"
        onMouseEnter={(e) => e.currentTarget.textContent = 'Products'}
        onMouseLeave={(e) => e.currentTarget.textContent = '产品中心'}
      >
        产品中心
      </Link>
    ),
  },
  {
    key: '/co-branding',
    label: (
      <Link to="/co-branding"
        onMouseEnter={(e) => e.currentTarget.textContent = 'Co-branding'}
        onMouseLeave={(e) => e.currentTarget.textContent = '合作品牌'}
      >
        合作品牌
      </Link>
    ),
  },
  {
    key: '/news',
    label: (
      <Link to="/news"
        onMouseEnter={(e) => e.currentTarget.textContent = 'News'}
        onMouseLeave={(e) => e.currentTarget.textContent = '新闻动态'}
      >
        新闻动态
      </Link>
    ),
  },
  {
    key: '/joinus',
    label: (
      <Link to="/joinus"
        onMouseEnter={(e) => e.currentTarget.textContent = 'Join Us'}
        onMouseLeave={(e) => e.currentTarget.textContent = '加入我们'}
      >
        加入我们
      </Link>
    ),
  },
  {
    key: '/contact',
    label: (
      <Link to="/contact"
        onMouseEnter={(e) => e.currentTarget.textContent = 'Contact Us'}
        onMouseLeave={(e) => e.currentTarget.textContent = '联系我们'}
      >
        联系我们
      </Link>
    ),
  }
];

const AppHeader: React.FC = () => {
  const location = useLocation();
  const screens = useBreakpoint();
  
  return (
    <header>
      <div className="header-container">
        <div className='container header-top'>
          {/* Logo */}
          {screens.md ? (
            <img 
              src={logo}
              alt="Logo" 
              style={{ height: 40 }} 
            />
          ) : (
            <img 
              src={logo}
              alt="Logo" 
              style={{ height: 30 }} 
            />
          )}
          
          
          {/* 搜索框 */}
          <Search 
            size="large" 
            allowClear 
            placeholder="请输入产品型号..." 
            onSearch={onSearch} 
            style={{ maxWidth: 615 }} // 修复：使用对象而非字符串
            enterButton 
          />

          {/* 語言切換 */}
          {screens.md ? (
          <div className='languageBtn'>
            <GlobalOutlined style={{ fontSize: '18px' }} />
            {/* 简体中文 */}
            <Button
              type="text"
              onClick={() => console.log('切换到简体中文')}
            >
              {screens.md ? '简体中文' : ''}
            </Button>

            {/* 英文 */}
            <Button
              type="text"
              onClick={() => console.log('切换到英文')}
            >
              {screens.md ? 'EN' : ''}
            </Button>
          </div>
          ) : (
            <Button 
              type="text" 
              icon={<MenuOutlined />}
            />
          )}  
        </div>
      </div>
      <div className='bg-light'>

        <div className="container pl-0 pr-0">
          {/* 菜單 */}
          {screens.md && (
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
          )}
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
