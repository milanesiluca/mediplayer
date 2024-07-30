import { ReactElement } from "react";
import "./PlayConsole.css"
import play from "../assets/play.png"
import bckBtn from "../assets/back.png"
import nextBtn from "../assets/next.png"

export function PlayConsole () : ReactElement {
    return (
        <div className="buttons-container">
            <button className="bt">
                <span className="material-symbols-outlined setup-button">forward_circle</span>
            </button>
            <span className="play-group">
                <button className="btc">
                    <img className="bt" src={bckBtn} alt="back" />
                </button>
                <button className="btc">
                    <img className="btp" src={play} alt="play" />
                </button>
                <button className="btc">
                    <img className="bt" src={nextBtn} alt="forward" />
                </button>
            </span>
            <button className="bt">
                <span className="material-symbols-outlined setup-button">shuffle</span>
            </button>
        </div>
    );
}