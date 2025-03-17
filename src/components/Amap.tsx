import React, { useEffect, useRef } from 'react';

interface MapProps {
  style?: React.CSSProperties;
  className?: string;
  lng: number;
  lat: number;
  infoWindowContent: string;  // 新增信息窗口内容属性
}

// 修改全局声明
declare global {
  interface Window {
    initMap?: () => void;  // 添加 ? 使其成为可选属性
  }
}

// 添加百度地图类型声明
declare const BMap: {
  Map: new (container: HTMLElement | string, opts?: {
    minZoom?: number;
    maxZoom?: number;
    enableMapClick?: boolean;
  }) => {
    centerAndZoom: (point: { lng: number; lat: number }, zoom: number) => void;
    addOverlay: (marker: { getPosition: () => { lng: number; lat: number } }) => void;
    openInfoWindow: (infoWindow: { close: () => void }, point: { lng: number; lat: number }) => void;
  };
  Point: new (lng: number, lat: number) => { lng: number; lat: number };
  Marker: new (point: { lng: number; lat: number }, opts?: {
    offset?: { width: number; height: number };
    icon?: string;
    title?: string;
  }) => {
    addEventListener: (event: string, callback: () => void) => void;
    getPosition: () => { lng: number; lat: number };
  };
  InfoWindow: new (content: string, opts?: {
    width?: number;
    height?: number;
    offset?: { width: number; height: number };
  }) => {
    close: () => void;
  };
  Size: new (width: number, height: number) => { width: number; height: number };
};

const MyMapComponent: React.FC<MapProps> = ({ style, className, lng, lat, infoWindowContent }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://api.map.baidu.com/api?v=3.0&ak=smgrrXy3NYoM3FVHdLSz94OkOXA2jCOz&callback=initMap`;
    document.body.appendChild(script);

    window.initMap = () => {
      if (!mapRef.current) return;
      const map = new BMap.Map(mapRef.current);
      const point = new BMap.Point(lng, lat);
      map.centerAndZoom(point, 24);

      // 添加标记
      const marker = new BMap.Marker(point);
      map.addOverlay(marker);

      // 添加信息窗口
      const infoWindow = new BMap.InfoWindow(
        infoWindowContent,  // 使用传入的信息窗口内容
        { offset: new BMap.Size(0, -30) }
      );

      marker.addEventListener('click', () => {
        map.openInfoWindow(infoWindow, point);
      });
    };

    return () => {
      document.body.removeChild(script);
      if (window.initMap) {
        delete window.initMap;
      }
      if (mapRef.current) {
        mapRef.current = null;
      }
    };
  }, [lng, lat]);  // 添加 lng 和 lat 作为依赖

  return (
    <div 
      ref={mapRef} 
      style={{ width: '100%', height: '500px', ...style }}
      className={className}
    />
  );
};

export default MyMapComponent;