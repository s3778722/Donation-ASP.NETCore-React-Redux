import { combineReducers } from "redux";
import donationCandidateReducer from "./donationCandidateReducer";


// Created an index file to combine multiple reducers in a large scale project
export const reducers = combineReducers({
    donationCandidateReducer
})