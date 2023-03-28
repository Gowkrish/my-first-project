import { Component, OnInit } from '@angular/core';
import { ServerComponent } from '../server/server.component';

@Component({
  selector: 'app-server-two',
  templateUrl: './server-two.component.html',
  styleUrls: ['./server-two.component.scss']
})

export class ServerTwoComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server created';
  serverName = '';
  
  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
     },2000)
   }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'server ' + this.serverName+  ' created';
  }

  onUpdateServerName(event: Event) {
   // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
 
  

}
