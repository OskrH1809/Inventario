export class Producto{
    nombreProducto:string;
    precioProducto:string;
    ISV:number;

    

    constructor(n:string, u:string, i:number){
        this.nombreProducto = n;
        this.precioProducto = u;
        this.ISV = i

    }
}