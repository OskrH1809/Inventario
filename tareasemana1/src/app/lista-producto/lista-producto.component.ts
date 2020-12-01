import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import {Producto} from '../models/producto.model';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {
  productos: Producto[]; 
  constructor() { 
    this.productos = [];
  }

  ngOnInit(): void {
  }

  guardar(nombre:string,precio:string):boolean{
    let ISV=  parseInt(precio) * 0.15;
    this.productos.push(new Producto(nombre,precio,ISV));
    console.log(this.productos);
    return false;
  }

}
