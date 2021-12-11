import { DefaultCrudRepository } from '@loopback/repository';
import { MongosDataSource } from '../datasources';
import { Usuario, UsuarioRelations } from '../models';
export declare class UsuarioRepository extends DefaultCrudRepository<Usuario, typeof Usuario.prototype.id, UsuarioRelations> {
    constructor(dataSource: MongosDataSource);
}
