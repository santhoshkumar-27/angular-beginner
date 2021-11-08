import { Component, Input, Output, EventEmitter } from "@angular/core";
// import { EventEmitter } from "stream";

@Component({
    selector: 'app-users-list',
    templateUrl: './userslist.component.html',
    styleUrls: ['./userslist.component.scss'],
})

export class UsersListComponent{
    // testUser = ['John', 'Aravind', 'Yuvaraj']
    newUserName:string = "";
    newUserAge:string = "";
    @Input()users: { id: string; fname: string; age: string; }[] 
    @Output()removeUser = new EventEmitter();
    
    setNewUserName(val:any):void{
        this.newUserName = val.value;
        // console.log(`setNewuser ${val.value}`)
    }
    setNewUserAge(val:any):void{
        this.newUserAge = val.value;
        // console.log(`setNewuser ${val.value}`)
    }
    addUser():void{
        const uniqueId:string = Math.random().toString(15)
        const newUsers = {
            id: uniqueId,
            fname: this.newUserName,
            age:this.newUserAge

        }
        // console.log("add user", newUsers);
        if(this.newUserName !== "" && this.newUserAge !== ""){
            this.users.push(newUsers)
        }
        this.newUserName = "";
        this.newUserAge = "";
    }
    
    
}