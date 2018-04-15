// counter.ts
import { Action } from '@ngrx/store';



export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';


function add(state, action){
   return  state +1;
}


function subtract(state, action){
   return state -1;
}


function reset(state, action){
    return 0;
}


export function counterReducer(state: number = 0, action: Action) {
  switch (action.type) {
    case INCREMENT:
      return add(state, action);

    case DECREMENT:
      return subtract(state, action);

    case RESET:
      return reset(state, action);

    default:
      return state;
  }
}