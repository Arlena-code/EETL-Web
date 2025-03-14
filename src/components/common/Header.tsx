import React from 'react';
import { Menu, type MenuProps, Input, Button, Grid } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { 
  HomeFilled,
  InfoCircleFilled,
  AppstoreFilled,
  ReadFilled,
  MailFilled,
  SearchOutlined,
  GlobalOutlined,
  MenuOutlined
} from '@ant-design/icons';

const { useBreakpoint } = Grid;

type MenuItem = Required<MenuProps>['items'][number];

const menuItems: MenuItem[] = [
  { 
    key: '/',
    label: <Link to="/">首页</Link>,
    icon: <HomeFilled />
  },
  {
    key: '/about',
    label: <Link to="/about">关于我们</Link>,
    icon: <InfoCircleFilled />
  },
  {
    key: '/products',
    label: <Link to="/products">产品中心</Link>,
    icon: <AppstoreFilled />
  },
  {
    key: '/news',
    label: <Link to="/news">新闻动态</Link>,
    icon: <ReadFilled />
  },
  {
    key: '/contact',
    label: <Link to="/contact">联系我们</Link>,
    icon: <MailFilled />
  }
];

const AppHeader: React.FC = () => {
  const location = useLocation();
  const screens = useBreakpoint();
  
  return (
    <div style={{ position: 'sticky', top: 0, zIndex: 1000, background: '#fff' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        borderBottom: '1px solid #f0f0f0'
      }}>
        {/* Logo */}
        {screens.md ? (
          <img 
            src="/logo.png" 
            alt="Logo" 
            style={{ height: 40 }} 
          />
        ) : (
          <Button 
            type="text" 
            icon={<MenuOutlined />}
          />
        )}
        
        {/* 搜索框 */}
        {screens.md && (
          <Input
            placeholder="模糊搜索..."
            prefix={<SearchOutlined />}
            style={{ width: 300 }}
            allowClear
          />
        )}
        
        {/* 語言切換 */}
        <Button 
          type="text" 
          icon={<GlobalOutlined />}
          onClick={() => console.log('切換語言')}
        >
          {screens.md ? '中/EN' : ''}
        </Button>
      </div>
      
      {/* 菜單 */}
      {screens.md && (
        <Menu
          mode="horizontal"
          selectedKeys={[location.pathname]}
          items={menuItems}
          style={{
            borderBottom: '1px solid #f0f0f0'
          }}
        />
      )}
    </div>
  );
};

export default AppHeader;
