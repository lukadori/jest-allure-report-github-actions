import { useEffect, useState } from "react";
import Counter from "./Counter";
import { Counter as CounterType } from "./type";

const CounterList = () => {
    const [items, setItems] = useState<CounterType[]>([]);

    useEffect(() => {
        fetch("/api/items")
            .then((res) => res.json())
            .then((data) => setItems(data));
    }, []);

    return (
        <div>
            <h1>Counter List</h1>
            {items.map((item) => (
                <Counter key={item.id} item={item} />
            ))}
        </div>
    );
};

export default CounterList;
