import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ActivityRegisterFormComponent } from './activity-register-form/activity-register-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivityRegisterFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
