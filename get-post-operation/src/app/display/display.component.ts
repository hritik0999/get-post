import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadUserAction } from '../Action/action';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private store:Store) 
  { 

    this.store.dispatch(new LoadUserAction);

  }

  ngOnInit(): void {
  }

}
