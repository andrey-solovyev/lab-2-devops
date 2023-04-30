module.exports = {
  type: `mysql`,
  host: process.env.MYSQL_HOST || `127.0.0.1`,
  port: 3306,
  username: `root`,
  password: `example`,
  database: `test`,
  entities: [`dist/**/*.entity{.ts,.js}`],
  subscribers: [`dist/**/*.subscriber{.ts,.js}`],
  synchronize: false,
  migrationsRun: true,
  logging: true,
  logger: `file`,
  migrationsTableName: `migrations_typeorm`,
  migrations: [`dist/src/db/migrations/*{.ts,.js}`],
  cli: {
    migrationsDir: `src/db/migrations`,
  },
};
