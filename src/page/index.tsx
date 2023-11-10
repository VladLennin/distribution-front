import React from 'react';
import {Route, Routes} from "react-router-dom";
import {RouterNames} from "../shared/enum/RouterNames";
import MainPage from "./MainPage/MainPage";
import DistributionsPage from "./DistributionsPage/DistributionsPage";
import DistributionsTablePage from "./DistributionsTablePage/DistributionsTablePage";
import DistributionsDiagramsPage from "./DistributionsDiagramsPage/DistributionsDiagramsPage";

const Routing = () => {
    return (
        <Routes>
            <Route path={RouterNames.HOME} element={<MainPage/>}/>
            <Route path={RouterNames.DISTRIBUTIONS} element={<DistributionsPage/>}/>
            <Route path={RouterNames.DISTRIBUTIONS_TABLE} element={<DistributionsTablePage/>}/>
            <Route path={RouterNames.DISTRIBUTIONS_DIAGRAM} element={<DistributionsDiagramsPage/>}/>
        </Routes>
    );
};

export default Routing;