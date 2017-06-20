import { ProductoService } from './../services/producto.service';
import { Producto } from './../models/producto';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  Productos: Producto[];
    errorMessage: any;

  constructor(
     private ProductoService: ProductoService
  ) { }

  ngOnInit() {
       this.getProductos();
  }


  getProductos(): void {
    this.ProductoService.getAllProducts()      // .then(response => this.users = response)
      .subscribe(
      data => this.Productos = data,
      error => this.errorMessage = <any>error);
  }

}
