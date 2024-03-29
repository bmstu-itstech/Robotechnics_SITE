import React from 'react';
import './circle.scss';

const Circle = ({ title = "" }) => {
    return (
        <div className="circle-row">
            <div className="ico-circle"></div>
            <p className="title-text text-uppercase">{title}</p>
        </div>
    );
};

export default Circle;
