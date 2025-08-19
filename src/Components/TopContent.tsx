import '../assets/topcontent.css'
import '../assets/icons.css'
import type { ReactElement } from "react";

export const TopContent = (): ReactElement => {
    return (
        <section className="top-content">
            <button className="material-symbols-outlined arrow-back-btn">arrow_back_ios</button>
            <h1 className="crimson-text-regular">Playlist - Cosy Piano</h1>
            <button className="material-symbols-outlined hamburger-btn">more_vert</button>
        </section>
    )
}