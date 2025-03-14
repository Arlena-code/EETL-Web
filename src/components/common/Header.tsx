import React from 'react';
import { Menu, type MenuProps } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { 
  HomeFilled,
  InfoCircleFilled,
  AppstoreFilled,
  ReadFilled,
  MailFilled
} from '@ant-design/icons';

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
  
  return (
    <Menu
      mode="horizontal"
      selectedKeys={[location.pathname]}
      items={menuItems}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        borderBottom: '1px solid #f0f0f0'
      }}
    />
  );
};

export default AppHeader;
