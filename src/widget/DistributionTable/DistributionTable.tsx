import React, { useEffect, useState} from 'react';
import DistributionTableRow from "./ui/DistributionTableRow/DistributionTableRow";
import css from "./DistributionTable.module.css"
import distributionStore from "../../entity/distribution/store/DistributionStore";
import {observer} from "mobx-react-lite";
import LoadingSpinner from "../../feature/LoadingSpinner/LoadingSpinner";
import InfiniteScroll from 'react-infinite-scroll-component';


const DistributionTable = observer(() => {

    const [sortDirections, setSortDirection] = useState<boolean>(false);
    const {distributions, isLoading, hasMore} = distributionStore
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        distributionStore.getDistributions(pageNumber)
    }, [pageNumber]);

    const fetchMoreData = () => {
        setPageNumber(pageNumber + 1);
    };

    return (
        <div>
            <div className={css.header}>
                <div onClick={() => {
                    distributionStore.sortBy("id", sortDirections)
                    setSortDirection(!sortDirections)
                }}>id
                </div>
                <div onClick={() => {
                    distributionStore.sortByName()
                }}>Full Name
                </div>
                <div onClick={() => {
                    distributionStore.sortByPosition()
                }}>Position
                </div>
                <div onClick={() => {
                    distributionStore.sortByVoc()
                }}>VOC
                </div>
                <div onClick={() => {
                    distributionStore.sortByReleaseYear(sortDirections)
                    setSortDirection(!sortDirections)
                }}>Release Year
                </div>
            </div>
            <InfiniteScroll
                dataLength={distributions.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<LoadingSpinner/>}
            >
                {isLoading ? <LoadingSpinner/> : distributions.map((item, index) => (
                    <DistributionTableRow custom={index % 3 === 2} distribution={item}/>
                ))}
            </InfiniteScroll>
        </div>
    );
});

export default DistributionTable;