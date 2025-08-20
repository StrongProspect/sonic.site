import type IGenericCreateEntityDto from "../IGenericCreateEntityDto";

export interface IExpenseCreateDto extends IGenericCreateEntityDto {
  Name: string;
  Description: string | null;
  Amount: number;
  BudgetId: number;
  Notes: string | null;
  Category: string | null;
  Vendor: string | null;
  ExpenseDate: Date;
  Attachments: string[];

  // Note: SubmittedByUserId will be set automatically from the authenticated user
  // Status will default to Pending
}
