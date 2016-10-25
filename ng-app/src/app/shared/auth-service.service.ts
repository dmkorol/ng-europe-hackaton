import {Injectable} from '@angular/core';
import {Subject}    from 'rxjs/Subject';
import {WakandaClient} from 'wakanda-client';

@Injectable()
export class AuthServiceService {
  private loggedIn = false;
  public name: string;
  private _client: WakandaClient;

  constructor() {
    this.loggedIn = !!localStorage.getItem('name');
    this._client = new WakandaClient({});
  }

  login(user: string, pass: string) {
    let self = this;
    self._client.directory.login(user, pass)
      .then(function () {
        self.loggedIn = true;

        //TODO: add User currantName()
        console.log('done');
      })
      .catch(function (e) {
        alert('Wrong user or password. Try again!')
      });
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  // // Observable string sources
  // private missionAnnouncedSource = new Subject<string>();
  // private missionConfirmedSource = new Subject<string>();
  //
  // // Observable string streams
  // missionAnnounced$ = this.missionAnnouncedSource.asObservable();
  // missionConfirmed$ = this.missionConfirmedSource.asObservable();
  //
  // // Service message commands
  // announceMission(mission: string) {
  //   this.missionAnnouncedSource.next(mission);
  // }
  // confirmMission(astronaut: string) {
  //   this.missionConfirmedSource.next(astronaut);
  // }


}
