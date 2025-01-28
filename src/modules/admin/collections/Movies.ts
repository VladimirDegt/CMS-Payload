import type { CollectionConfig } from "payload";

export const MoviesCollection: CollectionConfig = {
    slug: "movies",
    fields: [
        { type: "text", name: "name", required: true },
        {type: "upload", name: "poster", relationTo: "media", required: true},
    ]
};
