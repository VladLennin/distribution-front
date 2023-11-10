import React, {FC} from 'react';
import {Distribution} from "../../../../entity/distribution/model/types";
import css from "./DistributionTableRow.module.css"

interface RowProps {
    distribution: Distribution;
    custom: boolean;
}

const DistributionTableRow: FC<RowProps> = ({distribution, custom}) => {
    return (
        <div className={`${css.container} ${custom && css.custom}`}>
            <div>{distribution.id}</div>
            <div> {distribution.serviceMan.fullName}</div>
            <div> {distribution.position.position}</div>
            <div> {distribution.position.voc}</div>
            <div>{distribution.releaseYear.releaseYear}</div>
        </div>
    );
};

export default DistributionTableRow;