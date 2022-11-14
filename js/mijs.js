
const precioTickets = 200;
 
let desEs = 0.80;
let desTr = 0.50;
let desJr = 0.15;

let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let email = document.getElementById('email');
let cantidad = document.getElementById('cantidad');
let categoria = document.getElementById('categoria');



function borrar(){
    verPago.innerHTML = "Resumen de compra.";
    descuento.innerHTML = "";
}

function totalPago(){

    if (nombre.value == "" || !isNaN(nombre.value)){
             alert("Es necesario que ingreses tu nombre.");
            nombre.classList.add("error");
            nombre.focus();
            return;
        }else{
            nombre.classList.remove("error");
        }

    if (apellido.value == "" || !isNaN(apellido.value)){
            alert("Es necesario que ingreses tu apellido");
            apellido.classList.add("error");
            apellido.focus();
            return;
        }else{
            apellido.classList.remove("error");
        }

    if (email.value == "" ){
             alert("Por favor, ingresá tu correo electrónico.");
             email.classList.add("error");
              email.focus();
             return;
        }else{
            email.classList.remove("error");
        }

    if (cantidad.value == "" || isNaN(cantidad.value)){
            alert("Por favor, ingresá la cantidad de entradas.");
            cantidad.classList.add("error");
            cantidad.focus();
            return;
        }else if (cantidad.value < 1){
            alert("Por favor, ingresá un número válido.");
            cantidad.focus();
            return;
        }else{
            cantidad.classList.remove("error");
        } 

   if (categoria.value == ""){
            alert("Es necesario que ingreses una categoría.");
            categoria.classList.add("error");
            categoria.focus();
            return;
        }else{
            categoria.classList.remove("error");
        } 


   let totalCompra = cantidad.value * precioTickets;
   let bruto = cantidad.value * precioTickets;

   switch (categoria.value){
        
        case("Estudiante"):
            totalCompra -=  totalCompra * desEs;
            verPago.innerHTML = "Compraste "+cantidad.value+" tickets, por AR$ "+totalCompra+". <br><span id='descuento'>El descuento por "+categoria.value+ " fue de: $"+(bruto-totalCompra)+"</span>" ;
            break;

        case("Trainee"):
            totalCompra -=  totalCompra * desTr;
            verPago.innerHTML = "Compraste "+cantidad.value+" tickets, por AR$ "+totalCompra+". <br><span id='descuento'>El descuento por "+categoria.value+ " fue de: $"+(bruto-totalCompra)+"</span>" ;
            break;

        case("Junior"):
            totalCompra -=  totalCompra * desJr;
            verPago.innerHTML = "Compraste "+cantidad.value+" tickets, por AR$ "+totalCompra+". <br><span id='descuento'>El descuento por "+categoria.value+ " fue de: $"+(bruto-totalCompra)+"</span>" ;
            break;

        default:
            totalCompra =  totalCompra;
            verPago.innerHTML = "Compraste "+cantidad.value+" tickets, por AR$ "+totalCompra; 
            
            break;    
    }

    
    
} 


botonTotalPago.addEventListener('click', totalPago);
botonBorrar.addEventListener('click', borrar);