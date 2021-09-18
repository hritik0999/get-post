import { Action } from '@ngrx/store';
import { User } from '../model/model';

//LOAD USERS
export const LOAD_USER ='LOAD_USER';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';

//ADD USERS
export const ADD_USER = 'ADD_USER';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const ADD_USER_FAILURE = 'ADD_USER_FAILURE';

export class LoadUserAction implements Action
{

readonly type = LOAD_USER;


}

export class LoadUserSuccess implements Action
{

readonly type = LOAD_USER_SUCCESS;

constructor(public payload :User){}


}

export class LoadUserFailure implements Action
{

readonly type = LOAD_USER_FAILURE;

// constructor(public payload : User){}


}

export class AddUserAction implements Action
{

readonly type = ADD_USER;
constructor(public payload:any){}


}

export class AddUserSuccess implements Action
{

readonly type = ADD_USER_SUCCESS;
constructor(public payload:any){}


}

export class AddUserFailure implements Action
{

readonly type = ADD_USER_FAILURE;

// constructor(public payload : User){}


}


export type Actions = LoadUserAction | LoadUserSuccess | LoadUserFailure | AddUserAction |AddUserSuccess |AddUserFailure ;