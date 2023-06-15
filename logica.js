const navbarOpciones = document.getElementById("navbarOpciones")
const paginaInicio = document.getElementById("paginaInicio")
const paginaFuncionalidad1 = document.getElementById("paginaFuncionalidad1")
const paginaFuncionalidad2 = document.getElementById("paginaFuncionalidad2")
const paginaFuncionalidad3 = document.getElementById("paginaFuncionalidad3")
const paginaFuncionalidad4 = document.getElementById("paginaFuncionalidad4")
const btnInicio = document.getElementById("btnInicio")
const btnFuncionalidad1 = document.getElementById("btnFuncionalidad1")
const btnFuncionalidad2 = document.getElementById("btnFuncionalidad2")
const btnFuncionalidad3 = document.getElementById("btnFuncionalidad3")
const btnFuncionalidad4 = document.getElementById("btnFuncionalidad4")
const formularioBuscarClientes = document.getElementById("formularioBuscarClientes")
const formularioBuscarClientes2 = document.getElementById("formularioBuscarClientes2")
const btnConfirmarBuscar = document.getElementById("btnConfirmarBuscar")
const formularioAgregarServicio = document.getElementById("formularioAgregarServicio")


function ocultar(parametroBtn,parametro1,parametro2,parametro3,parametro4,parametro5){
    parametroBtn.addEventListener('click', function(event) {
    event.preventDefault();
        parametro1.classList.remove('d-none');
        parametro2.classList.add('d-none');
        parametro3.classList.add('d-none');
        parametro4.classList.add('d-none');
        parametro5.classList.add('d-none');
    })}

ocultar(btnInicio,paginaInicio,paginaFuncionalidad1,paginaFuncionalidad2,paginaFuncionalidad3,paginaFuncionalidad4)
ocultar(btnFuncionalidad1,paginaFuncionalidad1,paginaInicio,paginaFuncionalidad2,paginaFuncionalidad3,paginaFuncionalidad4)
ocultar(btnFuncionalidad2,paginaFuncionalidad2,paginaInicio,paginaFuncionalidad1,paginaFuncionalidad3,paginaFuncionalidad4)
ocultar(btnFuncionalidad3,paginaFuncionalidad3,paginaInicio,paginaFuncionalidad2,paginaFuncionalidad1,paginaFuncionalidad4)
ocultar(btnFuncionalidad4,paginaFuncionalidad4,paginaInicio,paginaFuncionalidad2,paginaFuncionalidad3,paginaFuncionalidad1)







// ------------------------------------------------------Pagina Clientes----------------------------------------------------------------

const formularioAgregarClientes = document.getElementById("formularioAgregarClientes")
const btnConfirmarAgregar = document.getElementById("btnConfirmarAgregar")
const formularioClientes = document.getElementById("formularioClientes")
const btnConfirmarEdicion = document.getElementById("btnConfirmarEdicion")
const formularioEditarClientes = document.getElementById("formularioEditarClientes")


let clientes = new Map

let puntosFidelidad = new Map


function reset(formulario){
    formulario.reset()
}

function reset2(){
    formularioBuscarClientes2.reset()
}

function reset3(){
    formularioAgregarServicio.reset()
}


function buscar(){
formularioBuscarClientes2.addEventListener("submit", function(event) {
    event.preventDefault();
    const id = document.getElementById("datoIdBuscar").value;

    if (id < 0 ){
        alert("ingrese un ID aceptable")}

    else if (clientes.has(`${id}`) == false){
        alert("El Id No le pertenece a ningun cliente")
        }

    else if (clientes.has(`${id}`) == true){
        
        document.getElementById("datoNumeroBuscado").value = `${id}`;
        document.getElementById("datoNombresBuscado").value = clientes.get(`${id}`).nombres;
        document.getElementById("datoApellidosBuscado").value = clientes.get(`${id}`).apellidos;
        document.getElementById("datoPlacaBuscado").value = clientes.get(`${id}`).placa;
        document.getElementById("datoTipoBuscado").value = clientes.get(`${id}`).tipo;
        document.getElementById("datoTelefonoBuscado").value = clientes.get(`${id}`).telefono;
        document.getElementById("datoCorreoBuscado").value = clientes.get(`${id}`).correo;
        $('#formularioClienteBuscado').modal('show')
        $('#formularioBuscarClientes').modal('hide');
        formularioBuscarClientes2.reset()   


    }})}
    












