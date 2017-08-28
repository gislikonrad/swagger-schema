import { ExternalDocumentation } from "./external-documentation";
import { Reference } from "./reference";
import { Parameter } from "./parameter";
import { Response } from "./response";

export class Operation {
  tags: string[];
  operationId: string;
  summary: string;
  description: string;
  externalDocs: ExternalDocumentation;
  consumes: string[];
  produces: string[];
  parameters: (Reference|Parameter)[];
  responses: { [id: string] : Response };
  schemes: string[];
  deprecates: boolean;
  security: { [id: string]: string[] };
}