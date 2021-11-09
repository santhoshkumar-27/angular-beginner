import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UserInterface } from './type/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    
  users:UserInterface[] = [];
  constructor(private http: HttpClient){}
  ngOnInit():void{
    // console.log("ngOnInit")
    this.http.get('http://localhost:3000/users').subscribe(
      (users: any)=> {
        console.log(users)
        this.users= users;
      } 
    )
    
  }
  removeUser(id: string): void{
    this.users = this.users.filter(users => users.id !== id)
  }

  addUser({ fname, age }: { fname: string; age: string; }):void{
    const uniqueId:string = Math.random().toString(15)
    const newUsers:UserInterface = {
        id: uniqueId,
        fname:fname,
        age: age
    }
    this.users.push(newUsers)
  }
}
