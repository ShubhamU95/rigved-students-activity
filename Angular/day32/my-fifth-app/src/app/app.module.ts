import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentRecordActivityComponent } from './student-record-activity/student-record-activity.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentRecordActivityComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
