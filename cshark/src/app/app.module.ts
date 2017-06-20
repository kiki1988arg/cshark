import { ProductoService } from './producto/services/producto.service';
import { ProductoComponent } from './producto/producto/producto.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule }     from './app-routing.module';
import { EagerComponent } from './eager/eager.component'

@NgModule({
  declarations: [
    AppComponent,
    EagerComponent,
    ProductoComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,

  ],
  providers: [ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
