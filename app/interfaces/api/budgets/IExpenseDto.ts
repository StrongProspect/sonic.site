import type IGeneric from "../IGeneric";
import type { IUserSummaryDto } from "../users/IUserSummaryDto";
import type { IBudgetSummaryDto } from "./IBudgetDto";
import type { ExpenseStatus } from "./IExpense";

export interface IExpenseDto extends IGeneric {
  Name: string;
  Description: string | null;
  Amount: number;
  BudgetId: number;
  Budget?: IBudgetSummaryDto;
  SubmittedByUserId: number;
  SubmittedByUser?: IUserSummaryDto;
  ApprovedByUserId: number;
  ApprovedByUser?: IUserSummaryDto;
  ApprovedDate: Date;
  PaidDate: Date;
  Status: ExpenseStatus;
  Notes: string | null;
  Category: string | null;
  Vendor: string | null;
  ExpenseDate: Date;
  Attachments: string[];
}

// Summary DTO to prevent circular references
export interface IExpenseSummaryDto extends IGeneric {
  Name: string;
  Description: string | null;
  Amount: number;
  BudgetId: number;
  SubmittedByUserId: number;
  Status: ExpenseStatus;
  Category: string | null;
  ExpenseDate: Date;
}
