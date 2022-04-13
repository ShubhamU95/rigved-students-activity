import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-g',
  templateUrl: './form-g.component.html',
  styleUrls: ['./form-g.component.css']
})
export class FormGComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  profile : FormGroup = new FormGroup({
    firstname : new FormControl('', Validators.required),
    lastname : new FormControl('', Validators.required)
  });
  handleSubmit(){
    console.log(this.profile.value);
    this.profile.reset({})
  }
}
