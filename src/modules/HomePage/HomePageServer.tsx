import { getPayload } from "payload";
import { CollectionSlug } from "payload";
import config from "@payload-config";
import {HomePage} from '@/modules/HomePage/HomePage';

export const HomePageServer = async () => {
  const payload = await getPayload({ config });

  await payload.sendEmail({
    to: process.env.BREVO_SENDER_EMAIL,
    subject: "Welcome to Movie App",
    html: `<h1>Welcome!</h1><p>Thanks for joining our app.</p>`,
  });

  const homePage = await payload.findByID({
    collection: "pages" as CollectionSlug,
    id: "679b3d894406c0c90f1a4740",
  });

  // @ts-expect-error TODO: fix this
  return <HomePage layout={homePage.layout} />;
};
