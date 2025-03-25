import { FC, useEffect, useState, useRef } from 'react';
import '@ant-design/v5-patch-for-react-19';
import { Link } from 'react-router-dom';
import { Table, Spin, Breadcrumb, Typography, Divider, Input, Select, Flex } from 'antd';
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import { fetchProducts } from '../api/products';
import { Product, Pagination, ProductFetchParams } from '../types/product';
import { HomeOutlined } from '@ant-design/icons';
const { Title, Paragraph } = Typography;
const { Search } = Input;
const { Option } = Select;
const ProductListMLCC: FC = () => {
  const [allData, setAllData] = useState<Product[]>([]); // 存储所有产品数据
  const [filteredData, setFilteredData] = useState<Product[]>([]); // 存储过滤后的产品数据
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

  const columns: ColumnsType<Product> = [
    {
      title: '商品型号',
      dataIndex: 'part_number',
      key: 'part_number',
      render: (text: string, record: Product) => (
        <Link to={`/products/${record.part_number}`}>{text}</Link>
      ),
      fixed: 'left'
    },
    {
      title: '物料编码',
      dataIndex: 'product_code',
      key: 'product_code',
      fixed: 'left'
    },
    // {
    //   title: '产品类型显示',
    //   dataIndex: 'get_product_type_display',
    //   key: 'get_product_type_display',
    // },
    {
      title: '额定电压',
      dataIndex: 'specs.rated_voltage',
      key: 'specs.rated_voltage',
      render: (_, record) => {
        return record.specs.rated_voltage;
      }
    },
    {
      title: '封装',
      dataIndex: 'specs.package',
      key: 'specs.package',
      render: (_, record) => {
        return record.specs.package;
      }
    },
    {
      title: '材质',
      dataIndex: 'specs.material',
      key: 'specs.material',
      render: (_, record) => {
        return record.specs.material;
      }
    },
    {
      title: '温度范围',
      dataIndex: 'specs.temperature_range',
      key: 'specs.temperature_range',
      render: (_, record) => {
        return record.specs.temperature_range;
      }
    },
    {
      title: '容值',
      dataIndex: 'specs.capacity',
      key: 'specs.capacity',
      render: (_, record) => {
        return record.specs.capacity;
      }
    },
    {
      title: '精度',
      dataIndex: 'specs.tolerance',
      key: 'specs.tolerance',
      render: (_, record) => {
        return record.specs.tolerance;
      }
    },
    {
      title: '包装方式',
      dataIndex: 'specs.packaging',
      key: 'specs.packaging',
      render: (_, record) => {
        return record.specs.packaging;
      }
    },
    {
      title: '产品资格',
      dataIndex: 'specs.qualification',
      key: 'specs.qualification',
      render: (_, record) => {
        return record.specs.qualification;
      }
    },
    {
      title: '品牌',
      dataIndex: 'specs.brand',
      key: 'specs.brand',
      render: (_, record) => {
        return record.specs.brand;
      }
    },
    {
      title: 'SPQ',
      dataIndex: 'specs.spq',
      key: 'specs.spq',
      render: (_, record) => {
        return record.specs.spq;
      }
    },
  ];

  const loadData = async () => {
    setLoading(true);
    try {
      // 初始请求时不传递筛选参数，获取全部数据
      const fetchParams: ProductFetchParams = {
        ...pagination,
        search: '',
        rated_voltage: null,
        package: null,
        material: null,
        capacity: null
      };
      const response = await fetchProducts(fetchParams);
      if (Array.isArray(response)) {
        setAllData(response);
        // 初始时过滤数据就是全部数据
        setFilteredData(response); 
        setPagination({
          ...pagination,
          total: response.length
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

  const tableRef = useRef<HTMLDivElement>(null);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);


  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (tableRef.current) {
        const tableRect = tableRef.current.getBoundingClientRect();
        // 当表格顶部超出视口顶部时，固定表头
        setIsHeaderFixed(tableRect.top <= 0); 
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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
  const getAllValues = (key: keyof Product['specs']) => {
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
                title: '产品分类',
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
            研达创新所代理的片状多层陶瓷电容器，采用先进工艺，具有小体积、大容量、高频性能优异等特点。
            TAIYO YUDEN品牌的片状多层陶瓷电容器广泛应用于智能手机、平板电脑、笔记本电脑、通信基站、汽车电子系统等众多领域，可满足不同客户在消费电子、通信、汽车电子等领域的多样化需求。
            选择研达创新的片状多层陶瓷电容器，就是选择卓越的性能、稳定的质量和专业的服务。我们始终坚持以客户为中心，致力于为客户提供最优质的产品和最满意的电子元件解决方案，助力您的企业发展和创新。
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
            {getAllValues('rated_voltage').map(value => (
              <Option key={value} value={value}>{value}</Option>
            ))}
          </Select>
          <Select
            placeholder="选择封装"
            onChange={value => setPackageFilter(value)}
            style={{ width: 120, marginRight: 16 }}
          >
            {getAllValues('package').map(value => (
              <Option key={value} value={value}>{value}</Option>
            ))}
          </Select>
          <Select
            placeholder="选择材质"
            onChange={value => setMaterialFilter(value)}
            style={{ width: 120, marginRight: 16 }}
          >
            {getAllValues('material').map(value => (
              <Option key={value} value={value}>{value}</Option>
            ))}
          </Select>
          <Select
            placeholder="选择容值"
            onChange={value => setCapacityFilter(value)}
            style={{ width: 120, marginRight: 16 }}
          >
            {getAllValues('capacity').map(value => (
              <Option key={value} value={value}>{value}</Option>
            ))}
          </Select>
          <Select
            placeholder="选择精度"
            onChange={value => setCapacityFilter(value)}
            style={{ width: 120 }}
          >
            {getAllValues('tolerance').map(value => (
              <Option key={value} value={value}>{value}</Option>
            ))}
          </Select>
        </Flex>

        <div ref={tableRef}>
          <Table<Product>
            columns={columns}
            dataSource={filteredData}
            rowKey="part_number"
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
          />
        </div>
        {isHeaderFixed && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              backgroundColor: 'white',
              zIndex: 100,
              maxWidth: '1360px',
              margin: '0 auto',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Table<Product>
              columns={columns}
              dataSource={[]}
              rowKey="part_number"
              pagination={false}
              showHeader
              // 隐藏表格主体
              components={{
                body: {
                  wrapper: () => null,
                },
              }}
              scroll={{ x: 'max-content' }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductListMLCC;