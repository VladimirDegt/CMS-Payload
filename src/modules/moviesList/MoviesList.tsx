import Image from "next/image";

export type Image = {
  id: string;
  alt: string;
  url: string;
};

export type Movies = {
  id: string;
  name: string;
  poster: Image;
};

export type MoviesListProps = {
  docs: Movies[];
};

export const MoviesList = ({ movies }: { movies: MoviesListProps }) => {
    const { docs } = movies;

  return (
    <>
      <h1>Movies List</h1>
      <ul>
        {docs.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.name}</h2>
            <Image
              src={movie.poster.url}
              alt={movie.poster.alt}
              width={200}
              height={200}
              priority={true}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
