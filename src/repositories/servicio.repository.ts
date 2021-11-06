import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongosDataSource} from '../datasources';
import {Servicio, ServicioRelations, Usuario} from '../models';
import {UsuarioRepository} from './usuario.repository';

export class ServicioRepository extends DefaultCrudRepository<
  Servicio,
  typeof Servicio.prototype.id,
  ServicioRelations
> {

  public readonly serorig: BelongsToAccessor<Usuario, typeof Servicio.prototype.id>;

  constructor(
    @inject('datasources.Mongos') dataSource: MongosDataSource, @repository.getter('UsuarioRepository') protected usuarioRepositoryGetter: Getter<UsuarioRepository>,
  ) {
    super(Servicio, dataSource);
    this.serorig = this.createBelongsToAccessorFor('serorig', usuarioRepositoryGetter,);
    this.registerInclusionResolver('serorig', this.serorig.inclusionResolver);
  }
}
