import { FC, useEffect, useState, useRef, useCallback } from 'react';
import '@ant-design/v5-patch-for-react-19';
import { Link } from 'react-router-dom';
import { Table, Spin, Breadcrumb, Typography, Divider, Input, Select, Flex } from 'antd';
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import { fetchFBARProducts } from '../api/products';
import { FBARProduct, FBARProductFetchParams, Pagination } from '../types/product';
import { HomeOutlined } from '@ant-design/icons';
import { isFBARProduct } from '../types/product'; // 导入类型守卫

const { Title, Paragraph } = Typography;
const { Search } = Input;
const { Option } = Select;

const ProductListFBAR: FC = () => {
  // 修改为 FBARProduct 类型
  const [allData, setAllData] = useState<FBARProduct[]>([]); 
  const [filteredData, setFilteredData] = useState<FBARProduct[]>([]); 
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState<Pagination>({
    current: 1,
    pageSize: 25, 
    total: 0
  });

  // 搜索状态
  const [searchValue, setSearchValue] = useState('');
  const [frequencyBandFilter, setFrequencyBandFilter] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); 

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // 修改为 FBARProduct 类型
  const columns: ColumnsType<FBARProduct> = [
    {
      title: '商品型号',
      dataIndex: 'part_number',
      key: 'part_number',
      render: (text: string, record: FBARProduct) => (
        <Link to={`/products-fbarsaw/${record.part_number}`}>{text}</Link>
      ),
      fixed: isMobile ? undefined : 'left'
    },
    {
      title: '物料编码',
      dataIndex: 'product_code',
      key: 'product_code',
      fixed: isMobile ? undefined : 'left'
    },
    {
      title: '频段',
      dataIndex: ['specs', 'frequency_band'],
      key: 'specs.frequency_band',
      render: (_, record) => {
        if (isFBARProduct(record)) {
          return record.specs.frequency_band;
        }
        return null;
      }
    },
    {
      title: '工艺',
      dataIndex: ['specs', 'process'],
      key: 'specs.process',
      render: (_, record) => {
        if (isFBARProduct(record)) {
          return record.specs.process;
        }
        return null;
      }
    },
    {
      title: '功能',
      dataIndex: ['specs', 'function'],
      key: 'specs.function',
      render: (_, record) => {
        if (isFBARProduct(record)) {
          return record.specs.function;
        }
        return null;
      }
    },
    {
      title: '插入损耗(typ)',
      dataIndex: ['specs', 'insertion_loss'],
      key: 'specs.insertion_loss',
      render: (_, record) => {
        if (isFBARProduct(record)) {
          return record.specs.insertion_loss;
        }
        return null;
      }
    },
    {
      title: '衰减量(typ)',
      dataIndex: ['specs', 'attenuation'],
      key: 'specs.attenuation',
      render: (_, record) => {
        if (isFBARProduct(record)) {
          return record.specs.attenuation;
        }
        return null;
      }
    },
    {
      title: '绝缘(typ)',
      dataIndex: ['specs', 'isolation'],
      key: 'specs.isolation',
      render: (_, record) => {
        if (isFBARProduct(record)) {
          return record.specs.isolation;
        }
        return null;
      }
    },
    {
      title: 'Input Power(max)',
      dataIndex: ['specs', 'input_power'],
      key: 'specs.input_power',
      render: (_, record) => {
        if (isFBARProduct(record)) {
          return record.specs.input_power;
        }
        return null;
      }
    },
    {
      title: '终端阻抗',
      dataIndex: ['specs', 'impedance'],
      key: 'specs.impedance',
      render: (_, record) => {
        if (isFBARProduct(record)) {
          return record.specs.impedance;
        }
        return null;
      }
    },
    {
      title: '尺寸(LxWxT)',
      dataIndex: ['specs', 'dimensions'],
      key: 'specs.dimensions',
      render: (_, record) => {
        if (isFBARProduct(record)) {
          return record.specs.dimensions;
        }
        return null;
      }
    },
    {
      title: '温度范围',
      dataIndex: ['specs', 'temperature_range'],
      key: 'specs.temperature_range',
      render: (_, record) => {
        if (isFBARProduct(record)) {
          return record.specs.temperature_range;
        }
        return null;
      }
    }
  ];

  const [fixedHeaderVisible, setFixedHeaderVisible] = useState(false);
    const [columnWidths, setColumnWidths] = useState<number[]>([]);
    const [tableWidth, setTableWidth] = useState('100%');
    const tableRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    // 声明 scrollLeft 状态
    const [scrollLeft, setScrollLeft] = useState(0);
  
    const tableContainerRef = useRef<HTMLDivElement>(null);
  
    // 处理表格内容滚动事件
    const handleTableContentScroll = useCallback((e: Event) => {
      const newScrollLeft = (e.target as HTMLElement).scrollLeft;
      setScrollLeft(newScrollLeft);
      const fixedHeader = document.querySelector('.fixed-header') as HTMLElement;
      if (fixedHeader) {
        fixedHeader.scrollLeft = newScrollLeft;
      }
    }, []);
  
    useEffect(() => {
      const tableElement = tableRef.current;
      if (tableElement) {
        const tableContent = tableElement.querySelector('.ant-table-content') as HTMLElement;
        if (tableContent) {
          tableContent.addEventListener('scroll', handleTableContentScroll);
        }
      }
  
      return () => {
        if (tableRef.current) {
          const tableContent = tableRef.current.querySelector('.ant-table-content') as HTMLElement;
          if (tableContent) {
            tableContent.removeEventListener('scroll', handleTableContentScroll);
          }
        }
      };
    }, [handleTableContentScroll]);
  
    useEffect(() => {
      const handleScroll = () => {
        if (!headerRef.current) return;
        const headerRect = headerRef.current.getBoundingClientRect();
        setFixedHeaderVisible(headerRect.top < 0);
      };
  
      const handleResize = () => {
        if (tableRef.current) {
          setTableWidth(`${tableRef.current.offsetWidth}px`);
        }
      };
  
      const throttledScroll = throttle(handleScroll, 50);
      window.addEventListener('scroll', throttledScroll);
      window.addEventListener('resize', handleResize);
  
      // 初始化宽度
      handleResize();
  
      return () => {
        window.removeEventListener('scroll', throttledScroll);
        window.removeEventListener('resize', handleResize);
      };
    }, []);

  // 获取列宽
  useEffect(() => {
    if (fixedHeaderVisible && headerRef.current) {
      const ths = headerRef.current.querySelectorAll('th');
      const widths = Array.from(ths).map(th => th.offsetWidth);
      setColumnWidths(widths);
    }
  }, [fixedHeaderVisible]);

  // 生成带宽度的列配置
  const fixedColumns = columns.map((col, index) => ({
    ...col,
    width: columnWidths[index] || 0,
    onHeaderCell: () => ({ 
      style: { 
        width: columnWidths[index] ? `${columnWidths[index]}px` : 'auto',
        whiteSpace: 'nowrap'
      }
    })
  }));

  const loadData = async () => {
    setLoading(true);
    try {
      const fetchParams: FBARProductFetchParams = {
        ...pagination,
        search: '',
        frequency_band: null,
        process: null,
        function: null,
      };
      const response = await fetchFBARProducts(fetchParams);
      if (Array.isArray(response)) {
        const fbarProducts = response.filter(isFBARProduct);
        setAllData(fbarProducts);
        setFilteredData(fbarProducts); 
        setPagination({
          ...pagination,
          total: fbarProducts.length
        });
      } else {
        console.error('返回的数据不是数组:', response);
      }
    } catch (error) {
      console.error('加载数据失败:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterData = () => {
    const result = allData.filter(product => {
      // 搜索商品型号和物料编码
      const searchMatch = searchValue === '' || 
        product.part_number.toLowerCase().includes(searchValue.toLowerCase()) ||
        product.product_code.toLowerCase().includes(searchValue.toLowerCase());

      // 频段筛选
      const frequencyBandMatch = frequencyBandFilter === null || 
        product.specs.frequency_band === frequencyBandFilter;

      return searchMatch && frequencyBandMatch;
    });

    setFilteredData(result);
    setPagination({
      ...pagination,
      total: result.length
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    filterData();
  }, [searchValue, frequencyBandFilter]);

  const handleTableChange = (
    newPagination: TablePaginationConfig
  ) => {
    setPagination({
      current: newPagination.current || 1,
      pageSize: newPagination.pageSize || 25,
      total: pagination.total
    });
  };

  const getAllValues = (key: keyof FBARProduct['specs']) => {
    let values = allData.map(item => item.specs[key]);
  
    if (key === 'frequency_band' || key === 'process' || key === 'function') {
      values = values.sort((a, b) => {
        const aValue = a !== null && a !== undefined ? a.toString() : '';
        const bValue = b !== null && b !== undefined ? b.toString() : '';
  
        return aValue.localeCompare(bValue);
      });
      return Array.from(new Set(values));
    } else {
      values = values.filter(value => value !== null && value !== undefined && value !== 'nan');
    }
    return Array.from(new Set(values));
  };

  return (
    <div style={{paddingBottom: '80px'}}>
      <div className='' style={{background: '#f5f5f5'}}>
        <div className='container'>
          <Breadcrumb
            className="breadcrumbs"
            separator=">"
            items={[
              {
                title: (
                  <>
                    <HomeOutlined />
                    <span>首页</span>
                  </>
                ),
                href: '/',
              },
              {
                title: '产品中心',
                href: '/products',
              },
              {
                title: 'FBAR&SAW器件',
              },
            ]}
          />
        </div>
      </div>
      <div className='container'>
        <div className='mt-30 mb-30'>
          <Title className='text-center text-primary' level={1}>FBAR&SAW器件</Title>
          <Divider />
          <Paragraph className='text-indent text-info font-size1'>
            研达创新电子代理的FBAR&SAW器件，具有高性能、高可靠性等特点。广泛应用于通信、雷达、传感器等场景，能满足不同客户在工业、消费电子等领域的需求。选择研达创新电子的FBAR&SAW器件，就是选择可靠的性能和优质的服务。
          </Paragraph>
        </div>

        {/* 搜索条件 */}
        <Flex style={{ marginBottom: 16 }}>
          <Search
            placeholder="搜索商品型号和物料编码"
            onSearch={value => setSearchValue(value)}
            style={{ width: 400,marginRight: 16 }}
          />
          <Select
            placeholder="选择频段"
            onChange={value => setFrequencyBandFilter(value)}
            style={{ width: 200, marginRight: 16 }}
          >
            {getAllValues('frequency_band').map((value, index) => (
              <Option key={`frequency_band_${index}`} value={value}>{value}</Option>
            ))}
          </Select>
          
        </Flex>

        <div 
          ref={tableContainerRef}
          style={{ 
            position: 'relative',
            overflowX: 'auto',
            paddingTop: fixedHeaderVisible ? '55px' : '0' 
          }}
        >
          {/* 固定表头 */}
          {fixedHeaderVisible && (
            <div
              style={{
                width: tableWidth,
                overflowX: 'hidden',
                position: 'fixed',
                height: '55px',
                top: 0,
                zIndex: 1000,
              }}
            >
                <div
                className="fixed-header"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: -scrollLeft,
                    zIndex: 1000,
                    background: '#fff',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                    overflow: 'hidden',
                    pointerEvents: 'none'
                }}
                >
                <Table
                    columns={fixedColumns}
                    dataSource={[]}
                    showHeader={true}
                    pagination={false}
                    components={{
                    header: {
                        wrapper: props => <thead {...props} style={{ margin: 0 }}/>
                    },
                    body: {
                        wrapper: () => <tbody style={{ display: 'none' }}/>
                    }
                    }}
                    scroll={{ x: 'max-content' }}
                />
                </div>
            </div>
          )}

          <div  ref={tableRef}>
            
          <Table<FBARProduct>
            columns={columns}
            dataSource={filteredData}
            rowKey="part_number"
            components={{
              header: {
                wrapper: props => (
                  <thead 
                    {...props} 
                    ref={headerRef}
                    style={{ visibility: fixedHeaderVisible ? 'hidden' : 'visible' }}
                  />
                )
              }
            }}
            pagination={{
              total: pagination.total,
              showTotal: (total, range) => `显示第 ${range[0]} 到 ${range[1]} 项，共 ${total} 项`,
              current: pagination.current,
              pageSize: pagination.pageSize,
              showSizeChanger: true,
              position: ['bottomCenter'],
              pageSizeOptions: ['25', '50', '100'], 
              className: 'mt-30'
            }}
            loading={{
              spinning: loading,
              indicator: <Spin size="large" />
            }}
            onChange={handleTableChange}
            bordered
            scroll={{ x: 'max-content' }}
            style={{ marginTop: fixedHeaderVisible ? -40 : 0 }} 
          />
          </div>
        </div>
      </div>
    </div>
  );
};

// 节流函数
function throttle<T extends (...args: any[]) => void>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timer: NodeJS.Timeout | null = null;
  return function (this: any, ...args: Parameters<T>) {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, args);
        timer = null;
      }, delay);
    }
  };
}

export default ProductListFBAR;