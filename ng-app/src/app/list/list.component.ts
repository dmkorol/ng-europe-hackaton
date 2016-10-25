import { Component, OnInit, OnDestroy } from '@angular/core';
import {WakandaClient} from 'wakanda-client';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public messages:any[] = [];
  public interval:any;

  constructor() { }

  ngOnInit() {
    let self = this;

    let client = new WakandaClient({});
    client.getCatalog()
      .then(function (ds: any) {

        this.interval = setInterval(()=> {
          ds.Messages.query().then((messagesCollection)=> {
            self.messages = messagesCollection.entities;
          });
        }, 5000);

      });
  }

  ngOnDestroy(){
    console.log('list is destroyed');
    clearInterval(this.interval);
  }

}
