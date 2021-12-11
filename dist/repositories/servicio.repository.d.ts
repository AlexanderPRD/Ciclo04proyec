import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { MongosDataSource } from '../datasources';
import { Servicio, ServicioRelations, Usuario } from '../models';
import { UsuarioRepository } from './usuario.repository';
export declare class ServicioRepository extends DefaultCrudRepository<Servicio, typeof Servicio.prototype.id, ServicioRelations> {
    protected usuarioRepositoryGetter: Getter<UsuarioRepository>;
    readonly serorig: BelongsToAccessor<Usuario, typeof Servicio.prototype.id>;
    constructor(dataSource: MongosDataSource, usuarioRepositoryGetter: Getter<UsuarioRepository>);
}