function agregar(){
    formularioAgregarClientes.addEventListener("submit", function(event) {
    event.preventDefault();
    const id = document.getElementById("datoNumero").value;
    const nombres = document.getElementById("datoNombres").value;
    const apellidos = document.getElementById("datoApellidos").value;
    const placa = document.getElementById("datoPlaca").value;
    const tipo = document.getElementById("datoTipo").value;
    const telefono = document.getElementById("datoTelefono").value;
    const correo = document.getElementById("datoCorreo").value;

    if (telefono < 0 ){
        alert("ingrese un telefono aceptable")}

    else if (id < 0 ){
        alert("ingrese un ID aceptable")}

    else if (clientes.has(`${id}`) == true){
        alert("Ese Numero de Identificacion ya fue Asignado A Otro Cliente")}

    else{
        clientes.set(`${id}`,{nombres,apellidos,placa,tipo,correo,telefono}) 
        formularioAgregarClientes.reset()
        $('#formularioClientes').modal('hide')}
})}


function mostrar(pametro){
    pametro.addEventListener("submit", function(event) {
    event.preventDefault();
    const lugar = document.getElementById("listaClientes")
    lugar.innerHTML=""
    const lugar2 = document.getElementById("tablaClientesCompra")
    lugar2.innerHTML=`<option selected>Seleciona Al Cliente</option>`
    
    for (const [miClave,miValor] of clientes) {
        const lugar = document.getElementById("listaClientes")
        const parrafo = document.createElement("tr")
        parrafo.id=`${miClave}`
    
        parrafo.innerHTML=
            `<td class="fw-bold">${miClave}</td>
            <td >${miValor.nombres}</td>
            <td >${miValor.apellidos}</td>
            <td >${miValor.placa}</td>
            <td >${miValor.tipo}</td>
            <td>${miValor.correo}</td>
            <td >${miValor.telefono}</td>
            <td><button onClick="btnEditar(${miClave})" data-bs-toggle="modal" data-bs-target="#formularioEditarClientes2" type="button" class="btn btn-black"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="rgb(0, 255, 255)" class="bi bi-clipboard2-pulse" viewBox="0 0 16 16"><path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z"/><path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12Z"/><path d="M9.979 5.356a.5.5 0 0 0-.968.04L7.92 10.49l-.94-3.135a.5.5 0 0 0-.926-.08L4.69 10H4.5a.5.5 0 0 0 0 1H5a.5.5 0 0 0 .447-.276l.936-1.873 1.138 3.793a.5.5 0 0 0 .968-.04L9.58 7.51l.94 3.135A.5.5 0 0 0 11 11h.5a.5.5 0 0 0 0-1h-.128L9.979 5.356Z"/></svg></button></td>
            <td><button onClick="btnDelete(${miClave})" type="button"  class="btn btn-black"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="rgb(0, 255, 255)" class="bi bi-trash" viewBox="0 0 16 16"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/> <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/></svg></button></td>                `;
        lugar.appendChild(parrafo);


        const parrafo2 = document.createElement("option")
            parrafo2.id = `s${miClave}`
            parrafo2.value= miClave
            parrafo2.innerHTML=`${miValor.nombres}`
    
            lugar2.appendChild(parrafo2)
    }})}


function btnEditar(ids) {
        document.getElementById("datoOculto").value = `${ids}`
        document.getElementById("datoNumero2").value = `${ids}`
        document.getElementById("datoNombres2").value = clientes.get(`${ids}`).nombres;
        document.getElementById("datoApellidos2").value = clientes.get(`${ids}`).apellidos;
        document.getElementById("datoPlaca2").value = clientes.get(`${ids}`).placa;
        document.getElementById("datoTipo2").value = clientes.get(`${ids}`).tipo;
        document.getElementById("datoTelefono2").value = clientes.get(`${ids}`).telefono;
        document.getElementById("datoCorreo2").value = clientes.get(`${ids}`).correo;
}

