import { DocType } from "src/app/@shared/enums/doc-type";
import { Role } from "src/app/@shared/enums/role";

export interface User {
  id?: String;
  name: String;
  email: String;
  phone: String;
  docType: DocType;
  docNumber: Number;
  password: String;
  role: Role;
}
