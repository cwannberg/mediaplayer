import type { ReactElement } from "react";
import '../assets/mediaplayer.css'
import SliderMock from "./Slider";


export const MediaPlayer = (): ReactElement => {
    return (
        <div className="right-side-mediaplayer">
            <img className="full-cover-img" src="https://i.scdn.co/image/ab67616d00001e02f0f380f4c2b54e3d0af2430c" alt="Della Valle - Daylight cover"/>
            <div className="player">
                <div className="player-top-section">
                    <button className="material-symbols-outlined">add</button>
                    <div className="album-info">
                        <p className="song-title">Daylight</p>
                        <p className="artist-name">Della Valle</p>
                    </div>
                    <button className="material-symbols-outlined">favorite</button>
                </div>
                <div className="player-middle-section">
                    <SliderMock/>
                </div>
                <div className="player-bottom-section">
                    <button className="material-symbols-outlined">shuffle</button>
                    <button className="material-symbols-outlined">skip_previous</button>
                    <button className="material-symbols-outlined">play_arrow</button>
                    <button className="material-symbols-outlined">skip_next</button>
                    <button className="material-symbols-outlined">repeat</button>
                </div>
            </div>
        </div>
    )
};