import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  rectiveForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.rectiveForm = formBuilder.group({
      'email': [null],
      'password': [null],
      'privacyAndPolicy': [false]
    }
    )
  }
  submitHandler(value){
    console.log(value);
  }
  ngOnInit() {
  }

}
