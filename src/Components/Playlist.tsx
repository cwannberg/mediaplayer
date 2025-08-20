import type { ReactElement } from "react";
import '../assets/css/playlist.css'
import { MediaElement } from './MediaElement.tsx';

export const Playlist = (): ReactElement => {
    return (
        <div className="leftside-media-list">
            <MediaElement/>
        </div>
    )
};