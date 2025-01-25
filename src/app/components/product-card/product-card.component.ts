import { Component, inject, Input } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { IProducto } from '../../interfaces/iproducto';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  serieService = inject(ProductoService);

  @Input() miProducto!: IProducto; //pasamos al hijo

  //borrar producto

  deleteProducto(producto: IProducto) {
    this.serieService.deteleById(producto._id);
  }




  
}
