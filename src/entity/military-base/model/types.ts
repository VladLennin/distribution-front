export type MilitaryBase ={
    id:number;
    name:string;
    region:Region;
}

export type Region = {
    id:number;
    city_type: string;
    city_name:string;
    name:string;
}