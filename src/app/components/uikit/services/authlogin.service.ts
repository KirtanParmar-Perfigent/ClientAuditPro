import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthloginService {

  loggedIn : boolean = false;

  login(username : string, password: string)
  {
    if(username == "kirtan@gmail.com" && password == "0107")
    {
      this.loggedIn = true;
      return true;
    }
    return false;
  }

  logout()
  {
    return this.loggedIn = false;
  }
}
