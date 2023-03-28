import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert-comp',
  template: `<p>Hello am warning msg
  </p>`,
  styles:[
    `
    p {
      padding:20px;
      
      border:1px solid red;
      background-color: mistyrose;
    }
    `
  ]
})
export class WarningAlertCompComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
