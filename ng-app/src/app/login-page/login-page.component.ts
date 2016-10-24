import { Component, OnInit, EventEmitter} from '@angular/core';
import {WakandaClient} from 'wakanda-client';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  inputs: ['auth']
})
export class LoginPageComponent implements OnInit {
  auth:boolean;

  public user:string;
  public pass:string;
  private _client;
  onItemSelected: EventEmitter<string>;

  constructor() {
    this._client = new WakandaClient({});
  }

  doLogin(){
    let self = this;
    this._client.directory.login(this.user, this.pass)
      .then(function () {
        self.auth = true;
        console.log('done');
      })
      .catch(function (e) {
        alert('Wrong user or password. Try again!')
      });
  }

  ngOnInit() {
  }

}
