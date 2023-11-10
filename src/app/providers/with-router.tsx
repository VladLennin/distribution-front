import React, {Suspense, useEffect} from "react";
import {BrowserRouter, useLocation} from "react-router-dom";

function ScrollToTop() {
    const {pathname} = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

export const withRouter = (component: () => React.ReactNode) => () => (
    <BrowserRouter>
        <ScrollToTop/>
        <Suspense fallback={<div>Loading...</div>}>
            {component()}
        </Suspense>
    </BrowserRouter>
);