"use server";

import { CollectionSlug, getPayload } from "payload";
import config from "@payload-config";
import { cookies } from "next/headers";

import { Customer } from "@/payload-types";

interface LoginParams {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  error?: string;
}

export type LoginResult = {
  user?: Customer;
  exp?: number;
  token?: string;
};

export async function login({ email, password }: LoginParams): Promise<LoginResponse> {
  const payload = await getPayload({ config });
  try {
    const result: LoginResult = (await payload.login({
      collection: "customers" as CollectionSlug,
      data: { email, password },
    })) as LoginResult;

    if(result.token) {
      const cookieStore = await cookies();
      cookieStore.set("payload-token", result.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/"
      })

      return { success: true };
    } else {
      return { success: false, error: "An error occurred" };
    }
  } catch (error) {
    console.error("Login error", error);
    return { success: false, error: "An error occurred" };
  }
}