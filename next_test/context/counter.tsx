import { useReducer , createContext} from 'react';

export const CounterContext = createContext(0);

const CounterContextProvider = ({children}) => {

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
        <CounterContext.Provider value={number}>
            {children}
        </CounterContext.Provider>
    )
}

export default CounterContextProvider;