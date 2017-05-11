import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-registrar',
  templateUrl: './user-registrar.component.html',
  styleUrls: ['./user-registrar.component.css']
})
export class UserRegistrarComponent implements OnInit {

  registrarseForm = new FormGroup ({
    name: new FormControl()
  });
  constructor(private fb: FormBuilder) {
      //  this.createForm();
   }

  ngOnInit() {
  }
 
}
