import { ReactElement } from "react";

import cls from "./page.module.scss";
import SignupForm from "@/app/(my-app)/signup/_components/SignupForm";

export default function page(): ReactElement {
  return (
    <main className={cls.container}>
      <SignupForm/>
    </main>
  );
}