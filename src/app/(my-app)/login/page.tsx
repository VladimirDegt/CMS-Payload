import { ReactElement } from "react";
import LoginForm from "@/app/(my-app)/login/components/LoginForm";

import cls from "./page.module.scss";

export default function page(): ReactElement {
  return (
    <main className={cls.container}>
      <LoginForm/>
    </main>
  );
}