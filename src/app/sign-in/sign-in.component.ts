import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  regForm : Boolean = false;
  signInFormValue: any = {};


  constructor(private formBuilder: FormBuilder, private router: Router) { } //, private logsign_service: LoginSignupService
  adminEmail: string = ""
  ngOnInit(): void {
    this.adminEmail = sessionStorage.getItem("user_id")+"";
    this.regForm =  this.adminEmail != "null" ? true : false;
  }

  user_data : any;
  onSubmitSignIn() {
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.signInFormValue));
    sessionStorage.setItem("user_id", this.signInFormValue.userEmail);
    this.regForm = true

    this.router.navigate(['/admin']);
  }

}
