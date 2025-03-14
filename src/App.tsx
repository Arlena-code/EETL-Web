import React from 'react';
import { ConfigProvider, Layout } from 'antd';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import About from './pages/AboutUs';
import Products from './pages/Products';
import News from './pages/News';
import Contact from './pages/Contact';
import './App.less';

const { Content } = Layout;

const App: React.FC = () => {
  return (
    
    <ConfigProvider
      theme={{
        token: {
          // 全局主题变量
          colorPrimary: '#1d2089', // 主色
          borderRadius: 4, // 圆角
          fontSize: 14, // 字体大小
        },
        components: {
          // 组件级主题变量
          Button: {
            colorPrimary: '#ff4d4f', // 按钮主色
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
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/news" element={<News />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Content>

          <Footer />
        </Layout>
      </Router>
    </ConfigProvider>
  );
};

export default App;
