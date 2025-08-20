import type { ReactElement } from "react";
import '../assets/css/sitecontent.css'
import { Playlist } from './Playlist.tsx';
import { MediaPlayer } from './MediaPlayer.tsx';

export const SiteContent = (): ReactElement => {
    return (
        <div className="site-content">
            <Playlist/>
            <MediaPlayer/>
        </div>
    )
};