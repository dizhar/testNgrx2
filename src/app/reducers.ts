import { counterReducer } from './counter/counter';
import { listReducer } from './counter/list';
import { routerReducer } from '@ngrx/router-store';

export const reducersx =  {
    count: counterReducer, 
    names: listReducer,
    router: routerReducer
}