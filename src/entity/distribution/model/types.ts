import {Serviceman} from "../../serviceman/model/types";
import {Position} from "../../position/model/types";
import {MilitaryBase} from "../../military-base/model/types";
import {ReleaseYear} from "../../release-year/model/types";

export type Distribution = {
    id:number;
    serviceMan:Serviceman;
    position:Position;
    releaseYear:ReleaseYear;
    militaryBase:MilitaryBase;
}

