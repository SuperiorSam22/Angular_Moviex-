import { Injectable } from '@angular/core';
import { Route } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    
  ) { }

  login(uname: string, pword: string){
    if(uname === 'sam' && pword === '123'){
      return 200;
    }
    else{
      return 403;
    }
  }
}
