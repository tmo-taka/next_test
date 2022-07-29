type Action = 'add' | 'minus' | 'twice'

const initialState:number = 0

const reducerJudge =  (state:number = initialState ,action: Action):number => {
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

export default reducerJudge