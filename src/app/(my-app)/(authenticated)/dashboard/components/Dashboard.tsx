"use client";

import { Layout, Button, Modal, Input, Flex } from "antd";
import { ChangeEvent, ReactElement, useState } from "react";

import { NavigationMenu } from "./NavigationMenu";
import { LogoutBtn } from "./LogoutBtn";
import { sendEmail } from "@/modules/utils/sendEmail";

const { Header, Content, Footer } = Layout;

export const Dashboard = ({children}: {children: ReactElement}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    await sendEmail(email);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleGetEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  return (
    <Layout style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
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
          <Button type="primary" onClick={showModal}>
            Test send Email
          </Button>
          {children}
          <Modal
            title="Send message"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <Flex vertical={true} gap={24}>
              <p>Test send email</p>
              <p>Text massage is created in the CMS</p>
              <Input placeholder="Your email" type="email" onChange={handleGetEmail} value={email}/>
            </Flex>
          </Modal>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};
