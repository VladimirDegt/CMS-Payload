"use server";

import { CollectionSlug, getPayload } from "payload";
import config from "@payload-config";

export const sendEmail = async (senderEmail: string) => {
  const payload = await getPayload({ config });
  const messagesDoc = await payload.findByID({
    collection: "emails" as CollectionSlug,
    id: "67ab51475782a632118b6749",
  })

  await payload.sendEmail({
    to: senderEmail,
    subject: "Welcome to Movie App",
    // @ts-expect-error TODO: fix type
    html: messagesDoc.lexical_html,
  });
};
