import { Servicio, Usuario } from '../models';
import { ServicioRepository } from '../repositories';
export declare class ServicioUsuarioController {
    servicioRepository: ServicioRepository;
    constructor(servicioRepository: ServicioRepository);
    getUsuario(id: typeof Servicio.prototype.id): Promise<Usuario>;
}
