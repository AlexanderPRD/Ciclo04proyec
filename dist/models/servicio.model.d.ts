import { Entity } from '@loopback/repository';
export declare class Servicio extends Entity {
    id?: string;
    origen: string;
    destino: string;
    fecha: string;
    hora: string;
    encomienda: string;
    valor: string;
    serviorigen: string;
    constructor(data?: Partial<Servicio>);
}
export interface ServicioRelations {
}
export declare type ServicioWithRelations = Servicio & ServicioRelations;
