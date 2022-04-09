import {createStore} from "redux";
import {Reducer, startState} from "./Reducer";

export const configStore=(store = createStore( Reducer, startState )) => {
    return store;

};