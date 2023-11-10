import {action, makeAutoObservable, observable} from "mobx";
import {Distribution} from "../model/types";
import $api from "../../../shared/api";


class DistributionStore {
    @observable distributions: Distribution[] = [];
    @observable isLoading: boolean = true;
    @observable hasMore: boolean = true;

    constructor() {
        makeAutoObservable(this)
        this.getDistributions(1)
    }

    @action
    getDistributions(page: number) {
        $api.get("/distributions", {
            params: {
                page: page,
                limit: 10
            }
        }).then(res => {
            if (res.data.items.length === 0) {
                this.hasMore = false
            }
            this.distributions = [...this.distributions, ...res.data.items];
        }).then(() => {
            this.isLoading = false
        }).catch(e => {
            console.log(e)
        })
    }

    @action
    getDistributionsAll() {
        $api.get("/distributions/all").then(res => {
            this.distributions = res.data;
        }).then(() => {
            this.isLoading = false
        }).catch(e => {
            console.log(e)
        })
    }


    @action
    sortBy(key: any, sortingDirection: boolean) {
        const sorted = [...this.distributions];

        if (sortingDirection) {
            sorted.sort((x1, x2) => {
                // @ts-ignore
                if (x1[key] < x2[key]) {
                    return -1;
                }
                // @ts-ignore
                if (x1[key] > x2[key]) {
                    return 1;
                }
                return 0;
            });
        } else {
            sorted.sort((x1, x2) => {
                // @ts-ignore
                if (x1[key] > x2[key]) {
                    return -1;
                }
                // @ts-ignore
                if (x1[key] < x2[key]) {
                    return 1;
                }
                return 0;
            });
        }
        this.distributions = sorted;
    };

    @action
    sortByName() {
        const sorted = [...this.distributions];
        sorted.sort((x1, x2) => {
            if (x1.serviceMan.fullName.localeCompare(x2.serviceMan.fullName)) {
                return -1;
            }
            if (x2.serviceMan.fullName.localeCompare(x1.serviceMan.fullName)) {
                return 1;
            }
            return 0;
        });
        this.distributions = sorted;
    }

    @action
    sortByPosition() {
        const sorted = [...this.distributions];
        sorted.sort((x1, x2) => {
            if (x1.position.position.localeCompare(x2.position.position)) {
                return -1;
            }
            if (x2.position.position.localeCompare(x1.position.position)) {
                return 1;
            }
            return 0;
        });
        this.distributions = sorted;
    }

    @action
    sortByVoc() {
        const sorted = [...this.distributions];
        sorted.sort((x1, x2) => {
            if (x1.position.voc.localeCompare(x2.position.voc)) {
                return -1;
            }
            if (x2.position.voc.localeCompare(x1.position.voc)) {
                return 1;
            }
            return 0;
        });
        this.distributions = sorted;
    }

    @action
    sortByReleaseYear(sortingDirection: boolean) {
        const sorted = [...this.distributions];
        sorted.sort((x1, x2) => {
            if (!sortingDirection) {
                if (x1.releaseYear.releaseYear > x2.releaseYear.releaseYear) {
                    return -1;
                }
                if (x1.releaseYear.releaseYear < x2.releaseYear.releaseYear) {
                    return 1;
                }
                return 0;
            } else {
                if (x1.releaseYear.releaseYear < x2.releaseYear.releaseYear) {
                    return -1;
                }
                if (x1.releaseYear.releaseYear > x2.releaseYear.releaseYear) {
                    return 1;
                }
                return 0;
            }
        });
        this.distributions = sorted;
    }
}

const distributionStore = new DistributionStore()
export default distributionStore;