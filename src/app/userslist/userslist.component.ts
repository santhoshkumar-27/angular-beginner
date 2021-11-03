import { Component } from "@angular/core";

@Component({
    selector: 'app-users-list',
    templateUrl: './userslist.component.html'
})

export class UsersListComponent{
    // testUser = ['John', 'Aravind', 'Yuvaraj']
    users = [
        {
            id: '1',
            fname: 'John',
            age: 22
        },
        {
            id: '2',
            fname: 'Aravind',
            age: 23
        },
        {
            id: '3',
            fname: 'Yuvaraj',
            age: 24
        }
    ]

    removeUser(id: string): void{
        this.users = this.users.filter(users => users.id !== id)
        console.log('removeuser', id)
    }
    setNewUserName(val:any):void{
        console.log(`setNewuser ${val}`)
    }
    addUser():void{
        console.log("add user")
    }
    
}