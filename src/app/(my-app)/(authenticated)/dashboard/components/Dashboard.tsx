"use client";

import { Layout } from "antd";

import { NavigationMenu } from "./NavigationMenu";
import { LogoutBtn } from "./LogoutBtn";

const { Header, Content, Footer } = Layout;

export const Dashboard = () => {
    
  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <NavigationMenu />
        <LogoutBtn />
      </Header>
      <Content style={{ padding: "0 48px" }}>
        <div
          style={{
            background: "#f0f2f5",
            minHeight: 280,
            padding: 24,
            borderRadius: 4,
          }}
        >
        Content 
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};
