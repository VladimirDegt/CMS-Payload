import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
import { seoPlugin} from "@payloadcms/plugin-seo";
import { AfterErrorHookArgs, buildConfig } from "payload";
import path from "path";
import { fileURLToPath } from "url";
import { uploadthingStorage } from "@payloadcms/storage-uploadthing";

import { UsersCollection } from "./modules/admin/collections/Users";
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
    components: {
      graphics: {
        Logo: '@/modules/admin/adminComponents/Logo',
        Icon: '@/modules/admin/adminComponents/Icon'
      },
      beforeDashboard: ['@/modules/admin/adminComponents/HelloWidget']
    },
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
    seoPlugin({
      collections: ["projects", "movies"],
      uploadsCollection: "media",
      generateTitle: (doc) => doc.title,
      // generateDescription: (doc) => doc.description,
      generateURL: ({doc, collectionSlug}) => `http://example.com/${collectionSlug}/${doc.slug}`,
      tabbedUI: true
    }),
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
  hooks: {
    afterError: [
      (error: AfterErrorHookArgs)=> {
        console.error('Error in the global hook:', error.error);
      },
    ]
  }
});
