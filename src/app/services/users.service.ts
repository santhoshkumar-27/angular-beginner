import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserInterface } from "../type/user.interface";
import { map } from "rxjs/operators";

@Injectable() 
export class UsersService{
    constructor(private http: HttpClient){}
    //pipe(fn1, fn2, fn3)
    getUsers(): Observable<UserInterface[]>{
        return this.http.get<UserInterface[]>("http://localhost:3000/users").pipe(
            map((users: UserInterface[])=>{
                return users.map(user =>({
                    id: user.id,
                    fname: user.fname,
                    age: user.age
                }))
            })
        )
    }
    removeUser(id: string):Observable<{}>{
        return this.http.delete(`http://localhost:3000/users/${id}`)
    }
    addUser(name:string, age:string):Observable<UserInterface>{
        const users:object = {
            fname:name,
            age: age,
        }
        return this.http.post<UserInterface>("http://localhost:3000/users", users)
    }
}