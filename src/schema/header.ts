import { CollectionFormat } from "./collection-format";
import { SchemaBase } from "./schema-base";

export class Header extends SchemaBase {
  collectionFormat: CollectionFormat;
  multipleOf: number;
}