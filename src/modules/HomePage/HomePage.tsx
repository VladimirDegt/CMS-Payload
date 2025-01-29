import Image from 'next/image';

import {MoviesListServer} from '@/modules/moviesList/MoviesListServer';
import cls from './HomePage.module.css';

export type Header = {
    title: string;
    logo: {url: string, alt: string};
    alt: string;
}

export type Footer = {
    title: string;
}

export type HomePageProps = {
    layout: [Header, Footer];
};

export const HomePage = (props: HomePageProps) => {
    const { layout } = props;
    return (
        <>
        <header className={cls.header}>
            <Image src={layout[0].logo.url} alt={layout[0].logo.alt} width={50} height={50}/>
            <h1>{layout[0].title}</h1>
        </header>
            <main className={cls.main}>
                <MoviesListServer />
            </main>
            <footer className={cls.footer}>
                <h2>{layout[1].title}</h2>
            </footer>
        </>
    )
}