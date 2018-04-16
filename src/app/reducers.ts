import { counterReducer } from './counter/counter';
import { listReducer } from './counter/list';

export const reducers =  {
    count: counterReducer, 
    names: listReducer
}