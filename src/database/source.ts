import { DataSource } from "typeorm";
import { File } from "../entities/file.entity";

export const dataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "root",
  password: "password",
  database: "test",
  entities: [File],
  migrations: [],
  synchronize: true,
  // migrations: [`${process.cwd()}/dist/migrations/*.ts`],
  // migrationsRun: true
});
