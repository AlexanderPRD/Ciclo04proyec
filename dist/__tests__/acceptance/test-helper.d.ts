import { Proyectoloopback4ApApplication } from '../..';
import { Client } from '@loopback/testlab';
export declare function setupApplication(): Promise<AppWithClient>;
export interface AppWithClient {
    app: Proyectoloopback4ApApplication;
    client: Client;
}
