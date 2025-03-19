import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';

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
  getItem('产品分类', 'sub1', <MailOutlined />, [
    getItem('分类1', '1'),
    getItem('分类2', '2'),
    getItem('分类3', '3'),
  ]),
  getItem('其他分类', 'sub2', <AppstoreOutlined />, [
    getItem('分类4', '4'),
    getItem('分类5', '5'),
  ]),
];

export default function LeftBar() {
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      style={{ height: '100%', borderRight: 0 }}
      items={items}
    />
  );
}
