import { SecuritySchemeType } from "./security-scheme-type";

/** Allows the definition of a security scheme that can be used by the operations. Supported schemes are basic authentication, an API key (either as a header or as a query parameter) and OAuth2's common flows (implicit, password, application and access code). */
export class SecurityScheme {
  /** The type of the security scheme. Valid values are "basic", "apiKey" or "oauth2". */
  type: SecuritySchemeType;
  /** A short description for security scheme. */
  description?: string;
  /** The name of the header or query parameter to be used. */
  name?: string;
  /** The location of the API key. Valid values are "query" or "header". */
  in?: string;
  /** The flow used by the OAuth2 security scheme. Valid values are "implicit", "password", "application" or "accessCode". */
  flow?: string;
  /** The authorization URL to be used for this flow. This SHOULD be in the form of a URL. */
  authorizationUrl?: string;
  /** The token URL to be used for this flow. This SHOULD be in the form of a URL. */
  tokenUrl?: string;
  /** The available scopes for the OAuth2 security scheme. */
  scopes?: { [id: string]: string };
}