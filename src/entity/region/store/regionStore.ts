import {action, makeAutoObservable, observable} from "mobx";
import $api from "../../../shared/api";
import {Region} from "../../military-base/model/types";

class RegionStore{
    @observable regions: Region[] = []
    @observable isLoading: boolean = true
    constructor() {
        makeAutoObservable(this)
        this.getRegions()
    }

    @action
    getRegions() {
        $api.get<Region[]>("/regions").then(res => {
            this.regions = res.data;
        }).then(() => {
            this.isLoading = false
        }).catch(e => {
            console.log(e)
        })
    }
}

const regionStore = new RegionStore()
export default regionStore
