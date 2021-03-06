import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  rectiveForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.rectiveForm = formBuilder.group({
      'email': [null,Validators.required],
      'password': [null,Validators.compose([Validators.required,Validators.minLength(5)])],
      'privacyAndPolicy': [false]
    }
    )
  }
  submitHandler(value){
    console.log(value);
  }
  ngOnInit() {
    this.rectiveForm.get('password').valueChanges.subscribe(function(value){
      debugger;
      console.log(value);
    });
  }

}
