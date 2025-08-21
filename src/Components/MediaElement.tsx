import type { ReactElement } from "react";
import '../assets/css/playlist.css'
import daylight from '../assets/img/daylight.jpg';
import sooner from '../assets/img/sooner.jpg';
import sojourn from '../assets/img/sjourn.jpg';
import moon from '../assets/img/moon.jpg';
import mist from '../assets/img/mist.jpg';
import mirada from '../assets/img/mirada.jpg';
import pine from '../assets/img/pine.jpg';
import cloud from '../assets/img/cloud.jpg';


 const mediaList = [
    {   
        id: 1,
        title: 'Daylight',
        artist: 'Della Valle',
        img: daylight,
        alt: 'Della Valle - Daylight album cover',
        active: true
    },
    {   
        id: 2,
        title: 'Sooner',
        artist: 'Erinthe',
        img: sooner,
        alt: 'Erinthe - Sooner album cover',
        active: false
    },
    {   
        id: 3,
        title: 'Sojourn',
        artist: 'Theó Laurent',
        img: sojourn,
        alt: 'Theó Laurent - Sojourn album cover',
        active: false
    },
    {   
        id: 4,
        title: 'Under the same moon',
        artist: 'Halgeir Nielsen',
        img: moon,
        alt: 'Halgeir Nielsen - Under the same moon album cover',
        active: false
    },
    {   
        id: 5,
        title: 'Veil of Mist',
        artist: 'Jonam Breuer',
        img: mist,
        alt: 'Jonam Breuer - Veil of Mist album cover',
        active: false
    },
    {   
        id: 6,
        title: 'Et tu mirada',
        artist: 'Jon Albreit',
        img: mirada,
        alt: 'Et tu mirada - Sooner album cover',
        active: false
    },
    {   
        id: 7,
        title: 'Pine Valley',
        artist: 'Elois Jacq',
        img: pine,
        alt: 'Elois Jacq - Pine Valley album cover',
        active: false
    },
    {   
        id: 8,
        title: 'Cloud Atlas',
        artist: 'Auley Gere',
        img: cloud,
        alt: 'Auley Gere - Cloud Atlas album cover',
        active: false
    }
];

export const MediaElement = (): ReactElement => {
    return (
    <>
        {mediaList.map((element) => (
            <div key={element.id} className="media-element">         
                <img className="img-small" src={element.img} alt={`${element.artist} - ${element.title} album cover`}/>
                <div className="media-info">
                    <p className="song-title">{element.title}</p>
                    <p className="artist-name">{element.artist}</p>
                </div>
                <button className="material-symbols-outlined playBtn">play_circle</button>
            
            </div>
        ))}
    </>
    );
};