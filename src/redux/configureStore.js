//import { combine } from "./reducer";
import { createStore , combineReducers, applyMiddleware } from 'redux';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
export const configStore = () =>
{
    const store = createStore(
        combineReducers({
            dishes : Dishes,
            comments : Comments,
            promotions : Promotions,
            leaders : Leaders
        }),
        applyMiddleware(thunk,logger)
    );
    return store;
}