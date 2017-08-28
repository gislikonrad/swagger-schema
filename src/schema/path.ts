import { Operation } from "./operation";
import { Reference } from "./reference";
import { Parameter } from "./parameter";

export class Path {
  get?: Operation;
  put?: Operation;
  post?: Operation;
  delete?: Operation;
  options?: Operation;
  head?: Operation;
  patch?: Operation;
  parameters?: (Reference|Parameter)[];
}