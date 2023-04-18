import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authUser(user: any)
  {
    let users = [];

    if (localStorage.getItem("Users"))
    {
      users = JSON.parse(localStorage.getItem("Users"));
    }

    return users.find(u => u.userName === user.userName && u.password === user.password);
  }
}
