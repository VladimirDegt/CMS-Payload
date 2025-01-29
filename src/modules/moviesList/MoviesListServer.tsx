import { getPayload } from "payload";
import { CollectionSlug } from "payload";
import config from "@payload-config";
import { MoviesList } from "./MoviesList";


export const MoviesListServer = async () => {
  const payload = await getPayload({ config });
  const movies = await payload.find({
    collection: "movies" as CollectionSlug,
  });
  // @ts-expect-error TODO: fix this
  return <MoviesList movies={movies} />;
};
