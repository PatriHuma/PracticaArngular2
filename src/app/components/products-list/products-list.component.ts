import { ProductoService } from './../../services/producto.service';
import { Component, inject } from '@angular/core';
import { IProducto } from '../../interfaces/iproducto';
import { ProductCardComponent } from "../product-card/product-card.component";

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {

  arrProductos: IProducto[] = [];
  ProductoService = inject(ProductoService);

  ngOnInit(): void {
    this.arrProductos = this.ProductoService.getAllSeries();
    //console.log(this.arrProductos); okk


}
}