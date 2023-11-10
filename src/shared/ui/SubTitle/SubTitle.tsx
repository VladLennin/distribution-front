import React, {FC} from 'react';
import css from "./SubTitle.module.css"

interface TitleProps {
    value: string;
}

const SubTitle: FC<TitleProps> = ({value}) => {
    return (
        <div className={css.title}>
            {value}
        </div>
    );
};

export default SubTitle;