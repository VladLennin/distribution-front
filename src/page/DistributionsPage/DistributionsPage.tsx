import React from 'react';
import DistributionBlock from "../../widget/DistributionBlock/DistributionBlock";
import Title from "../../shared/ui/Title/Title";

const DistributionsPage = () => {
    return (
        <>
            <Title value={"General distributions page"}/>
            <DistributionBlock/>
        </>
    );
};

export default DistributionsPage;