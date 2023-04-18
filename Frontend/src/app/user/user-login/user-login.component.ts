import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from '../../services/alertify.service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  showErrors: boolean = false;

  constructor(private alertify: AlertifyService,
              private authService: AuthenticationService,
              private router: Router
  )
  {

  }

  onLogin(form: NgForm)
  {
    if (!form.valid)
    {
      this.showErrors = true;
      return;
    }

    this.showErrors = false;

    const token = this.authService.authUser(form.value);

    if (token) {
      localStorage.setItem("token", token.userName)
      this.alertify.showSuccessMessage("User authenticated");
      this.router.navigate(["/"]);
    }
    else {
      this.alertify.showErrorMessage("User not found");
    }
  }

}
