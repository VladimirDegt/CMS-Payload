import { headers as getHeaders } from "next/headers";
import { getPayload } from "payload";
import type { Payload } from "payload";
import configPromise from "@payload-config";
import { Customer } from "@/payload-types";


export async function getUser(): Promise<Customer|null> {
  const headers = await getHeaders();
  const payload: Payload = await getPayload({ config: await configPromise });
  const { user } = await payload.auth({headers});

  return user || null;

}