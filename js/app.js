const ingresos = [
    new Ingreso('Salario', 2100),
    new Ingreso('Ventas', 1500)
];

const egresos = [
    new Egreso('Renta', 900),
    new Egreso('Compras', 400)
];

let cargarApp = () => {
    cargarCabecero();
}

let totalIngresos = () => {
    let totalIngreso = 0;
    for (let ingreso of ingresos) {
        totalIngreso += ingreso.valor;
    }
    return totalIngreso;
}

let totalEgresos = () => {
    let totalEgreso = 0;
    for (let egreso of egresos) {
        totalEgreso += egreso.valor;
    }
    return totalEgreso;
}

let cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos() / totalIngresos();
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerHTML = formantoPorcentaje(porcentajeEgreso);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());
}

const formatoMoneda = (valor) => {
    return valor.toLocalString('es-ES', { style: 'currency', currency: 'EUR', minimunFractionDigits: 2 })
};

const formatoPorcentaje = (valor) => {
    return valor.toLocalString('es-ES',{style: 'percent', minimunFractionDigits:2});
}