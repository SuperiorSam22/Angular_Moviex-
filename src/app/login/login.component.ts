import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = "";
  password = "";
  errorMsg = "";


  constructor(
  
  ) { }

  ngOnInit(): void {
  }

  login(){
    if(this.username.trim().length === 0){
      this.errorMsg = "User name is required";
    }
    else if( this.password.length === 0){
      this.errorMsg = "Password is required";
    }
    else {
      this.errorMsg = "";
    }
  }

}
