import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getUserState } from '../selector/selector';
import { AppState } from '../state/app.state';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private store:Store<AppState>)
  {

     this.store.select(getUserState).subscribe(received=>
      { this.myusers = received
      this.users=this.myusers.data;
      console.log(this.users)
        this.hello=this.myusers.state
        // console.log(this.hello)
        if(this.hello)
        {
          this.anydata=this.hello.data
        }
    }
      // {
      //   console.log(received)
      // }
)

    // this.users = this.user[1];
    
    // console.log(this.users);
    // console.log(this.users+"hello");

  }

  myusers:any;

  ngOnInit(): void {
  }

  users:any;

  hello:any;

  anydata:any;

}
