import { ReactElement } from "react";
import "./NavBar.css"

export function NavBar(): ReactElement {
    return (
        <nav className="navbar">
            <span className="material-symbols-outlined">arrow_back_2</span>
            <span>PlayList Luca</span>
            <span className="material-symbols-outlined">more_vert</span>
        </nav>
    );
}