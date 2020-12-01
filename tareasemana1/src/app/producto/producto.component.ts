import { Component,  Input,OnInit,HostBinding } from '@angular/core';
import {Producto } from "../models/producto.model";

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  @Input() productos: Producto;
  @HostBinding('attr.class') cssClass = 'col-md-4'
  
  constructor() { }

  ngOnInit(): void {
  }

}
