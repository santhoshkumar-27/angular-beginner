import { Component } from '@angular/core';
import { UserInterface } from './type/user.interface';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    
  users:UserInterface[] = [];
  constructor(private usersService: UsersService){}
  ngOnInit():void{   
    this.usersService.getUsers().subscribe(
      (users: UserInterface[]): void=> {
        this.users= users;
      } 
    )
  }
  removeUser(id: string): void{
    this.usersService.removeUser(id).subscribe(()=>{
      this.users = this.users.filter(users => users.id !== id)
    })
    
  }

  addUser({ fname, age }: { fname: string; age: string; }):void{
    this.usersService.addUser(fname, age).subscribe((newUsers)=>{
      this.users.push(newUsers)
    })   
  }
}
