import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validator, ValidatorFn, Validators } from '@angular/forms';
import { User } from '../../model/User';
import { AlertifyService } from '../../services/alertify.service';
import { UserService } from '../../services/user.service';
/*import * as alertify from 'alertifyjs';*/


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  registrationForm: FormGroup;
  user: User = new User();
  showErrors: boolean = false;

  constructor(private fb: FormBuilder,
    private userService: UserService,
    private alertifyService: AlertifyService) {
  }
  ngOnInit(): void {
    //this.registrationForm = new FormGroup({
    //  userName: new FormControl(null, Validators.required),
    //  email: new FormControl(null, [Validators.required, Validators.email]),
    //  password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    //  mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)]),
    //  cpassword: new FormControl(null, [Validators.required, Validation.match('password', 'cpassword')])
    //  //cpassword: new FormControl(null, [Validators.required])
    //});

    this.createRegistrationForm();
  }

  createRegistrationForm() {
    this.registrationForm = this.fb.group(
      {
        userName: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        password: [null, Validators.required],
        cpassword: [null, Validators.required],
        mobile: [null, Validators.required]

      }, { Validators: this.passwordMatchingValidator }
    );
  }

  passwordMatchingValidator(fg: FormGroup): Validators {
    return fg.get('password')?.value === fg.get('cpassword')?.value ? '' : { notmatched: true };
  }

  get userName() { return this.registrationForm.get('userName') as FormControl; }
  get email() { return this.registrationForm.get('email') as FormControl; }
  get password() { return this.registrationForm.get('password') as FormControl; }
  get mobile() { return this.registrationForm.get('mobile') as FormControl; }
  get cpassword() { return this.registrationForm.get('cpassword') as FormControl; }

  onSubmit() {

    if (!this.registrationForm.valid) {
      this.showErrors = true;
      this.alertifyService.showErrorMessage("Please enter all required fields");
      return;
    }
    this.showErrors = false;

   // this.user = Object.assign(this.user, this.registrationForm.value);
    //this.addUser(this.user);
    this.userService.addUser(this.userData());
    this.registrationForm.reset();
    
    this.alertifyService.showSuccessMessage("User registered successfully")

  }

  userData(): User {

    
    this.user.userName = this.userName.value;
    this.user.email = this.email.value;
    this.user.password = this.password.value;
    this.user.mobile = this.mobile.value;

    
    return this.user;
  }


}


//export default class Validation {
//  static match(controlName: string, checkControlName: string): ValidatorFn {
//    debugger
//    return (controls: AbstractControl) => {
//      const control = controls.get(controlName);
//      const checkControl = controls.get(checkControlName);

//      if (checkControl?.errors && !checkControl.errors['matching']) {
//        return null;
//      }

//      if (control?.value !== checkControl?.value) {
//        controls.get(checkControlName)?.setErrors({ matching: true });
//        return { matching: true };
//      } else {
//        return null;
//      }
//    };
//  }
//}
