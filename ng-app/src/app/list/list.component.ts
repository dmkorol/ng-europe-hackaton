import { Component, OnInit } from '@angular/core';
import {WakandaClient} from 'wakanda-client';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public messages:any[] = [];

  constructor() { }

  ngOnInit() {
    let self = this;

    let client = new WakandaClient({});
    client.getCatalog()
      .then(function (ds: any) {

        setInterval(()=> {
          ds.Messages.query().then((messagesCollection)=> {
            self.messages = messagesCollection.entities;
          });
        }, 5000);

      });
  }

}
