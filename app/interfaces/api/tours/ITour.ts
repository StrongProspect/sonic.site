import type { IEvent } from "../events/IEvent";
import type IGeneric from "../IGeneric";
import type { IUser } from "../users/IUser";

export interface ITour extends IGeneric {
  Name: string;
  Description: string | null;
  StartCity: string;
  EndCity: string;
  StartDate: Date;
  EndDate: Date;
  Website: string | null;
  Sponsor: string | null;
  IsActive: boolean;
  Shows: IEvent[];
  Artists: IUser[];
}
