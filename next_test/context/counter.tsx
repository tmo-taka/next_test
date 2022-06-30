import { createContext, useReducer } from 'react';

export default function Context(){

    const CounterContext = createContext(0)

    type Action = 'add' | 'minus' | 'twice'

    const reducerJudge =  (state:number ,action: Action) => {
        switch (action) {
            case 'add':
                return state + 1;
            case 'minus':
                return state - 1;
            case 'twice':
                return state * 2;
            default:
                return state;
        }
    }

    const [number, dispatch] = useReducer(reducerJudge, 0);

    return (
        <CounterContext.Provider value={CounterContext}>_
            <div>カウンターの値：{number}</div>
            <button onClick={() => dispatch('add')}>増やす</button>
            <button onClick={() => dispatch('minus')}>減らす</button>
            <button onClick={() => dispatch('twice')}>二倍</button>
        </CounterContext.Provider>
    )
}