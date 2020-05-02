import { createAction, props } from '@ngrx/store';

export const INCREMENTAR = '[CONTADOR] Incrementar';
export const DECREMENTAR = '[CONTADOR] Decrementar';
export const MULTIPLICAR = '[CONTADOR] Multiplicar';
export const DIVIDR = '[CONTADOR] Dividir';
export const RESET = '[CONTADOR] Reset';


export const incrementar = createAction(INCREMENTAR);

// export class IncrementarAction implements Action {
//     readonly type = INCREMENTAR;
// }

export const decrementar = createAction(DECREMENTAR);

// export class DecrementarAction implements Action {
//     readonly type = DECREMENTAR;
// }

export const multiplicar = createAction(
  MULTIPLICAR,
  props<{numero: number}>()
);

// export class MultiplicarAction implements Action {
//     readonly type = MULTIPLICAR;

//     constructor(public payload: number) {}
// }

export const dividir = createAction(
  DIVIDR,
  props<{numero: number}>()
);

// export class DividirAction implements Action {
//     readonly type = DIVIDR;
//     constructor(public payload: number) {}
// }

export const reset = createAction(RESET);

// export class ResetAction implements Action {
//     readonly type = RESET;
// }

// export type actions =   IncrementarAction |
//                         DecrementarAction |
//                         MultiplicarAction |
//                         DividirAction |
//                         ResetAction;

