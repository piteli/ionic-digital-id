import { Component, OnInit } from '@angular/core';
import { ION_HEADER } from 'src/shared/models/header.model';
import { Platform } from '@ionic/angular';

const ERROR_CANNOT_EMPTY_EMAIL = 'Email cannot be empty.';
const ERROR_CANNOT_EMPTY_PASSWORD = 'Password cannot be empty';
const ERROR_INVALID_EMAIL = "Use a valid email.";
const ERROR_EMAIL_USED = "Email in use. Use a different email or login in.";
const ERROR_INVALID_PASSWORD = "Use a valid password.";
const ERROR_UNCHECKED_AGREEMENT = "Required";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  HEADER = ION_HEADER;
  bar_fullname = 'ion-input-normal';
  bar_email = 'ion-input-normal';
  bar_password = 'ion-input-normal';
  error_email : string = "";
  error_password : string = "";
  error_agreement : string = "";
  inputs = {
    fullname : "",
    email : "",
    password : "",
    agreement : false
  }

  constructor(private platform : Platform) {
   }

  ngOnInit() {
    this.HEADER['label']['title'] = "Sign Up";
    this.HEADER['label']['btn'] = "Already have an account?";
    this.HEADER['label']['btn2'] = "Log In";
    this.HEADER['css']['btn2'] = 'signup-btn2';
  }

  checkboxChanged(event){
    this.inputs['agreement'] = event.target.checked;
  }

  onFocusInput(key){
    switch(key){
      case 'FULLNAME':
        this.bar_fullname = 'ion-input-selected';
        this.bar_email = 'ion-input-normal';
        this.bar_password = 'ion-input-normal';
        break;
      case 'EMAIL':
        this.bar_fullname = 'ion-input-normal';
        this.bar_email = 'ion-input-selected';
        this.bar_password = 'ion-input-normal';
        break;
      case 'PASSWORD':
        this.bar_fullname = 'ion-input-normal';
        this.bar_email = 'ion-input-normal';
        this.bar_password = 'ion-input-selected';
        break;
    }
  }

  onBlurInput(key){
    this.bar_fullname = 'ion-input-normal';
    this.bar_email = 'ion-input-normal';
    this.bar_password = 'ion-input-normal';
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
    const agreement_checked = this.inputs.agreement;
    
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

    if(agreement_checked == false){
      this.error_agreement = ERROR_UNCHECKED_AGREEMENT;
      return false;
    }
    return true;
  }

  removeErrorMessageInSeconds = () => {
    setTimeout(() => {
      this.error_email = "";
      this.error_password = "";
      this.error_agreement = "";
      this.bar_email = 'ion-input-normal';
      this.bar_password = 'ion-input-normal';
    }, 2000);
  }

  signUp = () => {
    const status = this.verifyingInputs();
    if(!status) this.removeErrorMessageInSeconds(); return;
  }
  

}
