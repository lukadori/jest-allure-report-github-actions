import { useState } from "react";
import { Counter as CounterType } from "./type";

interface CounterProps {
    item: CounterType;
}

const Counter = ({ item }: CounterProps) => {
    const [count, setCount] = useState(item.count);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div className="flex gap-2">
            <button onClick={increment} aria-label="Increment">
                +
            </button>
            <p>{count}</p>
            <button onClick={decrement} aria-label="Decrement">
                -
            </button>
        </div>
    );
};

export default Counter;
