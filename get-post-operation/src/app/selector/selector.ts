
import { createFeatureSelector,createSelector } from '@ngrx/store';
import { User } from '../model/model';

export const SelectUserFeature = createFeatureSelector<User>('users');

export const getUserState = createSelector(

    SelectUserFeature,(data)=>{

        return data;

    }

);