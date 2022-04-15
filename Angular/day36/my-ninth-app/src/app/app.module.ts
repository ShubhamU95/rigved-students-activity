import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormControlDemoComponent } from './form-control-demo/form-control-demo.component';
import { FormGComponent } from './form-g/form-g.component';
import {FormBuilder} from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    FormControlDemoComponent,
    FormGComponent,
    ProfileComponent,
    FormBuilderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    FormBuilderComponent,
    FormBuilder,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
