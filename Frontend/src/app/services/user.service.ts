import { Injectable } from '@angular/core';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  addUser(user : User)  {
    let users : User[];
    
    if (localStorage.getItem('Users')) {
      users = JSON.parse(localStorage.getItem('Users')!);

      //user will be added at the top of the array, if you
      //want user to be addedd at the end of the array
      //just swap these two parameters

      //users = [user, ...users];
      users = [...users, user];
    }
    else {
      users = [user];
    }
    localStorage.setItem("Users", JSON.stringify(users));
    
  }
}
