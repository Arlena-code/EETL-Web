import { FC, useEffect, useState, useRef, useCallback } from 'react';
import '@ant-design/v5-patch-for-react-19';
import { Link } from 'react-router-dom';
import { Table, Spin, Breadcrumb, Typography, Divider, Input, Select, Flex, Button, Modal } from 'antd';
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import { fetchMLCCProducts } from '../api/products';
import { MLCCProduct, MLCCProductFetchParams, Pagination, isMLCCProduct } from '../types/product';
import { HomeOutlined, FilterOutlined } from '@ant-design/icons';
const { Title, Paragraph } = Typography;
const { Search } = Input;
const { Option } = Select;
const ProductListMLCC: FC = () => {
  const [allData, setAllData] = useState<MLCCProduct[]>([]);
  // 修改为 MLCCProduct 类型
  const [filteredData, setFilteredData] = useState<MLCCProduct[]>([]); 
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState<Pagination>({
    current: 1,
    pageSize: 25, // 设置每页显示 25 条数据
    total: 0
  });

  // 搜索状态
  const [searchValue, setSearchValue] = useState('');
  const [ratedVoltageFilter, setRatedVoltageFilter] = useState<string | null>(null);
  const [packageFilter, setPackageFilter] = useState<string | null>(null);
  const [materialFilter, setMaterialFilter] = useState<string | null>(null);
  const [capacityFilter, setCapacityFilter] = useState<string | null>(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // 假设 768px 为移动端阈值
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  const columns: ColumnsType<MLCCProduct> = [
    {
      title: '商品型号',
      dataIndex: 'part_number',
      key: 'part_number',
      render: (text: string, record: MLCCProduct) => (
        <Link to={`/products-mlcc/${record.part_number}`}>{text}</Link>
      ),
      fixed: isMobile ? undefined : 'left'
    },
    {
      title: '物料编码',
      dataIndex: 'product_code',
      key: 'product_code',
      fixed: isMobile ? undefined : 'left'
    },
    // {
    //   title: '产品类型显示',
    //   dataIndex: 'get_product_type_display',
    //   key: 'get_product_type_display',
    // },
    {
      title: '额定电压',
      dataIndex: ['specs', 'rated_voltage'], 
      key: 'specs.rated_voltage',
      render: (_, record) => {
        return record.specs.rated_voltage;
      }
    },
    {
      title: '封装',
      dataIndex: ['specs', 'package'],
      key: 'specs.package',
      render: (_, record) => {
        return record.specs.package;
      }
    },
    {
      title: '材质',
      dataIndex: ['specs', 'material'],
      key: 'specs.material',
      render: (_, record) => {
        return record.specs.material;
      }
    },
    {
      title: '温度范围',
      dataIndex: ['specs', 'temperature_range'],
      key: 'specs.temperature_range',
      render: (_, record) => {
        return record.specs.temperature_range;
      }
    },
    {
      title: '容值',
      dataIndex: ['specs', 'capacity'],
      key: 'specs.capacity',
      render: (_, record) => {
        return record.specs.capacity;
      }
    },
    {
      title: '精度',
      dataIndex: ['specs', 'tolerance'],
      key: 'specs.tolerance',
      render: (_, record) => {
        return record.specs.tolerance;
      }
    },
    {
      title: '包装方式',
      dataIndex: ['specs', 'packaging'],
      key: 'specs.packaging',
      render: (_, record) => {
        return record.specs.packaging;
      }
    },
    {
      title: '产品资格',
      dataIndex: ['specs', 'qualification'],
      key: 'specs.qualification',
      render: (_, record) => {
        return record.specs.qualification;
      }
    },
    {
      title: '品牌',
      dataIndex: ['specs', 'brand'],
      key: 'specs.brand',
      render: (_, record) => {
        return record.specs.brand;
      }
    },
    {
      title: 'SPQ',
      dataIndex: ['specs', 'spq'],
      key: 'specs.spq',
      render: (_, record) => {
        return record.specs.spq;
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
      const fetchParams: MLCCProductFetchParams  = {
        ...pagination,
        search: '',
        rated_voltage: null,
        package: null,
        material: null,
        capacity: null,
      };
      const response = await fetchMLCCProducts(fetchParams);
      if (Array.isArray(response)) {
        // 筛选出 MLCC 产品
        const mlccProducts = response.filter(isMLCCProduct);
        setAllData(mlccProducts);
        setFilteredData(mlccProducts); // 初始时过滤数据就是全部数据
        setPagination({
          ...pagination,
          total: mlccProducts.length
        });
      } else {
        console.error('返回的数据不是数组:', response);
      }
    } catch (error) {
      console.error('加载数据失败:', error);
      if (error instanceof Error) {
        console.error('错误详情:', error.message, error.stack);
      }
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

      // 封装筛选
      const packageMatch = packageFilter === null || 
        product.specs.package === packageFilter;

      // 材质筛选
      const materialMatch = materialFilter === null || 
        product.specs.material === materialFilter;

      // 容值筛选
      const capacityMatch = capacityFilter === null || 
        product.specs.capacity === capacityFilter;

      return searchMatch && ratedVoltageMatch && packageMatch && materialMatch && capacityMatch;
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
  }, [searchValue, ratedVoltageFilter, packageFilter, materialFilter, capacityFilter]);

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
  const getAllValues = (key: keyof MLCCProduct['specs']) => {
    let values = allData.map(item => item.specs[key]);
  
    // 对容值进行特殊处理，按数字部分排序
    if (key === 'capacity' || key === 'rated_voltage') {
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
    // return Array.from(new Set(allData.map(item => item.specs[key])));
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
                title: '片状多层陶瓷电容器',
              },
            ]}
          />
        </div>
      </div>
      <div className='container'>
        <div className='mt-30 mb-30'>
          <Title className='text-center text-primary' level={1}>片状多层陶瓷电容器</Title>
          <Divider />
          <Paragraph className='text-indent text-info font-size1'>
            研达创新电子代理的片状多层陶瓷电容器，采用先进工艺，具有小体积、大容量、高频性能优异等特点。
            我们的片状多层陶瓷电容器广泛应用于智能手机、平板电脑、笔记本电脑、通信基站、汽车电子系统等众多领域，可满足不同客户在消费电子、通信、汽车电子等领域的多样化需求。
            选择研达创新电子的片状多层陶瓷电容器，就是选择卓越的性能、稳定的质量和专业的服务。我们始终坚持以客户为中心，致力于为客户提供最优质的产品和最满意的电子元件解决方案，助力您的企业发展和创新。
          </Paragraph>
        </div>

        {/* 搜索条件 */}
        {isMobile ? (
          <div className='text-right'>
            <Button className='mb-10 pl-30 pr-30' icon={<FilterOutlined />} onClick={showModal}>
              筛选产品
            </Button>
          </div>
        ) : (
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
            <Select
              placeholder="选择封装"
              onChange={value => setPackageFilter(value)}
              style={{ width: 120, marginRight: 16 }}
            >
              {getAllValues('package').map((value, index) => (
                <Option key={`package_${index}`} value={value}>{value}</Option>
              ))}
            </Select>
            <Select
              placeholder="选择材质"
              onChange={value => setMaterialFilter(value)}
              style={{ width: 120, marginRight: 16 }}
            >
              {getAllValues('material').map((value, index) => (
                <Option key={`material_${index}`} value={value}>{value}</Option>
              ))}
            </Select>
            <Select
              placeholder="选择容值"
              onChange={value => setCapacityFilter(value)}
              style={{ width: 120, marginRight: 16 }}
            >
              {getAllValues('capacity').map((value, index) => (
                <Option key={`capacity_${index}`} value={value}>{value}</Option>
              ))}
            </Select>
            <Select
              placeholder="选择精度"
              onChange={value => setCapacityFilter(value)}
              style={{ width: 120 }}
            >
              {getAllValues('tolerance').map((value, index) => (
                <Option key={`tolerance_${index}`} value={value}>{value}</Option>
              ))}
            </Select>
          </Flex>
        )}

        <Modal title="筛选条件" open={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <Flex vertical gap={16}>
            <Search
              placeholder="搜索商品型号和物料编码"
              onSearch={value => setSearchValue(value)}
            />
            <Select
              placeholder="选择额定电压"
              onChange={value => setRatedVoltageFilter(value)}
            >
              {getAllValues('rated_voltage').map((value, index) => (
                <Option key={`modal_rated_voltage_${index}`} value={value}>{value}</Option>
              ))}
            </Select>
            <Select
              placeholder="选择封装"
              onChange={value => setPackageFilter(value)}
            >
              {getAllValues('package').map((value, index) => (
                <Option key={`modal_package_${index}`} value={value}>{value}</Option>
              ))}
            </Select>
            <Select
              placeholder="选择材质"
              onChange={value => setMaterialFilter(value)}
            >
              {getAllValues('material').map((value, index) => (
                <Option key={`modal_material_${index}`} value={value}>{value}</Option>
              ))}
            </Select>
            <Select
              placeholder="选择容值"
              onChange={value => setCapacityFilter(value)}
            >
              {getAllValues('capacity').map((value, index) => (
                <Option key={`modal_capacity_${index}`} value={value}>{value}</Option>
              ))}
            </Select>
            <Select
              placeholder="选择精度"
              onChange={value => setCapacityFilter(value)}
            >
              {getAllValues('tolerance').map((value, index) => (
                <Option key={`modal_tolerance_${index}`} value={value}>{value}</Option>
              ))}
            </Select>
          </Flex>
        </Modal>

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
            
          <Table<MLCCProduct>
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
              pageSizeOptions: ['25', '50', '100'], // 可选择的每页数量选项
              className: 'mt-30'
            }}
            loading={{
              spinning: loading,
              indicator: <Spin size="large" />
            }}
            onChange={handleTableChange}
            bordered
            // 确保所有列都能显示
            scroll={{ x: 'max-content' }}
            style={{ marginTop: fixedHeaderVisible ? -40 : 0 }} // 调整表格位置 
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

export default ProductListMLCC;