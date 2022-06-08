import { createContext, useReducer } from 'react';

export default function Context(){

const CounterContext = createContext(0)

const reducerJudge =  (state,action) => {
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
}