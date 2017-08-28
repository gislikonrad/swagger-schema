import { Header } from "./header";

export class Response {
  description: string;
  schema: string;
  headers: { [id: string] : Header };
}