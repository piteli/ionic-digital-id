import { Component, OnInit } from '@angular/core';
import { ION_HEADER } from 'src/shared/models/header.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  HEADER = ION_HEADER;

  constructor() { }

  ngOnInit() {
    this.HEADER['label']['title'] = "Sign Up";
    this.HEADER['label']['btn'] = "Already have an account?";
    this.HEADER['label']['btn2'] = "Log In";
    this.HEADER['css']['btn2'] = 'signup-btn2';
  }

}
