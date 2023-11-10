import React, {FC} from 'react';
import css from "./Title.module.css"

interface TitleProps {
    value: string;
}

const Title: FC<TitleProps> = ({value}) => {
    return (
        <div className={css.title}>
            <span className={css.arrow}>&lt;</span>{value}<span className={css.arrow}>&gt;</span>
        </div>
    );
};

export default Title;