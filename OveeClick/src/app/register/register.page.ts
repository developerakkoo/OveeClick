import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  whoAreYou(event: Event){
    console.log("I am:- ", event['detail'].value);
    
  }

  onRegister(){

  }
}
