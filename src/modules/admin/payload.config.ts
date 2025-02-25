import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
import { buildConfig } from "payload";
import path from "path";
import { fileURLToPath } from "url";
import { uploadthingStorage } from "@payloadcms/storage-uploadthing";

import { UsersCollection } from "./collections/Users";
import brevoAdapter from "@/modules/admin/utils/brevoAdapter";
import { collections } from "@/modules/admin/collections";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: UsersCollection.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    dateFormat: "dd/MM/yyyy",
    // components: {
    //   beforeDashboard: [{path: 'src/moules/admin/adminComponents/HelloWidget.tsx'}],
    // },
    // components: {
    //   beforeDashboard: ['D:/Degtyarev/Projects/Wanderways/CMS-Payload/src/modules/admin/adminComponents/HelloWidget.tsx']
    // }
  },
  cors: [process.env.URL_DEV || "", process.env.URL_PROD || ""],
  csrf: [process.env.URL_DEV || "", process.env.URL_PROD || ""],
  upload: {
    limits: {
      fileSize: 5 * 1024 * 1024,
    },
  },
  email: brevoAdapter(),
  collections,
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