function editar(){
    formularioEditarClientes.addEventListener("submit", function(event) {
    event.preventDefault();

    const idOculto = document.getElementById("datoOculto").value;
    const id = document.getElementById("datoNumero2").value;
    const nombres = document.getElementById("datoNombres2").value;
    const apellidos = document.getElementById("datoApellidos2").value;
    const placa = document.getElementById("datoPlaca2").value;
    const tipo = document.getElementById("datoTipo2").value;
    const telefono = document.getElementById("datoTelefono2").value;
    const correo = document.getElementById("datoCorreo2").value;

    if (id < 0 ){
        alert("ingrese un ID aceptable")}

    else if (clientes.has(`${id}`) == true){

        if (idOculto != id){
                alert("Ese Numero de Identificacion ya fue Asignado A Otro Cliente")}

        if (idOculto == id){
            clientes.set(`${id}`,{nombres,apellidos,telefono,correo})
            $('#formularioEditarClientes2').modal('hide')}}
    
    else{
        clientes.delete(`${idOculto}`)
        clientes.set(`${id}`,{nombres,apellidos,placa,tipo,telefono,correo})
        $('#formularioEditarClientes2').modal('hide')}})}



function btnDelete(button) {
    let confirmar = confirm("¿Estas seguro de eliminar estos Datos?")
    if (confirmar==true){
        const linea = document.getElementById(`${button}`);
        const linea2 = document.getElementById(`s${button}`);
        const linea3 = document.getElementById(`puntos${button}`)
        clientes.delete(`${button}`);
        linea.remove()
        linea2.remove()
        linea3.remove()
        console.log(clientes)
        puntosFidelidad.delete(`${button}`)
        
    }}






btnConfirmarEdicion.addEventListener("submit",editar())
btnConfirmarEdicion.addEventListener("submit",mostrar(formularioEditarClientes))
    
btnConfirmarAgregar.addEventListener("submit",agregar())
btnConfirmarAgregar.addEventListener("submit",mostrar(formularioAgregarClientes))


// ------------------------------------------------------Pagina Servicios----------------------------------------------------------------


const formularioClientesCompra = document.getElementById("formularioClientesCompra")
const btnConfirmarAgregarSericio = document.getElementById("btnConfirmarAgregarSericio")

let servicios = new Map
let contadorServicios= 1

function reset(){
    formularioAgregarClientes.reset()
}

function agregarServicio(){
    formularioAgregarServicio.addEventListener("submit", function(event) {
    event.preventDefault();
    const nombre = document.getElementById('datoNombreServicio').value;
    const valor = document.getElementById('datoValorServicio').value;
    const puntos = document.getElementById('datoPuntosServicio').value;
    const Descripcion= document.getElementById('datoDescripcionServicio').value;

    if (valor < 0 || isNaN(Number(valor)) ){
        alert("ingrese un valor aceptable")
    }
    else{
        servicios.set(contadorServicios,{nombre,valor,puntos,Descripcion})
        console.log(servicios)
        formularioAgregarServicio.reset()
        formularioClientesCompra.reset()
        $('#formularioServicios').modal('hide')
        contadorServicios = contadorServicios + 1}
})}



function mostrarServicio(pametro){
    pametro.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const lugar3 = document.getElementById("listaServicios")
        const lugar4 = document.getElementById("tablaClientesComprar2")
        lugar3.innerHTML=""
        lugar4.innerHTML=`<option selected>Seleciona A LA Ruta</option>`
    
        for (const [miClave,miValor] of servicios) {
            const lugar = document.getElementById("listaServicios")
            const parrafo = document.createElement("tr")
        
            parrafo.id=`${miClave}`
        
            parrafo.innerHTML=
            `<td>${miClave}</td>
            <td>${miValor.nombre}</td>
            <td>${miValor.valor}</td>
            <td>${miValor.Descripcion}</td>
            <td>${miValor.puntos}</td>
            <td><button onClick="onDelete(${miClave})" type="button" id="1" class="btn btn-danger"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="rgb(0, 255, 255)" class="bi bi-clipboard2-pulse" viewBox="0 0 16 16"><path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z"/><path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12Z"/><path d="M9.979 5.356a.5.5 0 0 0-.968.04L7.92 10.49l-.94-3.135a.5.5 0 0 0-.926-.08L4.69 10H4.5a.5.5 0 0 0 0 1H5a.5.5 0 0 0 .447-.276l.936-1.873 1.138 3.793a.5.5 0 0 0 .968-.04L9.58 7.51l.94 3.135A.5.5 0 0 0 11 11h.5a.5.5 0 0 0 0-1h-.128L9.979 5.356Z"/></svg></button></td>`;

            lugar.appendChild(parrafo);

            const lugar2 = document.getElementById("tablaClientesComprar2")
            const parrafo2 = document.createElement("option")
            parrafo2.id=`s${miClave}`
            parrafo2.value=`${miClave}`
            parrafo2.innerHTML=`${miValor.nombre}`

            lugar2.appendChild(parrafo2);
        }})}


