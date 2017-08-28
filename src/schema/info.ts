import { Contact } from "./contact";
import { License } from "./license";

export class Info {
  title: string;
  description?: string;
  termsOfService?: string;
  contact?: Contact;
  licence?: License;
  version: string;
}