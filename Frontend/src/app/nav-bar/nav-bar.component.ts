import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private alertify: AlertifyService,
    private router: Router) { }
    
  loggedInUser: string;

    ngOnInit(): void {
       
    }

  loggedIn()
  {
    this.loggedInUser = localStorage.getItem("token");
    return this.loggedInUser;
  }

  onLogout()
  {
    localStorage.removeItem("token");
    this.alertify.showSuccessMessage("You are logged out");
    this.router.navigate(['/']);
  }

}
