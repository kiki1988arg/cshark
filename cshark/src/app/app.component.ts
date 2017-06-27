import { Component } from '@angular/core';
import { ProductoService } from './producto/services/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'C-shark';
  constructor(
  private  ProductoService : ProductoService,
  private router: Router) {}

  clicked(searchTerm: HTMLInputElement) {
    if(searchTerm.value == "")
    {
    this.router.navigate(['producto']);  
  }
  else
  {
    this.router.navigate(['producto/BuscarProducto', searchTerm.value]);
  }
    
  
  }
}