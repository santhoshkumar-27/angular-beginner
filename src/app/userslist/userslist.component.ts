import { Component, Input, Output, EventEmitter } from "@angular/core";
import { UserInterface } from "../type/user.interface";

@Component({
    selector: 'app-users-list',
    templateUrl: './userslist.component.html',
    styleUrls: ['./userslist.component.scss'],
})

export class UsersListComponent{

    @Input()users: UserInterface[] =[];
    @Output()removeUser:EventEmitter<string> = new EventEmitter<string>();
    @Output()addUserEvent:EventEmitter<{fname:string, age:string}> = new EventEmitter<{fname:string, age:string}>();

    newUserName:string = "";
    newUserAge:string = "";
    
    setNewUserName(val:any):void{
        this.newUserName = val.value;
    }
    
    setNewUserAge(val:any):void{
        this.newUserAge = val.value;
    }
    
    addUser():void{
        if(this.newUserName !=="" && this.newUserAge !== ""){
            this.addUserEvent.emit({fname:this.newUserName, age:this.newUserAge})
        }
        this.newUserName = "";
        this.newUserAge = "";
    }   
}