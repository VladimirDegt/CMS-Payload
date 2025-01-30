import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
import { buildConfig } from "payload";
import path from "path";
import { fileURLToPath } from "url";
import { uploadthingStorage } from "@payloadcms/storage-uploadthing";

import { UsersCollection } from "./collections/Users";
import { MoviesCollection } from "./collections/Movies";
import { Media } from "./collections/Media";
import { TagsCollection } from "./collections/Tags";
import { PagesCollection } from "./collections/Pages";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: UsersCollection.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  editor: lexicalEditor(),
  collections: [
    UsersCollection,
    MoviesCollection,
    Media,
    TagsCollection,
    PagesCollection,
  ],
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "",
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    uploadthingStorage({
      collections: {
        media: true,
      },
      options: {
        token: process.env.UPLOADTHING_TOKEN,
        acl: 'public-read',
      },
    }),
  ],
});
