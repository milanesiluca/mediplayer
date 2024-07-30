import { ReactElement } from "react";
import "./ListSections.css"
import { IRowData } from "../interfaces";

interface IListSectionProps {
    data: IRowData[];
}

var songs: IRowData[];

export function PlayList({ data }: IListSectionProps) : ReactElement {
    songs = data;
    return (
        <section className="section-body">
            {data.map((listRow) => (
                <span className="row-container" id={listRow.id.toString()}>
                    <div className="play-button">
                    <span className="material-symbols-outlined">play_circle</span>
                    </div>
                    <div className="row">
                        <p className="title">{listRow.title}</p>
                        <p className="sub-title">{listRow.subTitle}</p>
                    </div>
                    <span className="img-container">
                        <img className="album-img" src={listRow.imgUrl} alt="album" />
                    </span>
                </span>
            ))}    
        </section>
        
    );

}


var id = -1;
const row = document.querySelector(".row-container");
row?.addEventListener("click", () => {
    id = parseInt(row.id)
    const filterObj = songs.filter((id) => id)[0];
    
});

