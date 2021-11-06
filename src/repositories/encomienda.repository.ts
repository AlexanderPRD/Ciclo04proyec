import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongosDataSource} from '../datasources';
import {Encomienda, EncomiendaRelations} from '../models';

export class EncomiendaRepository extends DefaultCrudRepository<
  Encomienda,
  typeof Encomienda.prototype.id,
  EncomiendaRelations
> {
  constructor(
    @inject('datasources.Mongos') dataSource: MongosDataSource,
  ) {
    super(Encomienda, dataSource);
  }
}
