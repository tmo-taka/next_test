import { useReducer , createContext} from 'react';
import reducerJudge from '../modules/counter';

export const CounterContext = createContext(0);

const CounterContextProvider = ({children}) => {

    const [number, dispatch] = useReducer(reducerJudge, 0);

    return (
        <CounterContext.Provider value={number}>
            {children}
        </CounterContext.Provider>
    )
}

export default CounterContextProvider;