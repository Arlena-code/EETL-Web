import React from 'react';
import { ConfigProvider, Layout } from 'antd';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Aboutus from './pages/AboutUs';
import Products from './pages/Products';
import Cobranding from './pages/Co-branding';
import JoinUs from './pages/JoinUs';
import News from './pages/News';
import Contact from './pages/Contact';
import NewsPageDetail from './components/NewsPageDetail';
import Require from './components/Require';

import './assets/styles/index.less'

const { Content } = Layout;


const App: React.FC = () => {
  return (
    
    <ConfigProvider
      theme={{
        token: {
          // 全局主题变量
          fontFamily: 'Arial, sans-serif', // 字体
          colorPrimary: '#1d2089', // 主色
          borderRadius: 4, // 圆角
          fontSize: 14, // 字体大小
          colorBgBase: '#ffffff', // 背景色
          colorBgLayout: '#ffffff', // Layout 背景色
          colorTextBase: '#333333', // 文本颜色
          colorTextSecondary: '#666666', // 次要文本颜色
          colorBorder: '#dddddd', // 边框颜色
          colorBorderSecondary: '#eeeeee', // 次要边框颜色
          colorLink: '#609ee9', // 链接颜色
          
        },
        components: {
          // 组件级主题变量
          Button: {
            colorPrimary: '#1d2089', // 按钮主色
            colorPrimaryHover: '#0047ab', // 按钮悬停背景色
            paddingInlineLG: 20, // 按钮内边距
            primaryShadow: '0 2px 8px rgba(0, 0, 0, 0.15)', // 按钮阴影
          },
          Tabs: {
            itemColor: '#1e2084', // Tabs 文字颜色
            itemHoverColor: '#ffffff', // Tabs 悬停文字颜色
            itemSelectedColor: '#ffffff', // Tabs 选中文字颜色
            horizontalItemMargin: '0',
            cardGutter: 0,
          },
        },
      }}
    >
      <Router>
        <Layout>
          <Header />
          
          <Content className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboutus" element={<Aboutus />} />
              <Route path="/products" element={<Products />} />
              <Route path="/co-branding" element={<Cobranding />} />
              <Route path="/news" element={<News />} />
              <Route path="/joinus" element={<JoinUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/news/:id" element={<NewsPageDetail />} />
              <Route path="/require" element={<Require />} />
            </Routes>
          </Content>

          <Footer />
        </Layout>
      </Router>
    </ConfigProvider>
  );
};

export default App;
