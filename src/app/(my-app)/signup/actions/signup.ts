"use server";

import { CollectionSlug, getPayload } from "payload";
import config from "@payload-config";
import { cookies } from "next/headers";

import { Customer } from "@/modules/admin/payload-types";

interface SignupParams {
  email: string;
  password: string;
}

export interface SignupResponse {
  success: boolean;
  error?: string;
}

export type SignupResult = {
  user?: Customer;
  exp?: number;
  token?: string;
}

export async function signup({ email, password }: SignupParams): Promise<SignupResponse> {
  const payload = await getPayload({ config });
  try {
    await payload.create({
      collection: "customers" as CollectionSlug,
      data: { email, password },
    });

    const result: SignupResult = await payload.login({
      collection: "customers" as CollectionSlug,
      data: { email, password },
    })
    if(result.token) {
      const cookieStore = await cookies();
      cookieStore.set({
        name: "payload-token",
        value: result.token,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
      });
      return { success: true };
    } else {
      return { success: false, error: "Login failed" };
    }
  } catch (error) {
    console.error("Signup error", error);
    return { success: false, error: "Signup failed" };
  }
}