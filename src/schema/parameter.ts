import { SchemaBase } from "./schema-base";
import { In } from "./in";
import { Schema } from "./schema";

export class Parameter extends SchemaBase {
  name: string;
  in: In;
  required: boolean;
  schema: Schema;
  enum: string[];
  allowEmptyValue: boolean;
  items: Schema;
  multipleOf: number;
}