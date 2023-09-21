//Arreglo
const pagos = [
    { id: 1, monto: 20, fecha: '2023-08-15', metodoPago: 'transferencia bancaria' },
    { id: 2, monto: 1, fecha: '2023-08-20', metodoPago: 'tarjeta de credito' },
    { id: 3, monto: 15, fecha: '2023-08-15', metodoPago: 'tarjeta de credito' },
    { id: 4, monto: 5, fecha: '2023-08-25', metodoPago: 'transferencia bancaria' },
    { id: 5, monto: 30, fecha: '2023-08-07', metodoPago: 'transferencia bancaria' }
];

// Recorriendo y mostrando los elementos
// Usando forEach
console.log('Recorriendo con forEach:');
pagos.forEach((pago) => {
  console.log(pago);
});

// Usando for...in
console.log('Recorriendo con for...in:');
for (let index in pagos) {
  console.log(pagos[index]);
}

// Usando for...of
console.log('Recorriendo con for...of:');
for (let pago of pagos) {
  console.log(pago);
}


//callback
function BuscarPorId(id,callback){
const pagoEncontrado=pagos.find((element)=>{return element.id===id})
if(!pagoEncontrado){
    return callback("No se ha encontrado el pago")
}
return callback(null, pagoEncontrado);
}

BuscarPorId(5,(error, pagos)=>{
    if(error){
        console.log("ha ocurrido un error")
    }
    console.log(pagos);
});