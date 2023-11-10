import React, {FC} from 'react';
import css from "./LayoutContainer.module.css"

interface LayoutProps {
    children: React.ReactNode
    span?:number;
}

const LayoutContainer: FC<LayoutProps> = ({children, span}) => {
    return (
        <div style={{gridColumn:`span ${span}`}} className={css.container}>
            {children}
        </div>
    );
};

export default LayoutContainer;