import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router : Router ) { }
  userEmail = ""

  ngOnInit(): void {
    let userID = sessionStorage.getItem("user_id")
    this.userEmail = userID !== null ? userID : " ";
  }


  logoutUser(){
    console.log("logout")
    sessionStorage.removeItem("user_id");
    this.router.navigateByUrl('/login')
  }

}
