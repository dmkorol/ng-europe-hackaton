import {Component, OnInit, EventEmitter} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {AuthService} from '../shared/auth-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {

  public user: string;
  public pass: string;

  constructor(private router: Router, private auth: AuthService) {
  }

  doLogin() {
    let self = this;

    this.auth.login(this.user, this.pass);

    this.router.navigateByUrl('/messages');
  }

  ngOnInit() {
  }

}
