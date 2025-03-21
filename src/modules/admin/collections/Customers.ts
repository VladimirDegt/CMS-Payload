import type { CollectionConfig } from "payload";

export const CustomersCollection: CollectionConfig = {
  slug: "customers",
  admin: { useAsTitle: "email" },
  access: {
    create: () => true
  },
  auth: true,
  fields: [
    // { type: "text", name: "name", required: true },
    // { type: "text", name: "email", required: true },
  ],
};