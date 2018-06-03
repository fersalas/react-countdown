import * as React from 'react';

const CountdownUnit = (props) => {
    const {value, label} = props;
    return(
        <div className="countdown__unit">
            <span className="value">{value}</span>
            <span className="label">{label}</span>
        </div>
    );
};

export default CountdownUnit;
