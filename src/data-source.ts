import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 54320,
    username: "postgres",
    password: "postgres",
    database: "postgres",
    synchronize: false,
    logging: false,
    entities: [User], // add your Entity here
    migrations: ['src/migration/**/*.ts'],
    subscribers: [],
})