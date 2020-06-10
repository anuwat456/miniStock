import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {

  constructor(private router: Router) { }

  userData = {
    email: "",
    password: ""
  }

  ngOnInit(): void {
  }

  submit(){
    if (this.userData.email == "anuwat_456@yahoo.com" && this.userData.password == "1234") {
      // alert("Login_Success!!");
      this.router.navigate(["backend"]);
    } else {
      alert("Login_Fail!!");
    }
  }

}
