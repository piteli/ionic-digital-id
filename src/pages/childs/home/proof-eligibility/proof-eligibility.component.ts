import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proof-eligibility',
  templateUrl: './proof-eligibility.component.html',
  styleUrls: ['./proof-eligibility.component.scss'],
})
export class ProofEligibilityComponent implements OnInit {

  input: any = {
    first_name : "",
    last_name : "",
    nationality : "",
    ic_type : "",
    gender : ""
  }

  constructor() { }

  ngOnInit() {}

  submit(){

  }

}
