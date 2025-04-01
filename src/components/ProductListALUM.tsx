import { FC, useEffect, useState, useRef } from 'react';
import '@ant-design/v5-patch-for-react-19';
import { Link } from 'react-router-dom';
import { Table, Spin, Breadcrumb, Typography, Divider, Input, Select, Flex, Button } from 'antd';
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import { fetchAluminumProducts } from '../api/products';
import { AluminumProduct, AluminumProductFetchParams, Pagination } from '../types/product';
import { HomeOutlined, FilterOutlined } from '@ant-design/icons';
import { isAluminumProduct } from '../types/product'; // 导入类型守卫

const { Title, Paragraph } = Typography;
const { Search } = Input;
const { Option } = Select;

const ProductListALUM: FC = () => {
  // 修改为 AluminumProduct 类型
  const [allData, setAllData] = useState<AluminumProduct[]>([]); 
  const [filteredData, setFilteredData] = useState<AluminumProduct[]>([]); 
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState<Pagination>({
    current: 1,
    pageSize: 25, 
    total: 0
  });

  // 搜索状态
  const [searchValue, setSearchValue] = useState('');
  const [ratedVoltageFilter, setRatedVoltageFilter] = useState<string | null>(null);
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


  // 修改为 AluminumProduct 类型
  const columns: ColumnsType<AluminumProduct> = [
    {
      title: '商品型号',
      dataIndex: 'part_number',
      key: 'part_number',
      render: (text: string, record: AluminumProduct) => (
        <Link to={`/products/${record.part_number}`}>{text}</Link>
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
      title: '额定电压',
      dataIndex: ['specs', 'rated_voltage'],
      key: 'specs.rated_voltage',
      render: (_, record) => {
        if (isAluminumProduct(record)) {
          return record.specs.rated_voltage;
        }
        return null;
      }
    },
    {
      title: '尺寸',
      dataIndex: ['specs', 'size'],
      key: 'specs.size',
      render: (_, record) => {
        if (isAluminumProduct(record)) {
          return record.specs.size;
        }
        return null;
      }
    },
    {
      title: '温度范围',
      dataIndex: ['specs', 'temperature_range'],
      key: 'specs.temperature_range',
      render: (_, record) => {
        if (isAluminumProduct(record)) {
          return record.specs.temperature_range;
        }
        return null;
      }
    },
    {
      title: '电容值',
      dataIndex: ['specs', 'capacitance'],
      key: 'specs.capacitance',
      render: (_, record) => {
        if (isAluminumProduct(record)) {
          return record.specs.capacitance;
        }
        return null;
      }
    },
    {
      title: '精度',
      dataIndex: ['specs', 'tolerance'],
      key: 'specs.tolerance',
      render: (_, record) => {
        if (isAluminumProduct(record)) {
          return record.specs.tolerance;
        }
        return null;
      }
    },
    {
      title: '等效串联电阻',
      dataIndex: ['specs', 'esr'],
      key: 'specs.esr',
      render: (_, record) => {
        if (isAluminumProduct(record)) {
          return record.specs.esr;
        }
        return null;
      }
    },
    {
      title: '纹波电流',
      dataIndex: ['specs', 'ripple_current'],
      key: 'specs.ripple_current',
      render: (_, record) => {
        if (isAluminumProduct(record)) {
          return record.specs.ripple_current;
        }
        return null;
      }
    },
    {
      title: '纹波频率',
      dataIndex: ['specs', 'ripple_freq'],
      key: 'specs.ripple_freq',
      render: (_, record) => {
        if (isAluminumProduct(record)) {
          return record.specs.ripple_freq;
        }
        return null;
      }
    },
    {
      title: '耐久性',
      dataIndex: ['specs', 'endurance'],
      key: 'specs.endurance',
      render: (_, record) => {
        if (isAluminumProduct(record)) {
          return record.specs.endurance;
        }
        return null;
      }
    },
    {
      title: '形状',
      dataIndex: ['specs', 'shape'],
      key: 'specs.shape',
      render: (_, record) => {
        if (isAluminumProduct(record)) {
          return record.specs.shape;
        }
        return null;
      }
    },
    {
      title: '产品资格',
      dataIndex: ['specs', 'qualification'],
      key: 'specs.qualification',
      render: (_, record) => {
        if (isAluminumProduct(record)) {
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
  const tableContainerRef = useRef<HTMLDivElement>(null);

  // 处理滚动事件
  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return;
      const headerRect = headerRef.current.getBoundingClientRect();
      setFixedHeaderVisible(headerRect.top < 0);

      // 同步横向滚动
      if (tableContainerRef.current) {
        const scrollLeft = tableContainerRef.current.scrollLeft;
        const fixedHeader = document.querySelector('.fixed-header') as HTMLElement;
        if (fixedHeader) fixedHeader.scrollLeft = scrollLeft;
      }
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
      const fetchParams: AluminumProductFetchParams = {
        ...pagination,
        search: '',
        rated_voltage: null,
        size: null,
        capacitance: null,
      };
      const response = await fetchAluminumProducts(fetchParams);
      if (Array.isArray(response)) {
        const alumProducts = response.filter(isAluminumProduct);
        console.log('响应数据:', alumProducts); // 打印响应数据
        setAllData(alumProducts);
        setFilteredData(alumProducts); 
        setPagination({
          ...pagination,
          total: alumProducts.length
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

      // 额定电压筛选
      const ratedVoltageMatch = ratedVoltageFilter === null || 
        product.specs.rated_voltage === ratedVoltageFilter;

      return searchMatch && ratedVoltageMatch;
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
  }, [searchValue, ratedVoltageFilter]);

  // 修改 handleTableChange 函数以匹配 Table onChange 的类型要求
  const handleTableChange = (
    newPagination: TablePaginationConfig
  ) => {
    // 只处理分页相关逻辑
    setPagination({
      current: newPagination.current || 1,
      pageSize: newPagination.pageSize || 25,
      total: pagination.total
    });
  };

  // 获取所有可能的筛选值
  const getAllValues = (key: keyof AluminumProduct['specs']) => {
    let values = allData.map(item => item.specs[key]);
  
    // 对电容值和额定电压进行特殊处理，按数字部分排序
    if (key === 'capacitance' || key === 'rated_voltage') {
      values = values.sort((a, b) => {
        // 处理 a 和 b 可能为 null 或 undefined 的情况
        const aValue = a !== null && a !== undefined ? a.toString() : '';
        const bValue = b !== null && b !== undefined ? b.toString() : '';
  
        const numA = parseFloat(aValue.replace(/[^0-9.]/g, ''));
        const numB = parseFloat(bValue.replace(/[^0-9.]/g, ''));
  
        return numA - numB;
      });
      return Array.from(new Set(values));
    } else {
      // 过滤掉 null 和 undefined 值
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
                title: '产品分类',
                href: '/products',
              },
              {
                title: '铝电解电容器',
              },
            ]}
          />
        </div>
      </div>
      <div className='container'>
        <div className='mt-30 mb-30'>
          <Title className='text-center text-primary' level={1}>铝电解电容器</Title>
          <Divider />
          <Paragraph className='text-indent text-info font-size1'>
            研达创新电子代理的铝电解电容器，具有大容量、长寿命等特点。广泛应用于电源电路、滤波电路等场景，能满足不同客户在工业、消费电子等领域的需求。选择研达创新电子的铝电解电容器，就是选择可靠的性能和优质的服务。
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
            placeholder="选择额定电压"
            onChange={value => setRatedVoltageFilter(value)}
            style={{ width: 200, marginRight: 16 }}
          >
            {getAllValues('rated_voltage').map((value, index) => (
              <Option key={`rated_voltage_${index}`} value={value}>{value}</Option>
            ))}
          </Select>
          
        </Flex>

        <div 
          ref={tableContainerRef}
          onScroll={(e) => {
            const scrollLeft = (e.target as HTMLElement).scrollLeft;
            const fixedHeader = document.querySelector('.fixed-header') as HTMLElement;
            if (fixedHeader) fixedHeader.scrollLeft = scrollLeft;
          }}
          style={{ 
            position: 'relative',
            overflowX: 'auto',
            paddingTop: fixedHeaderVisible ? '55px' : '0' // 为固定表头预留空间
          }}
        >
          {/* 固定表头 */}
          {fixedHeaderVisible && (
            <div
              className="fixed-header"
              style={{
                position: 'fixed',
                top: 0,
                left: tableRef.current?.getBoundingClientRect().left || 0,
                width: tableWidth,
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
          )}

          <div  ref={tableRef}>
            
          <Table<AluminumProduct>
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

export default ProductListALUM;