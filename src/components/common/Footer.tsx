import React from 'react';
import { Flex, Divider, Typography, Grid, theme } from 'antd';
import {
  FacebookFilled,
  XOutlined,
  LinkedinFilled,
  YoutubeFilled
} from '@ant-design/icons';

const { useToken } = theme;
const { Text, Link } = Typography;
const { useBreakpoint } = Grid;

interface FooterSection {
  title: string;
  items: { label: string; href: string; external?: boolean }[];
}

const Footer: React.FC = () => {
  const { token } = useToken();
  const screens = useBreakpoint();
  
  const sections: FooterSection[] = [
    {
      title: '解决方案',
      items: [
        { label: '企业数字化', href: '/solutions/enterprise' },
        { label: '云服务平台', href: '/solutions/cloud' },
        { label: 'AI 智能系统', href: '/solutions/ai' }
      ]
    },
    {
      title: '开发者',
      items: [
        { label: '文档中心', href: '/docs', external: true },
        { label: 'API 参考', href: '/api', external: true },
        { label: 'GitHub', href: 'https://github.com', external: true }
      ]
    },
    {
      title: '支持',
      items: [
        { label: '联系我们', href: '/contact' },
        { label: '服务状态', href: '/status' },
        { label: '帮助中心', href: '/support' }
      ]
    }
  ];

  return (
    <footer style={{
      background: token.colorBgContainer,
      borderTop: `1px solid ${token.colorBorderSecondary}`,
      padding: screens.md ? token.paddingXL : token.paddingLG
    }}>
      <Flex vertical gap={token.sizeXXL} style={{ maxWidth: 1280, margin: '0 auto' }}>
        <Flex justify="space-between" wrap="wrap" gap={token.sizeXL}>
          {/* 品牌信息 */}
          <Flex vertical gap={token.sizeMD} style={{ minWidth: 240 }}>
            <Text strong style={{ fontSize: token.fontSizeXL }}>TechInnovation</Text>
            <Text type="secondary" style={{ maxWidth: 280 }}>
              引领下一代企业数字化解决方案
            </Text>
            <Flex gap={token.sizeSM}>
              <Link href="https://facebook.com" target="_blank">
                <FacebookFilled style={{ fontSize: token.fontSizeLG }} />
              </Link>
              <Link href="https://x.com" target="_blank">
                <XOutlined style={{ fontSize: token.fontSizeLG }} />
              </Link>
              <Link href="https://linkedin.com" target="_blank">
                <LinkedinFilled style={{ fontSize: token.fontSizeLG }} />
              </Link>
              <Link href="https://youtube.com" target="_blank">
                <YoutubeFilled style={{ fontSize: token.fontSizeLG }} />
              </Link>
            </Flex>
          </Flex>

          {/* 导航区块 */}
          <Flex gap={token.sizeXXL} wrap="wrap">
            {sections.map((section) => (
              <Flex key={section.title} vertical gap={token.sizeXS}>
                <Text strong>{section.title}</Text>
                <Flex vertical gap={token.sizeXXS}>
                  {section.items.map((item) => (
                    <Link 
                      key={item.href}
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      type="secondary"
                    >
                      {item.label}
                    </Link>
                  ))}
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Flex>

        <Divider style={{ margin: 0 }} />

        {/* 底部信息 */}
        <Flex justify="space-between" wrap="wrap" gap={token.sizeSM}>
          <Text type="secondary">
            © {new Date().getFullYear()} TechInnovation. All rights reserved.
          </Text>
          <Flex gap={token.sizeLG}>
            <Link href="/terms" type="secondary">服务条款</Link>
            <Link href="/privacy" type="secondary">隐私政策</Link>
            <Link href="/cookies" type="secondary">Cookie 设置</Link>
          </Flex>
        </Flex>
      </Flex>
    </footer>
  );
};

export default Footer;
