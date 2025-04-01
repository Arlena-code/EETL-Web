import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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

const LeftBarItems = (t: (key: string) => string): MenuItem[] => [
  getItem(t("productCenter.productlist.title"), 'sub1', <AppstoreOutlined />, [
    getItem(<Link to="/products-mlcc">{t("page.product.categories.mlcc.title")}</Link>, '1'),
    getItem(<Link to="/products-alum">{t("page.product.categories.aluminum.title")}</Link>, '2'),
    getItem(t("page.product.categories.ferrite.title"), '3'),
    getItem(t("page.product.categories.ceramic.title"), '4'),
    getItem(t("page.product.categories.inductor.title"), '5'),
    getItem(t("page.product.categories.fbar.title"), '6'),
  ]),
  // getItem('', 'sub2', <MailOutlined />, [
  // ])
];

export default function LeftBar() {
  const { t } = useTranslation(); 
  const items = LeftBarItems(t); 

  return (
    <Menu
      mode="inline"
      defaultOpenKeys={['sub1']}
      style={{ height: '100%', borderRight: 0 }}
      items={items}
    />
  );
}
