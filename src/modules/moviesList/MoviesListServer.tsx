import { getPayload } from "payload";
import config from "@payload-config";
import { MoviesList } from "./MoviesList";

export const MoviesListServer = async () => {
  const payload = await getPayload({ config });
  const movies = await payload.find({
    collection: "movies",
  });

  return <MoviesList movies={movies} />;
};
