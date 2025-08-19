import type { ReactElement } from "react";
import '../assets/mediaplayer.css'


export const MediaPlayer = (): ReactElement => {
    return (
        <div className="right-side-mediaplayer">
            <div className="full-cover-img">bild</div>
            <div className="player">
                <div className="player-top-section">
                    <button>+</button>
                    <p>Titel</p>
                    <button>like</button>
                </div>
                <div className="player-middle-section">progressbar</div>
                <div className="player-bottom-section">
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
            </div>
        </div>
    )
};