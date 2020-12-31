import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userDetails : Object = {
    name : ''
  }

  constructor() { }

  addUserDetailsAll(data){
    this.userDetails = data;
  }

  addUserDetailsBySingle(key, value){
    this.userDetails[key] = value;
  }
}
