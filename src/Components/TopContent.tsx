import '../assets/topcontent.css'
import type { ReactElement } from "react";

export const TopContent = (): ReactElement => {
    return (
        <section className="top-content">
            <button className="back-button">Back</button>
            <h1>Moomin playlist</h1>
            <button className="hamburger-menu">Menu</button>
        </section>
    )
}