import {Component, OnInit, EventEmitter} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  auth: boolean;

  public user: string;
  public pass: string;

  constructor(private router: Router,) {
  }

  doLogin() {
    let self = this;

    this.router.navigateByUrl('/messages');
  }

  ngOnInit() {
  }

}
