import type { ReactElement } from "react";
import '../assets/css/playlist.css'
import sooner from '../assets/img/sooner.jpg';
import sojourn from '../assets/img/sjourn.jpg';
import moon from '../assets/img/moon.jpg';


 const mediaList = [
    {   
        id: 1,
        title: 'Daylight',
        artist: 'Della Valle',
        img: 'https://i.scdn.co/image/ab67616d00001e02f0f380f4c2b54e3d0af2430c',
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