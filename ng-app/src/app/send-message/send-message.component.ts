import { Component, OnInit } from '@angular/core';
import {WakandaClient} from 'wakanda-client';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {
  public message:string;
  private _client;

  constructor() {
    this._client = new WakandaClient({});
  }

  public sendMessage(ev) {
    let msg = this.message;
    let _self = this;

    this._client.getCatalog()
      .then(function (ds: any) {

        let newMsg = ds.Messages.create({
          message: msg
        });
        newMsg.save().then(()=>{
          _self.clearMsg();
        });

      });
  }

  clearMsg(){
    this.message = "";
  }

  ngOnInit() {
  }

}
