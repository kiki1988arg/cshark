import { ProductoComponent } from './producto/producto/producto.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/producto' ,pathMatch: 'full' },
  {path: 'producto', component: ProductoComponent },
  {path: 'users', loadChildren: './users/users.module#UsersModule' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
