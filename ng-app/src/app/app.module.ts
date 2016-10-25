import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {ListComponent} from './list/list.component';
import {SendMessageComponent} from './send-message/send-message.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {AuthServiceService} from "./shared/auth-service.service";

import {RouterModule}   from '@angular/router';
import {MessagesPageComponent} from './messages-page/messages-page.component';
import {NotFoundPageComponent} from './404-page/404-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SendMessageComponent,
    LoginPageComponent,
    MessagesPageComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild([
      {
        path: 'root',
        component: rootComponent,
        children: [
          {
            path: '',
            children: [
              {path: 'messages', component: ManageCrisesComponent},
            ]
          }
        ]
      }]),


    // RouterModule.forRoot([
    //   { path: 'login', component: LoginPageComponent },
    //   { path: 'messages', component: MessagesPageComponent},
    //   { path: '', component: LoginPageComponent },
    //   { path: '**', component: NotFoundPageComponent}
    // ])
  ],
  providers: [AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
