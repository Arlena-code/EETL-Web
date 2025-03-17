import React, { useEffect, useRef } from 'react';
import AMapLoader from '@amap/amap-jsapi-loader';

interface MapProps {
  style?: React.CSSProperties;
  className?: string;
}

const MyMapComponent: React.FC<MapProps> = ({ style, className }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    AMapLoader.load({
      key: '你的API_KEY',
      version: '2.0',
      plugins: ['AMap.Marker', 'AMap.InfoWindow'],
    }).then((AMap) => {
      const map = new AMap.Map(mapRef.current, {
        zoom: 15,
        center: [113.9978, 22.5813]
      });

      // 添加标记
      const marker = new AMap.Marker({
        position: [113.9978, 22.5813],
        title: 'EETL 深圳办公室'
      });

      // 添加信息窗口
      const infoWindow = new AMap.InfoWindow({
        content: '<div style="padding: 10px;">EETL 深圳办公室<br/>众冠时代广场A座39楼</div>',
        offset: new AMap.Pixel(0, -30)
      });

      marker.on('click', () => {
        infoWindow.open(map, marker.getPosition());
      });

      map.add(marker);
    }).catch(e => {
      console.error('地图加载失败:', e);
    });

    return () => {
      // 清理地图实例
      if (mapRef.current) {
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div 
      ref={mapRef} 
      style={{ width: '100%', height: '500px', ...style }}
      className={className}
    />
  );
};

export default MyMapComponent;