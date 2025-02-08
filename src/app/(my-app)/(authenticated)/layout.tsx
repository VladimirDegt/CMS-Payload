import { redirect } from "next/navigation";
import { FC, ReactNode } from "react";
import { getUser } from "@/app/(my-app)/(authenticated)/_actions/getUser";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = async ({ children }: LayoutProps) => {
  const user = await getUser();

  if (!user) redirect("/login");

  return <>{children}</>;
}

export default Layout;