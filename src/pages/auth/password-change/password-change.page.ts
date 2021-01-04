import { Component, OnInit } from '@angular/core';
import { ION_HEADER } from 'src/shared/models/header.model';

const ERROR_INVALID_PASSWORD = "Use a valid password.";
const ERROR_PASSWORD_API_NOT_CORRECT = "Incorrect password.";

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.page.html',
  styleUrls: ['./password-change.page.scss'],
})
export class PasswordChangePage implements OnInit {

  HEADER = ION_HEADER;
  bar_current_password = 'ion-input-normal';
  bar_new_password = 'ion-input-normal';
  error_current_password : string = "";
  error_new_password : string = "";
  inputs = {
    current_password : "",
    new_password : "",
  }

  constructor() { }

  ngOnInit() {
    this.HEADER['label']['title'] = "Change Password";
    this.HEADER['css']['btn'] = "";
    this.HEADER['label']['btn2'] = "Back to Your Account";
    this.HEADER['css']['btn2'] = 'forgot-password-btn';
    this.HEADER['css']['title'] = "header-title-forgot-password2";
  }

  onFocusInput(key){
    switch(key){
      case 'CURRENT_PASSWORD':
        this.bar_current_password = 'ion-input-selected';
        this.bar_new_password = 'ion-input-normal';
        break;
      case 'NEW_PASSWORD':
        this.bar_current_password = 'ion-input-normal';
        this.bar_new_password = 'ion-input-selected';
        break;
    }
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
    const current_password = this.inputs.current_password;
    const new_password = this.inputs.new_password;

    //call api to check current password.
    // const response = await fetch(...);
    // const json = await response.json();
    const json = {status : true};
    if(!json.status){
      this.error_current_password = ERROR_PASSWORD_API_NOT_CORRECT;
      this.bar_current_password = 'ion-input-warning';
      return false;
    }

    if(!this.isPasswordMeetRequirements(new_password)){
      this.error_current_password = ERROR_INVALID_PASSWORD;
      this.bar_current_password = 'ion-input-warning';
      return false;
    }

    return true;
  }

  removeErrorMessageInSeconds = () => {
    setTimeout(() => {
      this.error_current_password = "";
      this.error_new_password = "";
      this.bar_current_password = 'ion-input-normal';
      this.bar_new_password = 'ion-input-normal';
    }, 2000);
  }

  changePassword(){
    const status = this.verifyingInputs();
    if(!status) this.removeErrorMessageInSeconds(); return;
  }

}
