import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { AppService } from '../service/app.service';
import { LOAD_USER,ADD_USER } from '../Action/action';
 
@Injectable()
export class UserEffects {
 
  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(LOAD_USER),
    mergeMap(() => this.userService.getDataFromServer()
      .pipe(
        map(data => ({ type: 'LOAD_USER_SUCCESS', payload: data })),
        catchError(() => EMPTY)
      ))
    )
  );

  addUsers$ = createEffect(() => this.actions$.pipe(
    ofType(ADD_USER),
    mergeMap((mydata) => this.userService.addDataToServer(mydata)
      .pipe(
        map(data => ({ type: 'ADD_USER_SUCCESS', payload: data })),
        catchError(() => EMPTY)
      ))
    )
  );
 
  constructor(
    private actions$: Actions,
    private userService: AppService
  ) {}  
}