import { ProductoService } from './../services/producto.service';
import { Producto } from './../models/producto';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto-buscar.component.html',
  styleUrls: ['./producto-buscar.component.css']
})
export class ProductoBuscar implements OnInit {
  Productos: Producto[];
  private sub : any;
  private mode : string;
    errorMessage: any;

  constructor(
      private ProductoService: ProductoService,
      private route: ActivatedRoute
  ){ }

  ngOnInit() {
     this.route.params.forEach((params: Params) => {
        let id = params['id'];
        this.buscarProducto(id);
    });

  }
  
  buscarProducto(term: string):void {
      this.ProductoService.buscarProducto(term)
      .subscribe(
      data => this.Productos = data,
      error => this.errorMessage = <any>error);
  }
}
  
  