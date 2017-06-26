import { Producto } from './../models/producto';
import { ProductoService } from './../services/producto.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {

 @Input() producto: Producto;
  constructor(  private router: Router,
    private route: ActivatedRoute,
    private service: ProductoService) { }



  ngOnInit() {
     this.route.params
    // (+) converts string 'id' to a number
    .switchMap((params: Params) => this.service.getProduct(+params['id']))
    .subscribe( producto => this.producto = producto);
  }

}
