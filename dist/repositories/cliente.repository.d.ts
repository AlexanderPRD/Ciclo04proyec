import { DefaultCrudRepository } from '@loopback/repository';
import { MongosDataSource } from '../datasources';
import { Cliente, ClienteRelations } from '../models';
export declare class ClienteRepository extends DefaultCrudRepository<Cliente, typeof Cliente.prototype.id, ClienteRelations> {
    constructor(dataSource: MongosDataSource);
}
