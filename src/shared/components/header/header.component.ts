import { Component, OnInit, Input } from '@angular/core';
import { ION_HEADER } from 'src/shared/models/header.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() header = ION_HEADER;

  constructor() {}

  ngOnInit() {}

}
