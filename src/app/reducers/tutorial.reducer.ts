import { Action } from "@ngrx/store"
import { AddTutorialAction } from "../actions/tutorial.action"
import { Tutorial } from "../tutorial.model"
import * as TutorialActions from '../actions/tutorial.action'
import { AppState } from "./app.state"

export const intialState : Tutorial = {
    name: 'Udemy',
    url: 'https://www.udemy.com'
}

export function tutorialReducer(state: Tutorial[] = [intialState], action: TutorialActions.Actions): Tutorial[] {

    switch(action.type) {
        case TutorialActions.ADD_TUTORIAL:
            return [...state, action.payload];
    

        case TutorialActions.REMOVE_TUTORIAL:
            const index= +action.payload;
                    
            return [...state.slice(0, index), ...state.slice(index + 1)];
        default:
            return state;
    }

} 