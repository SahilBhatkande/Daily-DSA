import React, { useContext } from "react";
import { context } from "./App";

const C = () => {
    const { count1, count2 } = useContext(context);

    return (
        <div>
            <h1>Count 1: {count1}</h1>
            <h1>Count 2: {count2}</h1>
        </div>
    );
};

export default C;
