import { useReducer , createContext} from 'react';
import reducerJudge from '../modules/counter';

const [number, dispatch] = useReducer(reducerJudge, 0);

export const CounterContext = createContext(number);

// const CounterContextProvider = ({children}) => {

//     const [number, dispatch] = useReducer(reducerJudge, 0);

//     return (
//         <CounterContext.Provider value={number}>
//             {children}
//         </CounterContext.Provider>
//     )
// }

// export default CounterContextProvider;