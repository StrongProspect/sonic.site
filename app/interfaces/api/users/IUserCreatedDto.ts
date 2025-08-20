import type { IContactInfo } from "../common/IContactInfo";
import type IGeneric from "../IGeneric";

export interface IUserCreatedDto extends IGeneric {
  Username: string;
  FirstName: string | null;
  LastName: string | null;
  FullName: string | null;
  Contacts: IContactInfo[];
  Email: string;
}
