import React from 'react';
import {HashLoader} from "react-spinners";
import css from "./LoadingSpinner.module.css"
const LoadingSpinner = () => {
    return (
        <div className={css.container}>
            <HashLoader/>
        </div>
    );
};

export default LoadingSpinner;