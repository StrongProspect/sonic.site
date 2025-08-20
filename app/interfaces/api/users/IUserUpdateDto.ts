import type { IContactInfo } from "../common/IContactInfo";

export interface IUserUpdateDto {
  Username: string;
  Email: string;
  FirstName: string;
  LastName: string;
  IsAdmin: boolean;
  Contacts: IContactInfo[];
}
