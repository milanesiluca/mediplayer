import "./interfaces"
import { IRowData } from "./interfaces"
import vasco from "./assets/vasco.jpg"
import liga1 from "./assets/liga1.jpg"
import liga2 from "./assets/cielo.jpg"
import gabb from "./assets/gabbani.jpg"
import s883 from "./assets/883.jpg"
import daniele from "./assets/daniele.jpg"

export const songList : IRowData[] = [
    {
        id: 1,
        title: "Buonanotte all'Italia",
        subTitle: "Ligabue",
        imgUrl: liga1
    },
    {
        id: 2,
        title: "Eh gia...",
        subTitle: "Vasco Rossi",
        imgUrl: vasco
    },
    {
        id: 3,
        title: "Urlando contro il Cielo",
        subTitle: "Ligabue",
        imgUrl: liga2
    },
    {
        id: 4,
        title: "Spazio Tempo",
        subTitle: "Francesco Gabbani",
        imgUrl: gabb
    },
    {
        id: 5,
        title: "Gli Anni",
        subTitle: "883",
        imgUrl: s883
    },
    {
        id: 6,
        title: "Napule è...",
        subTitle: "Pino Daniele",
        imgUrl: daniele
    }
];