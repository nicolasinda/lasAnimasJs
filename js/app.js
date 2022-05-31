/* const productosCarrito=[];
class Producto{
    constructor(id,nombre,precio){
        this.id=id;
        this.nombre=nombre;
        this.precio=precio;
    }
}

const ap1= document.getElementById("ap1")

ap1.addEventListener("click", ()=>{
    agregarProductoAlCarro();
})


function agregarProductoAlCarro(){
    let id=1;
    if(productosCarrito.length>0){
        id=productosCarrito[productosCarrito.length-1].id+1;
    }
    let nombre="hola"
    let precio=7;
    let producto=new Producto(id,nombre,precio);
    
    productosCarrito.push(producto);
    console.log(productosCarrito)


} */

const productosParaAgregar= document.querySelectorAll(".add-carrito")
console.log(productosParaAgregar)
productosParaAgregar.forEach((botonAgregarAlCarrito) => {
    botonAgregarAlCarrito.addEventListener("click", botonAgregarAlcarrito);
});

function botonAgregarAlcarrito(event){
    const boton = event.target 
    const info = boton.closest(".card-info")
    const nombre=info.querySelector("h2").textContent;
    const precio=info.querySelector("h4").textContent;
    agregarAlCarrito(nombre,precio)
    
}

 function agregarAlCarrito(nombre,precio){
  console.log(nombre, precio)  
}
