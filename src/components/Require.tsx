import React from 'react';
import { Card, Form, Input, Button, FormProps } from 'antd';

type FieldType = {
  name?: string;
  email?: string;
  message?: string;
};

const Require: React.FC = () => {
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Received values:', values);
  };

  return (
    <Card title="联系我们" className="page-card">
      <Form
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="姓名"
          name="name"
          rules={[{ required: true, message: '请输入您的姓名' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="邮箱"
          name="email"
          rules={[{ type: 'email', message: '请输入有效的邮箱地址' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="留言"
          name="message"
          rules={[{ required: true, message: '请输入您的留言内容' }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Require;
