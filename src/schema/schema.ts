import { Type } from "./type";
import { Format } from "./format";
import { ExternalDocumentation } from "./external-documentation";
import { Xml } from "./xml";

/** The Schema Object allows the definition of input and output data types. These types can be objects, but also primitives and arrays. This object is based on the JSON Schema Specification Draft 4 and uses a predefined subset of it. On top of this subset, there are extensions provided by this specification to allow for more complete documentation. */
export class Schema {
  /** Adds support for polymorphism. The discriminator is the schema property name that is used to differentiate between other schema that inherit this schema. The property name used MUST be defined at this schema and it MUST be in the required property list. When used, the value MUST be the name of this schema or any schema that inherits it. */
  discriminator?: string;
  /** Relevant only for Schema "properties" definitions. Declares the property as "read only". This means that it MAY be sent as part of a response but MUST NOT be sent as part of the request. Properties marked as readOnly being true SHOULD NOT be in the required list of the defined schema. Default value is false. */
  readOnly?: boolean;
  /** This MAY be used only on properties schemas. It has no effect on root schemas. Adds Additional metadata to describe the XML representation format of this property. */
  xml?: Xml;
  /** Additional external documentation for this schema. */
  externalDocs?: ExternalDocumentation;
  /** A free-form property to include an example of an instance for this schema. */
  example?: any;

  $ref?: string;
  title?: string;
  items?: Schema;
  required?: string[];
  properties?: { [id: string]: Schema }
  type?: Type;
  format?: Format;
  default?: any;
  description?: string;
  maximum?: number;
  exclusiveMaximum?: boolean;
  minimum?: number;
  exclusiveMinimum?: boolean;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  maxItems?: number;
  minItems?: number;
  uniqueItems?: boolean;
  enum?: string[];
}