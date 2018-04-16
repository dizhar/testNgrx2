import {Action} from '@ngrx/store';
import { ADD, REMOVE } from './list-of-people/actions';




function add(state, action){
      return state.concat([action.payload]); 
}

function remove (state, action){
  
}

export function listReducer(state: String[] = ['daniel'], action: Action){
        switch(action.type){
            case ADD: return add(state, action);
            case REMOVE: return remove(state,action);

            default: return state;
        }

}