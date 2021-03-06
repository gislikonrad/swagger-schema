import { Reference } from "./reference";
import { Response } from "./response";

/** A container for the expected responses of an operation. The container maps a HTTP response code to the expected response. It is not expected from the documentation to necessarily cover all possible HTTP response codes, since they may not be known in advance. However, it is expected from the documentation to cover a successful operation response and any known errors. */
export class Responses {
  /** The documentation of responses other than the ones declared for specific HTTP response codes. It can be used to cover undeclared responses. Reference Object can be used to link to a response that is defined at the Swagger Object's responses section. */
  default?: Response | Reference;
  [statusCode: string] : Response | Reference;
}