function onDelete(id) {
    let confirmar = confirm("¿Estas seguro de eliminar estos Datos?")
    if (confirmar==true){
        const linea = document.getElementById(`${id}`)
        const linea2 = document.getElementById(`s${id}`);
        servicios.delete(id);
        linea.remove()
        linea2.remove()
        console.log(clientes)
    }}

btnConfirmarAgregarSericio.addEventListener("submit",agregarServicio())
btnConfirmarAgregarSericio.addEventListener("submit",mostrarServicio(formularioAgregarServicio))




// ------------------------------------------------------Pagina Compras----------------------------------------------------------------




const btnConfirmarFactura = document.getElementById("btnConfirmarFactura")
const formularioClienteBuscado2 = document.getElementById("formularioClienteBuscado2")
const btnConfirmarDatosFactura = document.getElementById("btnConfirmarDatosFactura")


function agregarTiquete(){
    formularioClientesCompra.addEventListener("submit", function(event) {
    event.preventDefault();
    const parrafo = document.createElement("div")
    parrafo.classList=("row text-center")
    parrafo.id=`idTiquete`
    const nombreCliente = document.getElementById("tablaClientesCompra").value
    const nombreRuta = document.getElementById("tablaClientesComprar2").value
    
    if(nombreCliente== "Seleciona Al Cliente" || nombreRuta== "Selecciona el servicio"){
        alert("Seleccion Opciones Validas")

    }

    else {
    const puntos = servicios.get(Number(nombreRuta)).puntos
    const nombreCliente2 = clientes.get(nombreCliente).nombres
    const nombreCliente3 = clientes.get(nombreCliente).apellidos
    const nombreServicio = servicios.get(Number(nombreRuta)).nombre
    const precioServicio = servicios.get(Number(nombreRuta)).valor
    const precioServicioImpuestos = parseFloat((Number(precioServicio) - ((Number(precioServicio)/100)*6)+((Number(precioServicio)/100)*14)))

    console.log(nombreCliente)
    document.getElementById("datoOculto").value = nombreCliente

    document.getElementById("datoNombreFactura").value = `${nombreCliente2} ${nombreCliente3}`;
    document.getElementById("datoServicioFactura").value = nombreServicio;
    document.getElementById("datoValorFactura").value = precioServicio;
    document.getElementById("datoValor2Factura").value = precioServicioImpuestos;
    document.getElementById("datoPuntos").value = puntos;

    $('#facturaServicio').modal('show')

}


    
})}


function mostrarpuntos(pametro){
    pametro.addEventListener("submit", function(event) {
    event.preventDefault();
    const lugar = document.getElementById("listaFidelidad")
    lugar.innerHTML=""
  
    for (const [miClave,miValor] of puntosFidelidad) {
        const lugar = document.getElementById("listaFidelidad")
        const parrafo = document.createElement("tr")
        parrafo.id=`puntos${miClave}`
    
        parrafo.innerHTML=
            `<td>${miValor.nombrePuntos}</td>
            <td>${miValor.puntos}</td> `;
        lugar.appendChild(parrafo);

    }})}

function confirmarFactura(){
    facturaServicio.addEventListener("submit", function(event) {
    event.preventDefault();


    const nombrePuntos = document.getElementById("datoNombreFactura").value
    const id = document.getElementById("datoOculto").value
    const puntos2 = document.getElementById("datoPuntos").value

    if (puntosFidelidad.has(`${id}`) == true){
        const puntos3 = puntosFidelidad.get(id).puntos

        const puntos = Number(puntos3) + Number(puntos2)
        puntosFidelidad.set(`${id}`,{nombrePuntos,puntos})
        alert("Se han registrado los puntos de Fidelidad")}


    else{
        const puntos = document.getElementById("datoPuntos").value
        puntosFidelidad.set(`${id}`,{nombrePuntos,puntos})

    alert("Se han registrado los puntos de Fidelidad")}

    
})}



btnConfirmarBuscar.addEventListener("submit",buscar())

btnConfirmarFactura.addEventListener("submit",agregarTiquete())
btnConfirmarFactura.addEventListener("submit",mostrarpuntos(formularioClientesCompra))

btnConfirmarDatosFactura.addEventListener("submit",confirmarFactura())
btnConfirmarDatosFactura.addEventListener("submit",mostrarpuntos(facturaServicio))





