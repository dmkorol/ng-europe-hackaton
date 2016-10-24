import { Component, OnInit } from '@angular/core';
import {WakandaClient} from 'wakanda-client';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public user:string;
  public pass:string;
  private _client;

  constructor() {
    this._client = new WakandaClient({});
  }

  doLogin(){
    this._client.directory.login(this.user, this.pass)
      .then(function () {

      })
      .catch(function (e) {
        alert('Wrong user or password. Try again!')
      });
  }

  ngOnInit() {
  }

}
