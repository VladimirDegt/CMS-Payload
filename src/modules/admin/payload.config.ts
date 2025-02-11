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
import { CustomersCollection } from "@/modules/admin/collections/Customers";
import { EmailCollection } from "@/modules/admin/collections/Emails";

import brevoAdapter from "@/modules/admin/utils/brevoAdapter";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: UsersCollection.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    dateFormat: "dd/MM/yyyy",
  },
  cors: [process.env.URL_DEV || "", process.env.URL_PROD || ""],
    csrf: [process.env.URL_DEV || "", process.env.URL_PROD || ""],
    upload: {
        limits: {
          fileSize: 5 * 1024 * 1024
      }
  },
  email: brevoAdapter(),
  collections: [
    UsersCollection,
    MoviesCollection,
    Media,
    TagsCollection,
    PagesCollection,
    CustomersCollection,
    EmailCollection,
  ],
  editor: lexicalEditor({}),
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
        acl: "public-read",
      },
    }),
  ],
});
