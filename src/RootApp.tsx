import React from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import enUS from 'antd/locale/en_US';
import { useTranslation } from 'react-i18next';
import './i18n';
import './assets/styles/global.less';
import App from './App.tsx';

const RootApp: React.FC = () => {
  const { i18n } = useTranslation();
  const locale = i18n.language === 'zh' ? zhCN : enUS;

  return (
    <ConfigProvider locale={locale}>
      <App />
    </ConfigProvider>
  );
};

export default RootApp;