import type { IContactInfo } from "../common/IContactInfo";
import type IGenericCreateEntityDto from "../IGenericCreateEntityDto";

export interface IUserRegisterDto extends IGenericCreateEntityDto {
  Username: string;
  Email: string;
  FirstName: string | null;
  LastName: string | null;
  Password: string | null;
  Contacts: IContactInfo[];
}
