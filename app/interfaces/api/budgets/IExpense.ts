import type IGeneric from "../IGeneric";
import type { IUser } from "../users/IUser";
import type { IBudget } from "./IBudget";

export interface IExpense extends IGeneric {
  Name: string;
  Description: string | null;
  Amount: number;
  BudgetId: number;
  Budget: IBudget;
  SubmittedByUserId: number;
  SubmittedByUser: IUser;
  ApprovedByUserId: number;
  ApprovedByUser: IUser;
  ApprovedDate: Date;
  PaidDate: Date;
  Status: ExpenseStatus;
  Notes: string | null;
  Category: string | null;
  Vendor: string | null;
  ExpenseDate: Date;
  // Receipt/documentation URLs
  Attachments: string[];
}

export enum ExpenseStatus {
  Pending,
  Approved,
  Void,
  Paid,
}
