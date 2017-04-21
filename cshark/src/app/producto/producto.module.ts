import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { ProductoComponent } from './producto/producto.component';

@NgModule({
  imports: [
    CommonModule,
    ProductoRoutingModule
  ],
  declarations: [ProductoDetalleComponent, ProductoComponent]
})
export class ProductoModule { }
