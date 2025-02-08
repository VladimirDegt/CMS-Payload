'use client';
import { Layout, Menu } from "antd";
import { useRouter } from "next/navigation";
const { Header, Content, Footer } = Layout;


export const Dashboard = () => {
  const navigate = useRouter();
const items = [{key: '1', label: "Home", onClick: () => {navigate.push('/')}}];
  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: '0 48px' }}>
        <div
          style={{
            background: '#f0f2f5',
            minHeight: 280,
            padding: 24,
            borderRadius: 4,
          }}
        >
          Content
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>

  )
};