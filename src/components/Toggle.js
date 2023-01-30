import React from "react";

function Toggle({ setter, value, trueText, falseText}) {
    return (
        <button
        onClick={() => setter(!value)}>{ value ? trueText : falseText }</button>
    );
};

export default Toggle;