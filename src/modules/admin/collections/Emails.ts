import { CollectionConfig } from "payload";
import { FixedToolbarFeature, HTMLConverterFeature, lexicalEditor, lexicalHTML } from "@payloadcms/richtext-lexical";

export const EmailCollection: CollectionConfig = {
  slug: "emails",
  fields: [
    {
      type: "richText",
      name: "message",
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures, FixedToolbarFeature(), HTMLConverterFeature()],
      }),
    },
    lexicalHTML("message", {name: 'lexical_html', }),
  ],
};
