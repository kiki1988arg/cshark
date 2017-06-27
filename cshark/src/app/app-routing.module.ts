import { ProductoDetalleComponent } from './producto/producto-detalle/producto-detalle.component';
import { ProductoComponent } from './producto/producto/producto.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductoBuscar } from "app/producto/producto-buscar/producto-buscar.component";

const routes: Routes = [
  {path: '', redirectTo: '/producto' ,pathMatch: 'full' },
  {path: 'producto', component: ProductoComponent },
  {path: 'users', loadChildren: './users/users.module#UsersModule' },
  {path: 'producto/detail/:id', component: ProductoDetalleComponent},
  {path: 'producto/BuscarProducto/:id', component: ProductoBuscar}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
