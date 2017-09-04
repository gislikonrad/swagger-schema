import { Path } from "src";

/** Holds the relative paths to the individual endpoints. The path is appended to the basePath in order to construct the full URL. The Paths may be empty, due to ACL constraints. */
export class Paths {
  /** A relative path to an individual endpoint. The field name MUST begin with a slash. The path is appended to the basePath in order to construct the full URL. Path templating is allowed. */
  [ path: string ]: Path
}