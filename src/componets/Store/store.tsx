import { createStore, combineReducers,compose, applyMiddleware } from "redux";
import thunkMidlleWare from "redux-thunk";
import orderReducer from "./redusers/orederReducer";




let rootReducers = combineReducers({
    order:orderReducer,
});


type RootReducerType = typeof rootReducers;

export type AppStateType = ReturnType<RootReducerType>


//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducers,composeEnhancers(applyMiddleware(thunkMidlleWare)))


export default store