import { TokenEntity } from 'src/entities/token.entity';
import { Environment } from 'src/utils/Environment';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

type ConfigType = {
  DATABASE: Partial<MysqlConnectionOptions>;
};

export const CONFIG: ConfigType = {
  DATABASE: {
    type: 'mysql',
    host: Environment.DB_HOST,
    port: 3306,
    username: Environment.DB_USER,
    password: Environment.DB_PASSWORD,
    database: Environment.DB_NAME,
    entities: [TokenEntity],
    synchronize: true,
  },
};
