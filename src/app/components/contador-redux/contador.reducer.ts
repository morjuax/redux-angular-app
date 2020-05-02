
import { createReducer, on } from '@ngrx/store';
import * as actions from './contador.actions';

// export const contadorReducer = (state: number = 10, action: Action) => {
//     switch (action.type) {
//         case actions.incrementar.type:
//             return state + 1;
//         case actions.decrementar.type:
//             return state - 1;
//         // case fromContador.MULTIPLICAR:
//         //     return state * action.payload;
//         // case fromContador.DIVIDR:
//         //     return state / action.payload;
//         case actions.reset.type:
//             return 0;
//         default:
//             return state;
//     }
// };

// Update v2
export const initialState = 20;

const _contadorReducer = createReducer(initialState,
    on(actions.incrementar, state => state + 1),
    on(actions.decrementar, state => state - 1),
    on(actions.multiplicar, (state, {numero}) => state * numero),
    on(actions.dividir, (state, {numero}) => state / numero),
    on(actions.reset, state => initialState)
);

export const contadorReducer = (state, action) => {
    return _contadorReducer(state, action);
};
