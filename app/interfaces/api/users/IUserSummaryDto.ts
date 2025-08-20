import type IGeneric from "../IGeneric";

export interface IUserSummaryDto extends IGeneric {
  Username: string;
  Email: string;
  FirstName: string | null;
  LastName: string | null;
  DisplayName: string | null;
}
