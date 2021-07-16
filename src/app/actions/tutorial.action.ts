import { Injectable } from '@angular/core'
import { Action } from "@ngrx/store";
import { Tutorial } from "../tutorial.model";

export const ADD_TUTORIAL: string = 'ADD_TUTORIAL';
export const REMOVE_TUTORIAL: string = 'REMOVE_TUTORIAL';

export class AddTutorialAction implements Action {
    readonly type = ADD_TUTORIAL;

    constructor(public payload: Tutorial) {}
}

export class RemoveTutorialAction implements Action {
    readonly type = REMOVE_TUTORIAL;

    constructor(public payload: number) {}

}

export type Actions = AddTutorialAction;