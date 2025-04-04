// src/components/SearchComponent.tsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Input } from 'antd';

const { Search } = Input;

const SearchComponent: React.FC = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (value: string) => {
    setSearchTerm(value); // 更新状态
    navigate(`/search-results?query=${encodeURIComponent(value)}`);
  };

  return (
      <Search
        size="large"
        allowClear
        placeholder={t("searchPlaceholder")}
        value={searchTerm} // 使用 searchTerm
        onChange={(e) => setSearchTerm(e.target.value)} // 监听输入变化
        onSearch={handleSearch}
        style={{ maxWidth: 615 }}
        enterButton
      />
  );
};

export default SearchComponent;