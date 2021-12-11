import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'Mongos',
  connector: 'mongodb',
  url: 'mongodb+srv://admin_mintic:hpX7lqTPNgofK8f9@minticciclo04.zgxfa.mongodb.net/test',
  //url: 'mongodb+srv://admin_mintic:fvNnks4v.Cz@hWV@minticciclo04.zgxfa.mongodb.net/test',
  host: '',
  port: 0,
  user: '',
  password: '',
  database: '',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MongosDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'Mongos';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.Mongos', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
