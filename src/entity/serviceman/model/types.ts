export type Serviceman = {
    id: number;
    fullName:string;
    rank:Rank;
    birthdayYear:number;
    sex:string;
    specialty:string;
}

export type Rank = {
    id:number;
    militaryRank:string;
}
