import type { ReactElement } from "react";
import '../assets/playlist.css'
import { MediaElement } from './MediaElement.tsx';

export const Playlist = (): ReactElement => {
    return (
        <div className="leftside-media-list">
            <MediaElement/>
            <MediaElement/>
        </div>
    )
};