"use client";

import { useRouter } from "next/navigation";
import { ReactElement, useState } from "react";
import { Button, Form, Input, Space } from "antd";
import type { FormProps } from "antd";
import { Typography } from "antd";
import { login, LoginResponse } from "@/app/(my-app)/login/_actions/login";
import Link from "next/link";

type FieldType = {
  email?: string;
  password?: string;
};

export default function LoginForm(): ReactElement {
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    setIsPending(true);
    const result: LoginResponse = await login({
      email: values.email as string,
      password: values.password as string
    });
    setIsPending(false);

    if (result.success) {
      router.push("/dashboard");
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (

    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{
        minWidth: 400,
        backgroundColor: "#f0f2f5",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        padding: "20px"
      }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
    >
      <Typography.Title
        level={3}
        style={{ textAlign: "center", marginBottom: "24px" }}
      >
        Login
      </Typography.Title>
      <Form.Item<FieldType>
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
        style={{ width: "100%" }}
      >
        <Input type="email" style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
        style={{ width: "100%" }}
      >
        <Input.Password style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item label={null} style={{ width: "100%" }}>
        {isPending ? (
          <Button type="primary" loading>
            Loading
          </Button>
        ) : (
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        )}
      </Form.Item>
      <Space style={{ display: "flex", justifyContent: "center", marginTop: "16px", gap: "8px" }}>
        <Typography.Text>
          Do you have an account?
        </Typography.Text>
        <Link href="/signup">Sign Up</Link>
      </Space>

    </Form>
  );
}
