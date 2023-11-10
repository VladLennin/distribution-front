import {action, makeAutoObservable, observable} from "mobx";
import {MilitaryBase} from "../model/types";
import $api from "../../../shared/api";

class MilitaryBaseStore {
    @observable militaryBases: MilitaryBase[] = []
    @observable isLoading: boolean = true;

    constructor() {
        makeAutoObservable(this)
        this.getMilitaryBases()
    }

    @action
    getMilitaryBases() {
        $api.get<MilitaryBase[]>("/military-bases").then(res => {
            this.militaryBases = res.data;
        }).then(() => {
            this.isLoading = false
        }).catch(e => {
            console.log(e)
        })
    }
}

const militaryBaseStore = new MilitaryBaseStore()
export default militaryBaseStore;