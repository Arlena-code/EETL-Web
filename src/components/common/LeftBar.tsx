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
    getItem(<Link to="/products-aluminum">{t("page.product.categories.aluminum.title")}</Link>, '2'),
    getItem(<Link to="/products-ferrite">{t("page.product.categories.ferrite.title")}</Link>, '3'),
    getItem(<Link to="/products-ceramic">{t("page.product.categories.ceramic.title")}</Link>, '4'),
    getItem(<Link to="/products-inductor">{t("page.product.categories.inductor.title")}</Link>, '5'),
    getItem(<Link to="/products-fbarsaw">{t("page.product.categories.fbar.title")}</Link>, '6'),
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
