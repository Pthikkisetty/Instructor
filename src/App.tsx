import React from 'react';
import { Layout, Space, SelectProps , Select, Button, Divider, List, Typography} from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
  fontSize: "250%"
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9',
};

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#3ba0e9',
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};

const options: SelectProps['options'] = [];

for (let i = 1; i < 10; i++) {
  options.push({
    value:  i,
    label: 'Course' + i,
  });
}

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};


const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%', height:'100%' }} size={[0, 48]}>
    <Layout style={{ width: '100%', height:'100%' }}>
      <Header style={headerStyle}>Instructor
      <List.Item style={{marginLeft:'10%'}}>Instructor Name</List.Item>
      <List.Item style={{marginLeft:'10%',fontSize:'120%'}}></List.Item>
      </Header>
      <Content style={contentStyle}>
        <Select
    mode="tags"
    style={{ width: '50%' }}
    placeholder="Please Select the Course"
    onChange={handleChange}
    options={options}
  /><Button type="primary">Add Course</Button>
</Content>
<Divider orientation="left">List of Courses</Divider>
    <List
      size="large"
      bordered
      dataSource={options}
      renderItem={(item) => <List.Item style={{marginLeft:'10%',fontSize:'120%'}}>{item.label}</List.Item>}
    />
      {/* <Footer style={footerStyle}>Footer</Footer> */}
    </Layout>
  </Space>
);

export default App;