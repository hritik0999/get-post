import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})

export class AppService
{

constructor(private http:HttpClient){}

getDataFromServer()
{

return this.http.get("https://jsonplaceholder.typicode.com/posts");

}

addDataToServer(data)
{

return this.http.post("https://jsonplaceholder.typicode.com/posts",data);

}

}