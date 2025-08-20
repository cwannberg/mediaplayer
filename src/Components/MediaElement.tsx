import type { ReactElement } from "react";
import '../assets/css/playlist.css'


export const mediaList = [
    {   
        title: 'Daylight',
        artist: 'Della Valle',
        img: 'https://i.scdn.co/image/ab67616d00001e02f0f380f4c2b54e3d0af2430c',
        alt: 'Della Valle - Daylight albumcover'
    },
    {   
        title: 'Sooner',
        artist: 'Erinthe',
        img: './assets/src/sooner.jpg',
        alt: 'Erinthe - Sooner albumcover'
    },
    {   
        title: 'Sojourn',
        artist: 'Theó Laurent',
        img: './assets/src/sjuourn.jpg',
        alt: 'Theó Laurent - Sojourn albumcover'
    },
    {   
        title: 'Under the same moon',
        artist: 'Halgeir Nielsen',
        img: './assets/src/moon.jpg',
        alt: 'Halgeir Nielsen - Under the same moon albumcover'
    }
];

export const MediaElement = (): ReactElement => {
    return (
    <>
        {mediaList.map((element, index) => (
            <div className="media-element">
                <div key={index} className="img-small-container">
                    <img 
                    className="img-small" 
                    src={element.img} 
                    alt={'${element.artist} - ${element.title} album cover'}
                    />
                    <div className="media-info">
                        <p className="song-title">{element.title}</p>
                        <p className="artist-name">{element.artist}</p>
                    </div>
                    <button className="material-symbols-outlined">play_circle</button>
                </div>
            </div>
        ))}
    </>
    );
};