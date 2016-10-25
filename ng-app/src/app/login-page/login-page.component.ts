import { Component, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  auth:boolean;

  public user:string;
  public pass:string;

  constructor() {
  }

  doLogin(){
    let self = this;


  }

  ngOnInit() {
  }

}
