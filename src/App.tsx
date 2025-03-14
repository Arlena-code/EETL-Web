import React from 'react';
import { Layout } from 'antd';
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
  );
};

export default App;
