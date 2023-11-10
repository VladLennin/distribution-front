import {action, makeAutoObservable, observable} from "mobx";
import {Position} from "../model/types";
import $api from "../../../shared/api";
import {MilitaryBase} from "../../military-base/model/types";

class PositionStore {
    @observable positions: Position[] = []
    @observable topPositions: Position[] = []
    @observable isLoading: boolean = true;

    constructor() {
        makeAutoObservable(this)
        this.getPositions()
    }

    @action
    getPositions() {
        $api.get<Position[]>("/positions").then(res => {
            this.positions = res.data;
        }).then(() => {
            this.isLoading = false
        }).catch(e => {
            console.log(e)
        })
    }

    @action
    getTopPositions() {
        this.isLoading = true
        $api.get<Position[]>("/positions/top").then(res => {
            console.log(res.data)
            this.topPositions = res.data;
        }).then(() => {
            this.isLoading = false
        }).catch(e => {
            console.log(e)
        })
    }
}

const positionStore = new PositionStore()
export default positionStore;