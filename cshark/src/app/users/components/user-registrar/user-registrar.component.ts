import { Observable } from 'rxjs/Observable';

import { FormGroup, FormBuilder ,Validators} from '@angular/forms';

import { Component, OnInit} from '@angular/core';
import { user } from "app/users/models/user";
import { UserRegistrarService } from "app/users/services/user-registrar.service";

@Component({
  selector: 'app-user-registrar',
  templateUrl: './user-registrar.component.html',
  styleUrls: ['./user-registrar.component.css'],
  // providers: [UserRegistrarService]
})
export class UserRegistrarComponent implements OnInit {
  
  registrarseForm : FormGroup ;
  users: user[];
  errorMessage: any;


  constructor(
    private fb: FormBuilder,
    private userRegistrarService: UserRegistrarService) {
      this.createForm();
   }

   ngOnInit() {
  this.getHeroes();
        
    
  }
  
  getHeroes(): void
  {
      this.userRegistrarService.getUsers()      // .then(response => this.users = response)
      .subscribe(
            data => this.users = data,
            error =>  this.errorMessage = <any>error);      
  }

  createForm() {
    this.registrarseForm = this.fb.group({
      UserName: ['', [Validators.required,Validators.minLength(8),
    Validators.maxLength(24)] ],
      Password: ['', [Validators.required,Validators.minLength(8),
    Validators.maxLength(24)] ],
      Mail: ['', [Validators.required,Validators.email] ],
    });
  }
  onSubmit(){
    console.log("hola");
  }

}
