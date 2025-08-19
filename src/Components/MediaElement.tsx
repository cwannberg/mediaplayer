import type { ReactElement } from "react";
import '../assets/playlist.css'


export const MediaElement = (): ReactElement => {
    return (
        <div className="media-element">
            <div className="img-small-container"><img className="img-small "src="https://i.scdn.co/image/ab67616d00001e02f0f380f4c2b54e3d0af2430c" alt="Della Valle - Daylight cover"/></div>
            <div className="media-info">
                <p className="song-title">Daylight</p>
                <p className="artist-name">Della Valle</p>
            </div>
            <button className="material-symbols-outlined">play_circle</button>
        </div>
    )
};