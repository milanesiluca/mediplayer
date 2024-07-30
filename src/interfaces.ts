export interface ISongList {
    list : IRowData[];
}

export interface IRowData {
    id: number;
    title: string;
    subTitle: string;
    imgUrl: string;
}