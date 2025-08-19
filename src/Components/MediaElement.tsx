import type { ReactElement } from "react";
import '../assets/playlist.css'


export const MediaElement = (): ReactElement => {
    return (
        <div className="media-element">
            <div className="media-img">img</div>
            <div className="media-info">
                <p>Mumin</p>
                <p>avsnitt 4</p>
            </div>
            <div className="playlist-play-btn">
                <p>play</p>
            </div>
        </div>
    )
};