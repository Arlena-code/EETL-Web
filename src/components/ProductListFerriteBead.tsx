import { FC, useEffect, useState, useRef, useCallback } from 'react';
import '@ant-design/v5-patch-for-react-19';
import { Link } from 'react-router-dom';
import { Table, Spin, Breadcrumb, Typography, Divider, Input, Select, Flex } from 'antd';
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import { fetchFerriteBeadProducts } from '../api/products';
import { FerriteBeadProduct, FerriteBeadProductFetchParams, Pagination } from '../types/product';
import { HomeOutlined } from '@ant-design/icons';
import { isFerriteBeadProduct } from '../types/product'; // 导入类型守卫

const { Title, Paragraph } = Typography;
const { Search } = Input;
const { Option } = Select;

const ProductListFerriteBead: FC = () => {
  // 修改为 FerriteBeadProduct 类型
  const [allData, setAllData] = useState<FerriteBeadProduct[]>([]); 
  const [filteredData, setFilteredData] = useState<FerriteBeadProduct[]>([]); 
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState<Pagination>({
    current: 1,
    pageSize: 25, 
    total: 0
  });

  // 搜索状态
  const [searchValue, setSearchValue] = useState('');
  const [impedance100MHzFilter, setImpedance100MHzFilter] = useState<string | null>(null);
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

  // 修改为 FerriteBeadProduct 类型
  const columns: ColumnsType<FerriteBeadProduct> = [
    {
      title: '商品型号',
      dataIndex: 'part_number',
      key: 'part_number',
      render: (text: string, record: FerriteBeadProduct) => (
        <Link to={`/products-ferrite/${record.part_number}`}>{text}</Link>
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
      title: '阻抗值(100MHz)',
      dataIndex: ['specs', 'impedance_100mhz'],
      key: 'specs.impedance_100mhz',
      render: (_, record) => {
        if (isFerriteBeadProduct(record)) {
          return record.specs.impedance_100mhz;
        }
        return null;
      }
    },
    {
      title: '阻抗值(1GHz)',
      dataIndex: ['specs', 'impedance_1ghz'],
      key: 'specs.impedance_1ghz',
      render: (_, record) => {
        if (isFerriteBeadProduct(record)) {
          return record.specs.impedance_1ghz;
        }
        return null;
      }
    },
    {
      title: '尺寸(LxW)',
      dataIndex: ['specs', 'size'],
      key: 'specs.size',
      render: (_, record) => {
        if (isFerriteBeadProduct(record)) {
          return record.specs.size;
        }
        return null;
      }
    },
    {
      title: '厚度',
      dataIndex: ['specs', 'thickness'],
      key: 'specs.thickness',
      render: (_, record) => {
        if (isFerriteBeadProduct(record)) {
          return record.specs.thickness;
        }
        return null;
      }
    },
    {
      title: '额定电流(at 85℃)(max)',
      dataIndex: ['specs', 'rated_current_85'],
      key: 'specs.rated_current_85',
      render: (_, record) => {
        if (isFerriteBeadProduct(record)) {
          return record.specs.rated_current_85;
        }
        return null;
      }
    },
    {
      title: '直流电阻(max)',
      dataIndex: ['specs', 'dc_resistance_max'],
      key: 'specs.dc_resistance_max',
      render: (_, record) => {
        if (isFerriteBeadProduct(record)) {
          return record.specs.dc_resistance_max;
        }
        return null;
      }
    },
    {
      title: '阻抗值公差',
      dataIndex: ['specs', 'impedance_tolerance'],
      key: 'specs.impedance_tolerance',
      render: (_, record) => {
        if (isFerriteBeadProduct(record)) {
          return record.specs.impedance_tolerance;
        }
        return null;
      }
    },
    {
      title: '温度范围',
      dataIndex: ['specs', 'temperature_range'],
      key: 'specs.temperature_range',
      render: (_, record) => {
        if (isFerriteBeadProduct(record)) {
          return record.specs.temperature_range;
        }
        return null;
      }
    },
    {
      title: '外型尺寸(EIA/JIS)',
      dataIndex: ['specs', 'external_dimensions'],
      key: 'specs.external_dimensions',
      render: (_, record) => {
        if (isFerriteBeadProduct(record)) {
          return record.specs.external_dimensions;
        }
        return null;
      }
    },
    {
      title: '产品资格',
      dataIndex: ['specs', 'qualification'],
      key: 'specs.qualification',
      render: (_, record) => {
        if (isFerriteBeadProduct(record)) {
          return record.specs.qualification;
        }
        return null;
      }
    },
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
      const fetchParams: FerriteBeadProductFetchParams = {
        ...pagination,
        search: '',
        impedance_100mhz: null,
        size: null,
        rated_current_85: null,
      };
      const response = await fetchFerriteBeadProducts(fetchParams);
      if (Array.isArray(response)) {
        const ferriteBeadProducts = response.filter(isFerriteBeadProduct);
        setAllData(ferriteBeadProducts);
        setFilteredData(ferriteBeadProducts); 
        setPagination({
          ...pagination,
          total: ferriteBeadProducts.length
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

      // 100MHz 阻抗筛选
      const impedance100MHzMatch = impedance100MHzFilter === null || 
        product.specs.impedance_100mhz === impedance100MHzFilter;

      return searchMatch && impedance100MHzMatch;
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
  }, [searchValue, impedance100MHzFilter]);

  const handleTableChange = (
    newPagination: TablePaginationConfig
  ) => {
    setPagination({
      current: newPagination.current || 1,
      pageSize: newPagination.pageSize || 25,
      total: pagination.total
    });
  };

  const getAllValues = (key: keyof FerriteBeadProduct['specs']) => {
    let values = allData.map(item => item.specs[key]);
  
    if (key === 'impedance_100mhz' || key === 'size' || key === 'thickness' || key === 'rated_current_85') {
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
                title: '铁氧体磁珠电感器',
              },
            ]}
          />
        </div>
      </div>
      <div className='container'>
        <div className='mt-30 mb-30'>
          <Title className='text-center text-primary' level={1}>铁氧体磁珠电感器</Title>
          <Divider />
          <Paragraph className='text-indent text-info font-size1'>
            研达创新电子代理的磁珠，具有高磁导率、低损耗等特点。广泛应用于电源管理、滤波、EMI抑制等场景，能满足不同客户在工业、消费电子等领域的需求。选择研达创新电子的铁氧体磁珠电感器，就是选择可靠的性能和优质的服务。
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
            placeholder="选择100MHz 阻抗"
            onChange={value => setImpedance100MHzFilter(value)}
            style={{ width: 200, marginRight: 16 }}
          >
            {getAllValues('impedance_100mhz').map((value, index) => (
              <Option key={`impedance_100mhz_${index}`} value={value}>{value}</Option>
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
            
          <Table<FerriteBeadProduct>
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

export default ProductListFerriteBead;