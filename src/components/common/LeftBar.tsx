import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('产品分类', 'sub1', <AppstoreOutlined />, [
    getItem(<Link to="/products-mlcc">片状多层陶瓷电容器</Link>, '1'),
    getItem('铝电解电容器', '2'),
    getItem('铁氧体磁珠电感器', '3'),
    getItem('陶瓷RF器件', '4'),
    getItem('电感器', '5'),
    getItem('FBAR&SAW器件', '6'),
  ]),
  // getItem('', 'sub2', <MailOutlined />, [
  // ])
];

export default function LeftBar() {
  return (
    <Menu
      mode="inline"
      defaultOpenKeys={['sub1']}
      style={{ height: '100%', borderRight: 0 }}
      items={items}
    />
  );
}
