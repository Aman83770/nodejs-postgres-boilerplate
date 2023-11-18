import { DataSourceOptions } from 'typeorm';
import { CitiData } from '../entities/CitiData';

const config: DataSourceOptions = {
  type: 'postgres',
  host: "localhost",
  port: 5432,
  username: "Amankumar",
  password: "test1234",
  database: "cities",
  synchronize: true,
  logging: true,
  entities: [CitiData],
  // migrations: ['src/orm/migrations/**/*.ts'],
  // subscribers: ['src/orm/subscriber/**/*.ts'],
};

export = config;
