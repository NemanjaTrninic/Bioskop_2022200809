import { Injectable } from "@angular/core";
import { using } from "rxjs";
import { User } from "./user.model";

@Injectable({
    providedIn: 'root'
}) // ubacio kao na vezbama

export class UserService{

    static userList: Array<User>=[
        {
        id: 1 ,
        ime: 'neko',
        prezime: 'neko',
        address: 'danijelova',
        contact: '123456',
        email: 'neko@gmail.com',
        password: 'neko'
        }
    ];

    currentUser: User | null = null;

    constructor(){
        this.currentUser = UserService.userList[0];
    }


    getUserName(user: User): string{
        return user.email
    }

    getUserById(id:number): User{
        var foundUser!:User

        UserService.userList.forEach( user =>{
            if(user.id==id){
                foundUser = user
            }
        })
        this.currentUser = foundUser
        return foundUser
    }

    getUser(userEmail: string): User{
        this.currentUser= UserService.userList.find(userToFind => userToFind.email == userEmail)!
        return this.currentUser
    }

    isPasswordCorrect(userEmail:string, password:string): boolean{
        return UserService.userList.find(userToFind=>(
            userToFind.email == userEmail && userToFind.password == password))!=undefined
    }

    registerUser(ime: string, prezime: string, email: string, password: string, address: string, contact: string, dateBirth?: any): User{
        var maxId: number =0
        UserService.userList.forEach(user =>{
            if(maxId<user.id){
                maxId=user.id
            }
        })

        var id = maxId++
        var user: User = {
            id, ime, prezime, email, password, contact, address
        }

        UserService.userList.push(user)
        this.currentUser = user
        console.log(user)
        return user
    }

   

}