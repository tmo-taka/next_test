import React, { useMemo, useState } from "react";
import { useRouter } from 'next/router';

const highCostProcessing = (inputValue: number) => {
    let caliculateValue = Number(inputValue);
    for (let i = 0; i < 1000; i++) {
        caliculateValue += 1;
    }
    console.log("Finished");
    return caliculateValue;
};

export default function Home() {
    const [value, setValue] = useState(0);
    const [count, setCount] = useState(0);
    const path = useRouter();

    // const memorizedValue = (() => {
    //     return highCostProcessing(value);
    // });

    const memorizedValue = useMemo(() => {
        return highCostProcessing(value);
    }, [value]);

    return (
        <>
            <div>{memorizedValue}</div>
            <button onClick={() => setCount(count + 1)}>プラス1</button>
            <div>{path.asPath}</div>
        </>
    )
}
