"use client"

import { LogoutOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { logout } from "../../_actions/logout";

export const LogoutBtn = () => {
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleLogout = async () => {
        setIsPending(true);
        setError(null);

        const result = await logout();

        setIsPending(false);

        if (result.success) {
            router.push('/')
        } else {
            setError(result.error || "Logout failed")
        }
        
    }

    return (
      <>
        {error && <p style={{ color: "Red" }}>{error}</p>}
        {isPending ? (
          <Button type="default" variant="outlined" loading>
            Loading
          </Button>
        ) : (
          <Button
            type="default"
            variant="outlined"
            htmlType="button"
            onClick={handleLogout}
          >
            <LogoutOutlined />
          </Button>
        )}
      </>
    );
}