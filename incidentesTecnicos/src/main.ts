import * as readline from "readline";
import { Incidentes } from "./incidentes.js";
import { Prioridades, Estado } from "./tipos.js";
import { incidentes, contadorId } from "./db.js";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Mynor Eduardo Enrique Sanchez Tzaj 2025319 IN5AV")

console.log("+++ Sistema de Incidentes c27 +++");

function pregunta(texto: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(texto, (respuesta) => {
            resolve(respuesta);
        });
    });
}

async function iniciar() {
    const titulo = await pregunta("Titulo del incidente: ");
    const descripcion = await pregunta("Descripcion del problema: ");
    const reportadoPor = await pregunta("Nombre de quien reporta: ");

    let prioridad: Prioridades;
    while (true) {
        const entrada = await pregunta("Prioridad (baja, media y alta): ");
        if (entrada === "baja" || entrada === "media" || entrada === "alta") {
            prioridad = entrada;
            break;
        }
        console.log("Prioridad invalida");
    }

    
    let estado: Estado;
while (true) {
    const entrada = await pregunta("Cual es el estado (abierto, en progreso, resuelto): ");
    if (entrada === "abierto" || entrada === "en progreso" || entrada === "resuelto") {
        estado = entrada;
        break;
    }
    console.log("Estado invalido");
}

const nuevoIncidente: Incidentes = {
    id: contadorId,
    titulo: titulo,
    descripcion: descripcion,
    reportadoPro: reportadoPor,
    prioridad: prioridad,
    estado: estado,
    fecha: new Date()
};

    incidentes.push(nuevoIncidente);

    console.log("\n *** INCIDENTE REGISTRADO *** ");
    console.log(`ID: ${nuevoIncidente.id}`);
    console.log(`Titulo: ${nuevoIncidente.titulo}`);
    console.log(`Descripcion: ${nuevoIncidente.descripcion}`);
    console.log(`Reportado por: ${nuevoIncidente.reportadoPro}`);
    console.log(`Prioridad: ${nuevoIncidente.prioridad}`);
    console.log(`Estado: ${nuevoIncidente.estado}`);
    console.log(`Fecha de creacion: ${nuevoIncidente.fecha.toLocaleDateString()}`);


    rl.close();
}

iniciar();