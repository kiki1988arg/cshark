import { ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './components/users/users.component';
import { UserRegistrarComponent } from './components/user-registrar/user-registrar.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule   


  ],
  declarations: [UsersComponent, UserRegistrarComponent]
})
export class UsersModule { }
