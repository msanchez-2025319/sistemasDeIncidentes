import { Prioridades, Estado } from "./tipos.js";

export interface Incidentes {
    readonly id: number;
    titulo: string;
    descripcion: string;
    reportadoPro: string;
    prioridad: Prioridades;
    estado: Estado;
    fecha: Date;
}