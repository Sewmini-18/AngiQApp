import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  emailPattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$";

  constructor() { }

  ngOnInit(): void {
  }

}
