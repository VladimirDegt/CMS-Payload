import type { CollectionConfig } from "payload";

export const MoviesCollection: CollectionConfig = {
  slug: "movies",
  fields: [
    { type: "text", name: "name", required: true },
    { type: "upload", name: "poster", relationTo: "media", required: true },
    {
      type: "array",
      name: "tags",
      required: true,
      fields: [
        {
          type: "relationship",
          // @ts-expect-error TODO: fix this
          relationTo: ["tags"],
          name: "name",
          required: true,
        },
      ],
    },
  ],
};
    