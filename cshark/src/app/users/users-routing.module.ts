import { UserRegistrarComponent } from './components/user-registrar/user-registrar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from "./components/users/users.component";

const routes: Routes = [
    { path: 'registrar',  component: UserRegistrarComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
