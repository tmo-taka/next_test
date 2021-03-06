import React, { useMemo, useState, useRef,useEffect,useReducer,useContext,createContext } from "react";
import { useRouter } from 'next/router';
import Context from '../../context/counter'
import Apple from '../../components/apple';

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
    const [text, setText] = useState("");
    const path = useRouter();
    const inputEl = useRef(null);

    // const memorizedValue = (() => {
    //     return highCostProcessing(value);
    // });
    const handleClick = () => {
        setText(inputEl.current.value);
        //inputEl.current: <input type="text">
    };

    useEffect(()=>{
        console.log('かちあ');
    },[text])

    const memorizedValue = useMemo(() => {
        return highCostProcessing(value);
    }, [value]);

    return (
        <>
            <div>{memorizedValue}</div>
            <button onClick={() => setCount(count + 1)}>プラス1</button>
            <div>{path.asPath}</div>

            <input ref={inputEl} type="text" />
            <button onClick={handleClick}>入力エリアをフォーカスする</button>
            <Context />
        </>
    )
}
