import { Info } from "./info";
import { Paths } from "./paths";
import { Schema } from "./schema";
import { SecurityScheme } from "./security-scheme";
import { Server } from "./server";

/** This is the root document object for the API specification. It combines what previously was the Resource Listing and API Declaration (version 1.2 and earlier) together into one document. */
export class Swagger {
  /** Specifies the Swagger Specification version being used. It can be used by the Swagger UI and other clients to interpret the API listing. The value MUST be "2.0". */
  swagger: string;
  /** Provides metadata about the API. The metadata can be used by the clients if needed. */
  info: Info;
  /** The host (name or ip) serving the API. This MUST be the host only and does not include the scheme nor sub-paths. It MAY include a port. If the host is not included, the host serving the documentation is to be used (including the port). The host does not support path templating. */
  host: string;
  /** The base path on which the API is served, which is relative to the host. If it is not included, the API is served directly under the host. The value MUST start with a leading slash (/). The basePath does not support path templating. */
  basePath: string;
  /** The transfer protocol of the API. Values MUST be from the list: "http", "https", "ws", "wss". If the schemes is not included, the default scheme to be used is the one used to access the Swagger definition itself. */
  schemes: string[];
  /** A list of MIME types the APIs can consume. This is global to all APIs but can be overridden on specific API calls. Value MUST be as described under Mime Types. */
  consumes: string[];
  /** A list of MIME types the APIs can produce. This is global to all APIs but can be overridden on specific API calls. Value MUST be as described under Mime Types. */
  produces: string[];
  /** The available paths and operations for the API. */
  paths: Paths;
  /** An object to hold data types produced and consumed by operations. */
  definitions: { [id: string]: Schema };
  /** Security scheme definitions that can be used across the specification. */
  securityDefinitions: { [id: string]: SecurityScheme };
}