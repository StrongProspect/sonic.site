import type { IContactInfo } from "../common/IContactInfo";
import type IGeneric from "../IGeneric";

export interface IUserCreatedDto extends IGeneric {
  username: string;
  firstName: string | null;
  lastName: string | null;
  fullName: string | null;
  // contacts: Contact[];
  email: string | null;
  id: number;
  uuid: string;
}
