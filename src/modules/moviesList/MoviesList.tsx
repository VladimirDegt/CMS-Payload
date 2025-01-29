import Image from "next/image";

import cls from "./MoviesList.module.css";

export type Image = {
  id: string;
  alt: string;
  url: string;
};

export type Movies = {
  id: string;
  name: string;
    poster: Image;
    tags: { id: string; name: { value: { name: string } } }[];
};

export type MoviesListProps = {
  docs: Movies[];
};

export const MoviesList = ({ movies }: { movies: MoviesListProps }) => {
    const { docs } = movies;
console.log(docs);
  return (
    <>
      <h1 className={cls.title}>Popular movies</h1>
      <ul className={cls.container}>
        {docs.map((movie) => (
          <li key={movie.id} className={cls.card}>
            <h2 className={cls.name}>{movie.name}</h2>
                <Image
                    className={cls.poster}
              src={movie.poster.url}
              alt={movie.poster.alt}
              width={200}
              height={300}
              priority={true}
                />
                {movie.tags.map((tag) => (<span className={cls.tag} key={tag.id}>{tag.name.value.name}</span>))}
          </li>
        ))}
      </ul>
    </>
  );
};
