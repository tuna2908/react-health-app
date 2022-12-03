
import React from 'react';
import '../styles/common.css';

export const DetailButton = (props) => {
    const { displayText, className, onClick } = props;

    const defClassName = className || 'detail-button' ;
    const defOnclick = onClick || (() => { });

    return (
        <button className={defClassName} onClick={defOnclick}>{displayText}</button>
    )
}
