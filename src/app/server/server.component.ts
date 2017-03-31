import { Component } from '@angular/core';

@Component({
  selector: '[app-server]',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})

export class ServerComponent {

  // Ejemplo string
  title = 'ServerComponent export';

  allowNewServerBtn = false;
  serverData = 'No Data';

  // constructor ??
  constructor() {
    setTimeout(() => {
      this.allowNewServerBtn = true;
    }, 2000);
  }

  onLoadServerData() {
    this.serverData = 'Si Data ' + this.allowNewServerBtn;
  }

  // onUpdatedInput(event: Event) {
  //   this.serverData = (<HTMLInputElement>event.target).value;
  // }

}
