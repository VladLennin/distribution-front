import {action, makeAutoObservable, observable} from "mobx";
import $api from "../../../shared/api";
import {ReleaseYear} from "../model/types";

class ReleaseYearStore {
    @observable releaseYears: ReleaseYear[] = [];
    @observable isLoading: boolean = true

    constructor() {
        makeAutoObservable(this)
        this.getReleaseYears()
    }

    @action
    getReleaseYears() {
        $api.get<ReleaseYear[]>("/release-years").then(res => {
            this.releaseYears = res.data;
        }).then(() => {
            this.isLoading = false
        }).catch(e => {
            console.log(e)
        })
    }
}

const releaseYear = new ReleaseYearStore()
export default releaseYear