import { Component, OnInit } from '@angular/core';
import { AddUserAction } from '../Action/action';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private store:Store) { }

  ngOnInit(): void {
  }

  getDataForAdd(data)
  {

    // console.log(data);

    this.store.dispatch(new AddUserAction(data))
    

  }

}
