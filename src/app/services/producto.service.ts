import { IProducto } from './../interfaces/iproducto';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private arrProductos: IProducto[];

  constructor() {
    this.arrProductos = [];


    //Obtenemos los datos mediante el fetch consultando la API como en el ejemplo de clase
    fetch("https://jsonblob.com/api/1332412235716419584")
      .then(response => response.json())
      .then(productos => {
          productos.forEach((element: any) => {
          this.arrProductos.push(element);
        });
      });

    //console.log("Los datos son:" +this.arrProductos) ya sale bien!!
  }

  getAllSeries(): IProducto[]
  {
    return this.arrProductos;
  }
  // Para borrar los productos
  deteleById(_id: string): IProducto[]{
    let i = this.arrProductos.findIndex(producto => producto._id == _id);

    if (i != -1 && i >= 0 && i < this.arrProductos.length) {
      this.arrProductos.splice(i, 1);
    }

    return this.arrProductos;
  }
 // Para añadir los productos
 addProducto(producto: IProducto): void {
  this.arrProductos.push(producto);
}
}



   

