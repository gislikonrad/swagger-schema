import { Type} from './type';
import { Format} from './format';
import { CollectionFormat } from "./collection-format";

export class Items {  
  /** The internal type of the array. The value MUST be one of "string", "number", "integer", "boolean", or "array". Files and models are not allowed. */
  type: Type;
  /** The extending format for the previously mentioned type. */
  format?: Format;
  /** 
   * Required if type is "array". 
   * Describes the type of items in the array.
   */
  items?: Items;
  /**
   * Determines the format of the array if type array is used. Possible values are:
   *  - csv - comma separated values foo,bar.
   *  - ssv - space separated values foo bar.
   *  - tsv - tab separated values foo\tbar.
   *  - pipes - pipe separated values foo|bar.
   Default value is csv.
   */
  collectionFormat?: CollectionFormat;  
  /** Declares the value of the item that the server will use if none is provided. (Note: "default" has no meaning for required items.) See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-6.2. Unlike JSON Schema this value MUST conform to the defined type for the data type. */
  default?: any;
  /** See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.2. */
  maximum?: number;
  /** See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.2. */
  exclusiveMaximum?: boolean;
  /** See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.3. */
  minimum?: number;
  /** See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.3. */
  exclusiveMinimum?: boolean;
  /** See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.2.1. */
  maxLength?: number;
  /** See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.2.2. */
  minLength?: number;
  /** See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.2.3. */
  pattern?: string;
  /** See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.3.2. */
  maxItems?: number;
  /** See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.3.3. */
  minItems?: number;
  /** See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.3.4. */
  uniqueItems?: boolean;
  /** See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.5.1. */
  enum?: string[];
  /** 	See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.1. */
  multipleOf?: number;
}