import { SecuritySchemeType } from "./security-scheme-type";

export class SecuritySchemeTypes {
  static basic: SecuritySchemeType = 'basic';
  static apiKey: SecuritySchemeType = 'apiKey';
  static oauth2: SecuritySchemeType = 'oauth2';
}