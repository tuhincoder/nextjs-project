"use client";
import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={() => setCount(count + 1)} className="btn btn-primary">Increase</button>
            <button onClick={() => setCount(count - 1)} className="btn text-red-500 ml-4">Decrease</button>
        </div>
    );
};

export default Counter;