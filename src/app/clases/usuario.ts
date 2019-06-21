import { Persona } from './persona';
import { Rol } from './rol';

export class Usuario {
    id: number;
    nombre: string;
    clave: string;
    estado: number;
    persona: Persona
    rol: Rol

}