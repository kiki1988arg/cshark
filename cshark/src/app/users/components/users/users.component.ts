import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { user } from "app/users/models/user";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // user= new user();
  name =  new FormControl();

}
