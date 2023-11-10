import React from 'react';
import css from "./DistributionsTablePage.module.css"
import {observer} from "mobx-react-lite";
import DistributionTable from "../../widget/DistributionTable/DistributionTable";
import Title from "../../shared/ui/Title/Title";

const DistributionsTablePage = observer(() => {

    // const {id}

    return (
        <div className={css.container}>
            <Title value={"General distributions table"}/>
            <DistributionTable/>
        </div>
    );
});

export default DistributionsTablePage;