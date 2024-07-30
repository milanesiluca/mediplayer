import { ReactElement } from "react";
import "./PlayerSection.css"
import { IRowData } from "../interfaces";
import { PlayConsole } from "./PlayConsole";

interface ISongSelectedProps {
    data: IRowData;
}

export function PlayerSection ({ data }: ISongSelectedProps) : ReactElement {
    return (
        <div className="player-section">
            <section className="main-section">
                <p className="song-title">{data.title}</p>
                <p className="artist">{data.subTitle}</p>
                <img className="album-pic" src={data.imgUrl} alt="album" />
                <span className="control-section">
                    <PlayConsole />
                </span>
            </section>
        </div>
    );
}
