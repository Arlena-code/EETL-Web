import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Image, Card, Typography } from 'antd';
// 引入 Swiper 样式
import 'swiper/swiper-bundle.css'; // 引入核心样式

interface ProductSwiperProps {
  products: { src: string, name: string, company: string }[]; // 支持外部传入产品图
}
const { Title } = Typography;

import { Swiper as SwiperType } from 'swiper'; // 引入 Swiper 类型

const ProductSwiper: React.FC<ProductSwiperProps> = ({ products }) => {
  const swiperRef = useRef<SwiperType | null>(null); // 使用 SwiperType 类型

  return (
    <Swiper
      modules={[Autoplay, Navigation]}
      spaceBetween={15}
      slidesPerView={'auto'}
      loop={true}
      speed={5000}
      centeredSlides={true}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      navigation={true}
      className='product-swiper'
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      onMouseEnter={() => swiperRef.current?.autoplay.stop()}
      onMouseLeave={() => swiperRef.current?.autoplay.start()}
    >
      {products.map((product, index) => (
        <SwiperSlide key={index} className='p-5' style={{ width: 'auto' }}>
          <Card hoverable>
            <Image
              preview={false}
              src={product.src}
              placeholder={<Image preview={false} src={product.src} />}
            />
            <div className="product-info text-center">
              <Title level={5} className='text-secondary' style={{ fontWeight: 'normal' }}>{product.name}</Title>
              <div className='text-info'>{product.company}</div>
            </div>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductSwiper;