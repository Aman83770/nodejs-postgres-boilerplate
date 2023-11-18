import { DataSourceOptions } from 'typeorm';
import { CitiData } from '../entities/city-data';

const config: DataSourceOptions = {
  type: 'postgres',
  name: 'default',
  host: "localhost",
  port: 5432,
  username: "Amankumar",
  password: "test1234",
  database: "cities",
  synchronize: true,
  logging: true,
  entities: [CitiData],
  migrations: ['src/orm/migrations/**/*.ts'],
  subscribers: ['src/orm/subscriber/**/*.ts'],
//   cli: {
//     entitiesDir: 'src/orm/entities',
//     migrationsDir: 'src/orm/migrations',
//     subscribersDir: 'src/orm/subscriber',
//   },
};

export = config;
