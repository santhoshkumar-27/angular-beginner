import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // users: { id: string; fname: string; age: string;}[]
  users = [{
    id:'',
    fname:"",
    age:''
  }];

  removeUser(id: string): void{
    this.users = this.users.filter(users => users.id !== id)
    // console.log('removeuser', id)
}
}
