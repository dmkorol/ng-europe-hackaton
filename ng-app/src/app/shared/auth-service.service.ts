import {Injectable}     from '@angular/core';
import {CanActivate}    from '@angular/router';
import {WakandaClient} from 'wakanda-client';

@Injectable()
export class AuthService {

  public userName: string;
  public client: any;

  constructor() {
    this.client = new WakandaClient({});
  }

  public canActivate() {
    if (this.userName && this.userName.length>0) return false;
    return true;
  }

  public login(user: string, pass: string) {
    console.log(this.client);

    this.client.directory.login(user, pass)
      .then(()=> {
        this.userName = 'Name';

        //TODO: add User currantName()
        console.log('done');
      })
      .catch(function (e) {
        alert('Somth is going wrong, try again.')
      });
  }
}

// import {Injectable} from '@angular/core';
// import {Subject}    from 'rxjs/Subject';
//
//
// @Injectable()
// export class AuthService {
//   private loggedIn = false;
//   public name: string;
//   private _client: ;
//

//
//   login(user: string, pass: string) {
//     let self = this;
//     self._client.directory.login(user, pass)
//       .then(function () {
//         self.loggedIn = true;
//
//         //TODO: add User currantName()
//         console.log('done');
//       })
//       .catch(function (e) {
//         alert('Wrong user or password. Try again!')
//       });
//   }
//
// }
