import { applyMiddleware, combineReducers, createStore } from "@reduxjs/toolkit";
import { changeCounter } from "./reducer/counter";
import thunk from 'redux-thunk';
import { uploadCards } from "./reducer/cards";



const rootReducer = combineReducers({counter:changeCounter,cards:uploadCards});

export const store = createStore(rootReducer,applyMiddleware(thunk));