import { SchemaBase } from "./schema-base";

export class Schema extends SchemaBase {
  $ref: string;
  title: string;
  items: Schema;
  required: string[];
  properties: { [id: string]: Schema }
}