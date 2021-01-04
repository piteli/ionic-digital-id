import { Component, OnInit } from '@angular/core';
import { ION_HEADER } from 'src/shared/models/header.model';

const ERROR_INVALID_EMAIL = "Use a valid email.";
const ERROR_EMAIL_USED = "Email in use. Use a different email or login in.";
const ERROR_INVALID_PASSWORD = "Use a valid password.";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
}) 
export class LoginPage implements OnInit {

  HEADER = ION_HEADER;
  bar_email = 'ion-input-normal';
  bar_password = 'ion-input-normal';
  error_email : string = "";
  error_password : string = "";
  inputs = {
    email : "",
    password : "",
  }

  constructor() { }

  ngOnInit() {
    this.HEADER['label']['title'] = "Log In";
    this.HEADER['label']['btn'] = "Don't have an account?";
    this.HEADER['label']['btn2'] = "Sign Up";
    this.HEADER['css']['btn2'] = 'signup-btn2';
    this.HEADER['css']['title'] = "header-title-forgot-password";
  }

  onFocusInput(key){
    switch(key){
      case 'EMAIL':
        this.bar_email = 'ion-input-selected';
        this.bar_password = 'ion-input-normal';
        break;
      case 'PASSWORD':
        this.bar_email = 'ion-input-normal';
        this.bar_password = 'ion-input-selected';
        break;
    }
  }

  validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  isEmailRegistered = (email) => {
    //execute API to check the email is registered or not
    //if does, return false, otherwise return true;
    return false;
  }

  checkPassword(password){
    return !!password.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%* #+=\(\)\^?&])[A-Za-z\d$@$!%* #+=\(\)\^?&]{3,}$/);
}

  isPasswordMeetRequirements = (password) => {
    if(password === "") return false;
    if(password.length < 8) return false;
    if(!this.checkPassword(password)) return false;
    return true;
  }

  verifyingInputs = () => {
    const email = this.inputs.email;
    const password = this.inputs.password;
    
    if(email === ""){
      this.error_email = ERROR_INVALID_EMAIL;
      this.bar_email = 'ion-input-warning';
      return false;
    }

    if(!this.validateEmail(email)){
      this.error_email = ERROR_INVALID_EMAIL;
      this.bar_email = 'ion-input-warning';
      return false;
    }

    if(this.isEmailRegistered(email)){
      this.error_email = ERROR_EMAIL_USED;
      this.bar_email = 'ion-input-warning';
      return false;
    }

    if(!this.isPasswordMeetRequirements(password)){
      this.error_password = ERROR_INVALID_PASSWORD;
      this.bar_password = 'ion-input-warning';
      return false;
    }

    return true;
  }

  removeErrorMessageInSeconds = () => {
    setTimeout(() => {
      this.error_email = "";
      this.error_password = "";
      this.bar_email = 'ion-input-normal';
      this.bar_password = 'ion-input-normal';
    }, 2000);
  }

  login(){
    const status = this.verifyingInputs();
    if(!status) this.removeErrorMessageInSeconds(); return;
  }

}
