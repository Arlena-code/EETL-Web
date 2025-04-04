import React, { useEffect } from 'react';
import { ConfigProvider, Layout, Grid } from 'antd';
import { BrowserRouter  as Router, Routes, Route } from 'react-router-dom';
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
import ProductListMLCC from './components/ProductListMLCC';
import ProductListALUM from './components/ProductListALUM';
import ProductListFBAR from './components/ProductListFBAR';
import ProductListInductor from './components/ProductListInductor';
import ProductListCeramicRF from './components/ProductListCeramicRF';
import ProductListFerriteBead from './components/ProductListFerriteBead';
import ProductDetail from './components/ProductDetail';
import ProductDetailMLCC from './components/ProductDetailMLCC';
import ProductDetailALUM from './components/ProductDetailAluminum';
import ProductDetailFBAR from './components/ProductDetailFBARSAW';
import ProductDetailInductor from './components/ProductDetailInductor';
import ProductDetailCeramicRF from './components/ProductDetailCeramicRF';
import ProductDetailFerriteBead from './components/ProductDetailFerriteBead';
import { useTranslation } from 'react-i18next';
import SearchResultsPage from './pages/SearchResultsPage';

const { Content } = Layout;
const { useBreakpoint } = Grid;

const App: React.FC = () => {
  const { i18n } = useTranslation();
  const isChinese = i18n.language === 'zh';

  useEffect(() => {
    if (isChinese) {
      import('./assets/styles/index.less');
    } else {
      import('./assets/styles/index_en.less');
    }
  }, [isChinese]);

  const screens = useBreakpoint();
  return (

    <ConfigProvider
      theme={{
        token: {
          // 全局主题变量
          fontFamily: 'Arial, sans-serif', // 字体
          colorPrimary: '#1d2089', // 主色
          borderRadius: 4, // 圆角
          fontSize: 14, // 字体大小
          fontSizeHeading1: screens.md ? 38 : 28, // 根据屏幕尺寸设置h1大小
          fontSizeHeading2: screens.md ? 30 : 24, 
          fontSizeHeading3: screens.md ? 24 : 18, 
          fontSizeHeading4: screens.md ? 20 : 16,
          fontSizeHeading5: screens.md? 16 : 14, // 小尺寸字体
          fontSizeLG: screens.md ? 16 : 14, // 大尺寸字体
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
            onlyIconSize: 22, // 只有图标按钮尺寸
            contentFontSize: screens.md? 14 : 12, // 按钮内容字体大小
          },
          Tabs: {
            itemColor: '#1e2084', // Tabs 文字颜色
            itemHoverColor: '#ffffff', // Tabs 悬停文字颜色
            itemSelectedColor: '#ffffff', // Tabs 选中文字颜色
            horizontalItemMargin: '0',
            cardGutter: 0,
          },
          Card: {
            bodyPadding: screens.xxl ? 24 : screens.xl ? 16 : 12, // 卡片内边距 
          }
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
              <Route path="/products-mlcc" element={<ProductListMLCC />} />
              <Route path="/products-aluminum" element={<ProductListALUM />} />
              <Route path="/products-fbarsaw" element={<ProductListFBAR />} />
              <Route path="/products-inductor" element={<ProductListInductor />} />
              <Route path="/products-ceramic" element={<ProductListCeramicRF />} />
              <Route path="/products-ferrite" element={<ProductListFerriteBead />} />
              <Route path="/products/:part_number" element={<ProductDetail />} />
              <Route path="/products-mlcc/:part_number" element={<ProductDetailMLCC />} />
              <Route path="/products-aluminum/:part_number" element={<ProductDetailALUM />} />
              <Route path="/products-fbarsaw/:part_number" element={<ProductDetailFBAR />} />
              <Route path="/products-inductor/:part_number" element={<ProductDetailInductor />} />
              <Route path="/products-ceramic/:part_number" element={<ProductDetailCeramicRF />} />
              <Route path="/products-ferrite/:part_number" element={<ProductDetailFerriteBead />} />
              <Route path="/search-results" element={<SearchResultsPage />} />
            </Routes>
          </Content>

          <Footer />
        </Layout>
      </Router>
    </ConfigProvider>
  );
};

export default App;
