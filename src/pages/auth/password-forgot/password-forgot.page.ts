import { Component, OnInit } from '@angular/core';
import { ION_HEADER } from 'src/shared/models/header.model';

const ERROR_INVALID_EMAIL = "Use a valid email.";
const ERROR_EMAIL_USED = "Email in use. Use a different email or login in.";

@Component({
  selector: 'app-password-forgot',
  templateUrl: './password-forgot.page.html',
  styleUrls: ['./password-forgot.page.scss'],
})
export class PasswordForgotPage implements OnInit {

  HEADER = ION_HEADER;
  bar_email = 'ion-input-normal';
  error_email : string = "";
  inputs = {
    email : "",
  }

  constructor() { }

  ngOnInit() {
    this.HEADER['label']['title'] = "Forgot Password";
    this.HEADER['label']['btn2'] = "Back to Log In";
    this.HEADER['css']['btn2'] = 'forgot-password-btn';
    this.HEADER['css']['btn'] = '';
    this.HEADER['css']['title'] = "header-title-forgot-password";
  }

  onFocusInput(key){
    switch(key){
      case 'EMAIL':
        this.bar_email = 'ion-input-selected';
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

    return true;
  }

  removeErrorMessageInSeconds = () => {
    setTimeout(() => {
      this.error_email = "";
      this.bar_email = 'ion-input-normal';
    }, 2000);
  }

  forgotPassword(){
    const status = this.verifyingInputs();
    if(!status) this.removeErrorMessageInSeconds(); return;
  }

}
