// src/pages/SearchResultsPage.tsx

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Divider, Typography, Table, Spin } from 'antd';
import axios from 'axios';
import { Link } from 'react-router-dom';
// 导入所有产品类型和类型判断函数
import { 
  MLCCProduct, 
  AluminumProduct, 
  FBARProduct,
  InductorProduct,
  CeramicRFProduct,
  FerriteBeadProduct,
  isMLCCProduct, 
  isAluminumProduct,
  isFBARProduct,
  isInductorProduct,
  isCeramicRFProduct,
  isFerriteBeadProduct
} from '../types/product';

const { Title, Paragraph } = Typography;

const SearchResultsPage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('query') || '';
  const [results, setResults] = useState<(MLCCProduct | AluminumProduct | FBARProduct | InductorProduct | CeramicRFProduct | FerriteBeadProduct)[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSearchResults = async () => {
      setLoading(true);
      try {
        const response = await axios.get<
          (MLCCProduct | AluminumProduct | FBARProduct | InductorProduct | CeramicRFProduct | FerriteBeadProduct)[]
        >(
          `${process.env.NODE_ENV === 'development' ? 'http://localhost:8000/api/' : '/api/'}products/`,
          {
            params: {
              search: query,
            },
          }
        );

        if (query && response.data.length > 0) {
          const filteredResults = response.data.filter((item) =>
            item.part_number?.toLowerCase().includes(query.toLowerCase()) ||
            item.product_code?.toLowerCase().includes(query.toLowerCase())
          );
          setResults(filteredResults);
        } else {
          setResults(response.data);
        }
      } catch (error) {
        console.error('Error fetching search results:', error);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchSearchResults();
    }
  }, [query]);

  const columns: {
    title: string;
    dataIndex: string | string[];
    key: string;
    render?: (text: string, record: MLCCProduct | AluminumProduct | FBARProduct | InductorProduct | CeramicRFProduct | FerriteBeadProduct) => React.ReactNode;
    fixed?: 'left' | 'right';
  }[] = [
    {
      title: '商品型号',
      dataIndex: 'part_number',
      key: 'part_number',
      render: (text: string, record: MLCCProduct | AluminumProduct | FBARProduct | InductorProduct | CeramicRFProduct | FerriteBeadProduct) => {
        let linkPath = '';
        if (isMLCCProduct(record)) {
          linkPath = `/products-mlcc/${record.part_number}`;
        } else if (isAluminumProduct(record)) {
          linkPath = `/products-aluminum/${record.part_number}`;
        } else if (isFBARProduct(record)) {
          linkPath = `/products-fbarsaw/${record.part_number}`;
        } else if (isInductorProduct(record)) {
          linkPath = `/products-inductor/${record.part_number}`;
        } else if (isCeramicRFProduct(record)) {
          linkPath = `/products-ceramic/${record.part_number}`;
        } else if (isFerriteBeadProduct(record)) {
          linkPath = `/products-ferrite/${record.part_number}`;
        }
        return <Link to={linkPath}>{text}</Link>;
      },
      fixed: 'left' as const,
    },
    {
      title: '物料编码',
      dataIndex: 'product_code',
      key: 'product_code',
      fixed: 'left' as const,
    },
    {
      title: '规格型号',
      dataIndex: 'specification',
      key: 'specification',
      render: (_, record: MLCCProduct | AluminumProduct | FBARProduct | InductorProduct | CeramicRFProduct | FerriteBeadProduct) => {
        return record.specification || null;
      },
    }
  ];

  // 动态添加列
  // if (results.some(isMLCCProduct)) {
  //   columns.push({
  //     title: '额定电压',
  //     dataIndex: ['specs', 'rated_voltage'],
  //     key: 'specs.rated_voltage',
  //     render: (_, record: MLCCProduct | AluminumProduct) => {
  //       if ('specs' in record && record.specs) {
  //         return record.specs.rated_voltage;
  //       }
  //       return null;
  //     },
  //   });
  //   columns.push({
  //     title: '封装',
  //     dataIndex: ['specs', 'package'],
  //     key: 'specs.package',
  //     render: (_, record: MLCCProduct | AluminumProduct) => {
  //       if (isMLCCProduct(record) && record.specs) {
  //         return record.specs.package;
  //       }
  //       return null;
  //     },
  //   });
  //   columns.push({
  //     title: '材料',
  //     dataIndex: ['specs', 'material'],
  //     key: 'specs.material',
  //     render: (_, record: MLCCProduct | AluminumProduct) => {
  //       if (isMLCCProduct(record) && record.specs) {
  //         return record.specs.material;
  //       }
  //       return null;
  //     },
  //   });
  //   columns.push({
  //     title: '包装',
  //     dataIndex: ['specs', 'packaging'],
  //     key: 'specs.packaging',
  //     render: (_, record: MLCCProduct | AluminumProduct) => {
  //       if (isMLCCProduct(record) && record.specs) {
  //         return record.specs.packaging;
  //       }
  //       return null;
  //     },
  //   });
  //   columns.push({
  //     title: 'SPQ',
  //     dataIndex: ['specs', 'spq'],
  //     key: 'specs.spq',
  //     render: (_, record: MLCCProduct | AluminumProduct) => {
  //       if (isMLCCProduct(record) && record.specs) {
  //         return record.specs.spq;
  //       }
  //       return null;
  //     },
  //   });
  // }

  // if (results.some(isAluminumProduct)) {
  //   columns.push({
  //     title: '尺寸',
  //     dataIndex: ['specs', 'size'],
  //     key: 'specs.size',
  //     render: (_, record: MLCCProduct | AluminumProduct) => {
  //       if (isAluminumProduct(record) && record.specs) {
  //         return record.specs.size;
  //       }
  //       return null;
  //     },
  //   });
  //   columns.push({
  //     title: '静电容量',
  //     dataIndex: ['specs', 'capacitance'],
  //     key: 'specs.capacitance',
  //     render: (_, record: MLCCProduct | AluminumProduct) => {
  //       if (isAluminumProduct(record) && record.specs) {
  //         return record.specs.capacitance;
  //       }
  //       return null;
  //     },
  //   });
  //   columns.push({
  //     title: 'ESR(max)',
  //     dataIndex: ['specs', 'esr'],
  //     key: 'specs.esr',
  //     render: (_, record: MLCCProduct | AluminumProduct) => {
  //       if (isAluminumProduct(record) && record.specs) {
  //         return record.specs.esr;
  //       }
  //       return null;
  //     },
  //   });
  //   columns.push({
  //     title: 'Rated Ripple(max)',
  //     dataIndex: ['specs', 'ripple_current'],
  //     key: 'specs.ripple_current',
  //     render: (_, record: MLCCProduct | AluminumProduct) => {
  //       if (isAluminumProduct(record) && record.specs) {
  //         return record.specs.ripple_current;
  //       }
  //       return null;
  //     },
  //   });
  //   columns.push({
  //     title: 'Rated Ripple(Freq.)',
  //     dataIndex: ['specs', 'ripple_freq'],
  //     key: 'specs.ripple_freq',
  //     render: (_, record: MLCCProduct | AluminumProduct) => {
  //       if (isAluminumProduct(record) && record.specs) {
  //         return record.specs.ripple_freq;
  //       }
  //       return null;
  //     },
  //   });
  //   columns.push({
  //     title: 'Endurance',
  //     dataIndex: ['specs', 'endurance'],
  //     key: 'specs.endurance',
  //     render: (_, record: MLCCProduct | AluminumProduct) => {
  //       if (isAluminumProduct(record) && record.specs) {
  //         return record.specs.endurance;
  //       }
  //       return null;
  //     },
  //   });
  //   columns.push({
  //     title: '形状',
  //     dataIndex: ['specs', 'shape'],
  //     key: 'specs.shape',
  //     render: (_, record: MLCCProduct | AluminumProduct) => {
  //       if (isAluminumProduct(record) && record.specs) {
  //         return record.specs.shape;
  //       }
  //       return null;
  //     },
  //   });
  //   columns.push({
  //     title: '温度范围',
  //     dataIndex: ['specs', 'temperature_range'],
  //     key: 'specs.temperature_range',
  //     render: (_, record: MLCCProduct | AluminumProduct) => {
  //       if ('specs' in record && record.specs) {
  //         return record.specs.temperature_range;
  //       }
  //       return null;
  //     },
  //   });
  //   columns.push({
  //     title: '精度',
  //     dataIndex: ['specs', 'tolerance'],
  //     key: 'specs.tolerance',
  //     render: (_, record: MLCCProduct | AluminumProduct) => {
  //       if ('specs' in record && record.specs) {
  //         return record.specs.tolerance;
  //       }
  //       return null;
  //     },
  //   });
  //   columns.push({
  //     title: '产品资格',
  //     dataIndex: ['specs', 'qualification'],
  //     key: 'specs.qualification',
  //     render: (_, record: MLCCProduct | AluminumProduct) => {
  //       if ('specs' in record && record.specs) {
  //         return record.specs.qualification;
  //       }
  //       return null;
  //     },
  //   });
  // }

  return (
    <div style={{ paddingBottom: '80px' }}>
      <div className='pt-50'>
        <div className='container'>
          <Title className='text-center text-primary' level={1}>
            搜索结果: {query}
          </Title>
          <Divider />
          <Paragraph className='text-indent text-info font-size1'>
            以下是根据您的搜索条件找到的产品。
          </Paragraph>
        </div>
      </div>
      <div className='container'>
        <div className='mt-30 mb-30'>
          <Table<MLCCProduct | AluminumProduct | FBARProduct | InductorProduct | CeramicRFProduct | FerriteBeadProduct>
            columns={columns}
            dataSource={results}
            rowKey="part_number"
            loading={{
              spinning: loading,
              indicator: <Spin size="large" />,
            }}
            bordered
            scroll={{ x: 'max-content' }}
            pagination={{
                pageSize: 25,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchResultsPage;