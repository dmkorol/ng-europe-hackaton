import {Component} from '@angular/core';
import {WakandaClient} from 'wakanda-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  ngOnInit() {
    let client = new WakandaClient();
    client.getCatalog()
      .then(function (ds: any) {

        console.log(ds.Messages);
        //ds.Company is defined, but ds.Employee is not
        // console.log(ds.Messages);
      });
  }
}
