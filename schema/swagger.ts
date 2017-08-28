import { Info } from "./info";
import { Path } from "./path";
import { Schema } from "./schema";
import { SecurityScheme } from "./security-scheme";

export class Swagger {
  swagger: string;
  info: Info;
  host: string;
  basePath: string;
  schemes: string[];
  consumes: string[];
  produces: string[];
  paths: { [id: string] : Path };
  definitions: { [id: string]: Schema };
  securityDefinitions: { [id: string]: SecurityScheme };
}