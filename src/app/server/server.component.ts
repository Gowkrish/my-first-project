import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  serverId: number = 5;
  serverStatus: string = "offline";
  

  getServerstatus(){
    return this.serverStatus;

  }
  constructor() {   
   }

  ngOnInit(): void {
    
  }

 

}
