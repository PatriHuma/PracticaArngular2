import { Component, inject } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { ProductoService } from './../../services/producto.service';
import { IProducto } from './../../interfaces/iproducto';

@Component({
  selector: 'app-product-filter',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent {
  productos: IProducto[] = [];
  productosFiltrados: IProducto[] = [];
  productoService = inject(ProductoService);

  constructor() {
    this.productos = this.productoService.getAllSeries();
    this.productosFiltrados = this.productos.slice(); //copia
  }
  //sacamos valores y los copiamos en productosFiltrados
  getDataForm(filterForm: NgForm) {
    const filter = filterForm.value;
    this.productosFiltrados = this.productos.slice();

    if (filter.nombre) {
      this.productosFiltrados = this.productosFiltrados.filter(producto => producto.name.toLowerCase().includes(filter.nombre.toLowerCase()));
    }
    if (filter.categoria) {
      this.productosFiltrados = this.productosFiltrados.filter(producto => producto.category.toLowerCase().includes(filter.categoria.toLowerCase()));
    }
    if (filter.precio) {
      this.productosFiltrados = this.productosFiltrados.filter(producto => producto.price <= filter.precio);
    }
  }

  resetForm(filterForm: NgForm) {
    filterForm.reset(); //esto lo he buscado y hace los  mismo que ir borrando los valores campo por campo
    this.productosFiltrados = this.productos.slice(); //crea una copia de todos los elementos en el array y los coloca en un nuevo array.
  }
}


//he tenido que buscar información e investigar para poder completar esta parte