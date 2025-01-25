import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductoService } from './../../services/producto.service';
import { IProducto } from './../../interfaces/iproducto';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})

//Está hecho basándome en el ejemplo de calse de los formularios de usuarios.
//no he conseguido guardar en fichero, dar de alta añade correctamente el producto a la lista pero solo en memoria
export class ProductFormComponent {

  productForm: FormGroup;
  productoService = inject(ProductoService);

  constructor() {
    this.productForm = new FormGroup({
      _id: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      description: new FormControl(null, [Validators.required, Validators.minLength(15)]),
      category: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required, Validators.min(0)]),
      image: new FormControl(null, [Validators.required]),
      active: new FormControl(true, [Validators.required])
    });
  }

  getDataForm() {
    if (this.productForm.valid) {
      const newProduct: IProducto = this.productForm.value as IProducto;
      this.productoService.addProducto(newProduct);
      //console.log(newProduct); guay!!
      this.productForm.reset();
    }
  }

  checkControl(formControlName: string, validador: string): boolean | undefined {
    return this.productForm.get(formControlName)?.hasError(validador) && this.productForm.get(formControlName)?.touched;
  }
}
