import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { ProductoComponent } from './producto/producto.component';
import { ProductoBuscar } from './producto-buscar/producto-buscar.component';

@NgModule({
  imports: [
    CommonModule,
    ProductoRoutingModule
  ],
  declarations: [ProductoDetalleComponent, ProductoComponent, ProductoBuscar]
})
export class ProductoModule { }
