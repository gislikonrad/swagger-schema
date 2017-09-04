import { SecuritySchemeType } from "src";

export class SecurityScheme {
  type: SecuritySchemeType;
  description: string;
  name: string;
  in: string;
  flow: string;
  authorizationUrl: string;
  tokenUrl: string;
  scopes: { [id: string]: string };
}