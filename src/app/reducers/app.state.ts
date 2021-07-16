import { ActionReducerMap } from "@ngrx/store";
import { Tutorial } from "../tutorial.model";
import * as Reducers from './tutorial.reducer';
import { tutorialReducer } from "./tutorial.reducer";

export interface AppState {
    tutorial: Tutorial[]
}

export const tutorialActionReducer: ActionReducerMap<AppState, any> = {
    tutorial: tutorialReducer
}