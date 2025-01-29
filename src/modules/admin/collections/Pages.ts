import type { CollectionConfig } from "payload";
import { HeaderBlock } from "@/modules/admin/blocks/Header";
import { FooterBlock } from "@/modules/admin/blocks/Footer";

export const PagesCollection: CollectionConfig = {
  slug: "pages",
  fields: [
    { type: "text", name: "name", required: true },
    { type: "text", name: "slug", required: true },
    {
      name: "layout",
      type: "blocks",
      blocks: [HeaderBlock, FooterBlock],
      required: true,
    },
  ],
};
