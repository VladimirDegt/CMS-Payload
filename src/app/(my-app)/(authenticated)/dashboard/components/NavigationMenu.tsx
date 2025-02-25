"use client";
import { Menu } from "antd";
import { useRouter } from "next/navigation";

export const NavigationMenu = () => {
  const navigate = useRouter();
    const items = [
    {
      key: "1",
      label: "Home",
      onClick: () => {
        navigate.push("/");
      },
    },
      {
        key: "1",
        label: "Admin",
        onClick: () => {
          navigate.push("/admin");
        },
      },
  ];
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["2"]}
      items={items}
      style={{ flex: 1, minWidth: 0 }}
    />
  );
};
