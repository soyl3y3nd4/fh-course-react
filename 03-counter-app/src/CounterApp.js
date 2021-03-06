import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value = 10 }) => {
    const [counter, setCounter] = useState(value);

    const handleClick = () => {
        setCounter(counter + 1);
        // setCounter( (c) => c + 1)
    };
    const handleReset = () => {
        setCounter(value);
    };
    const handleDecrease = () => {
        setCounter(counter - 1);
    };
    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={handleClick}>+1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleDecrease}>-1</button>
        </>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number,
};

export default CounterApp;
