import { config } from 'dotenv';

config();

export class Environment {
  /**
   * @description App Port
   */
  public static readonly PORT = 8000;

  /**
   * @description Database Host
   */
  public static readonly DB_HOST: string = process.env.DB_HOST;

  /**
   * @description Database Password
   */
  public static readonly DB_PASSWORD: string = process.env.DB_PASSWORD;

  /**
   * @description Database Name
   */
  public static readonly DB_NAME: string = process.env.DB_NAME;

  /**
   * @description App Port
   */
  public static readonly DB_USER: string = process.env.DB_USER;

  /**
   * @description App Environment - dev, prod
   */
  public static readonly ENV: string = process.env.ENV;
}
