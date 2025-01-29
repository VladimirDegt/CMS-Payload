import { getPayload } from "payload";
import { CollectionSlug } from "payload";
import config from "@payload-config";
import {HomePage} from '@/modules/HomePage/HomePage';

export const HomePageServer = async () => {
  const payload = await getPayload({ config });
  const homePage = await payload.findByID({
    collection: "pages" as CollectionSlug,
    id: "679a31f152a8976ac38af062",
  });

  // @ts-expect-error TODO: fix this
  return <HomePage layout={homePage.layout} />;
};
