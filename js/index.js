const valorTicket = 200;
let procentajes = [0, 80, 50, 15];

let nombre = document.getElementById('ticketNombre');
let apellido = document.getElementById('ticketApellido');
let correo = document.getElementById('ticketCorreo');
let cantidad = document.getElementById('ticketCantidad');
let categoria = document.getElementById('ticketCategoria');

let totalPagar = document.getElementById('totalPagar');

let btnBorrar = document.getElementById('ticketBorrar');
let btnResumen = document.getElementById('ticketResumen');

btnBorrar.addEventListener('click', e =>{
    limpiarErrores();
    nombre.value = apellido.value = correo.value = cantidad.value = categoria.value = '';
    totalPagar.innerHTML = '';
});

btnResumen.addEventListener('click', e => {
    limpiarErrores();

    if(nombre.value === ''){
        nombre.classList.add('is-invalid');
        alert('Ingresá un nombre válido');
        nombre.focus();
        return;
    }
    if(apellido.value === ''){
        apellido.classList.add('is-invalid');
        alert('Ingresá un apellido válido');
        apellido.focus();
        return;
    }
    if(!emailValido(correo.value)){
        correo.classList.add('is-invalid');
        alert('Ingresá un correo válido');
        correo.focus();
        return;
    }
    if(isNaN(cantidad.value) ||  cantidad.value <= 0){
        cantidad.classList.add('is-invalid');
        alert('Ingresá una cantidad válida');
        cantidad.focus();
        return;
    }
    if(categoria.value === ''){
        categoria.classList.add('is-invalid');
        alert('Ingresá una categoría');
        categoria.focus();
        return;
    }

    totalPagar.innerHTML = calcularTotal();
});

function limpiarErrores(){
    let formcontrols = document.querySelectorAll('.form-control, .form-select');
    formcontrols.forEach(e => {
        e.classList.remove('is-invalid');
    });
}
function calcularTotal(){
    let total;
    let procentaje = procentajes[parseInt(categoria.value)];
    let cantTickets = parseInt(cantidad.value);

    total = valorTicket * cantTickets * ( (100 - procentaje) / 100);

    return total;
}

function emailValido(valor) {
    return (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(valor));
  }