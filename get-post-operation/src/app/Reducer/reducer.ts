
import * as TotalActions from '../Action/action';

export const initialState = 
{

data : null

}

export function Reducer(state = initialState, action:TotalActions.Actions)
{

switch(action.type)
{

case TotalActions.LOAD_USER:
    return state;

case TotalActions.LOAD_USER_SUCCESS:
    // console.log(...state,action.payload)
    // initialState.data=action.payload
    return {...state,data:action.payload};

case TotalActions.ADD_USER:
    return state;
    
case TotalActions.ADD_USER_SUCCESS:
    return {state,data:action.payload};
    
default:
    return state;    

}

}