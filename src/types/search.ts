import {
  StreamtimeConditionTypeEnum,
  StreamtimeFilterGroupEnum,
  StreamtimeValueMatchTypesEnum,
} from "./enum";

type StreamtimeFilter = {
  valueMatchTypeId: StreamtimeValueMatchTypesEnum;
  value: number | string | boolean;
};

type StreamtimeFilterGroup = {
  conditionMatchTypeId: StreamtimeConditionTypeEnum;
  filterGroupTypeId: StreamtimeFilterGroupEnum;
  filters: StreamtimeFilter[];
};

export type StreamtimeSearchType = {
  conditionMatchTypeId: StreamtimeConditionTypeEnum;
  filterGroups: StreamtimeFilterGroup[];
  wildcardSearch: string;
  sortField: number;
  sortAscending: boolean;
  maxResults: number;
  offset?: number;
};

export type StreamtimeSearchTodosType = {
  conditionMatchTypeId: StreamtimeConditionTypeEnum;
  filterGroups: StreamtimeFilterGroup[];
  wildcardSearch: string;
  sortField: number;
  sortAscending: boolean;
  maxResults: number;
  offset?: number;
  groupByField?: "jobFullName";
};

export const searchConditionType = {
  and: 1,
  or: 2,
};

export const searchLabelType = {
  job: 1,
  quote: 2,
  invoice: 3,
  loggedExpense: 4,
  company: 5,
  contact: 6,
  user: 7,
};

export const searchFilterGroup = {
  companyName: 1,
  jobName: 2,
  jobStatus: 3,
  teamMember: 4,
  date: 5,
  minutes: 6,
  amount: 7,
  itemName: 8,
  expenseName: 9,
  jobItemStatus: 10,
  contactName: 12,
  jobStartDate: 13,
  jobDueDate: 14,
  jobTotalLoggedExTax: 15,
  jobTotalPlannedExTax: 16,
  jobTotalLoggedMinutes: 17,
  jobTotalPlannedMinutes: 18,
  jobBudget: 19,
  jobTotalInvoicedExTax: 20,
  jobDaysPastDueDate: 22,
  jobDaysUntilDueDate: 23,
  budgetVariance: 24,
  jobNumber: 25,
  invoiceStatus: 26,
  invoiceNumber: 27,
  invoicePaidDate: 28,
  invoiceTotalAmountExTax: 29,
  invoiceTotalAmountIncTax: 30,
  invoiceTotalAmountPaidIncTax: 31,
  invoiceReference: 32,
  invoiceDueDate: 33,
  invoiceBalance: 34,
  invoiceDate: 35,
  quoteStatus: 36,
  quoteNumber: 37,
  quoteDate: 38,
  quoteTotalAmountExTax: 39,
  quoteTotalAmountIncTax: 61,
  createdUser: 40,
  expenseCompany: 41,
  expenseReference: 42,
  expenseQuantity: 43,
  expenseContactName: 44,
  expenseContactEmail: 45,
  expenseDescription: 46,
  expenseTotalCost: 47,
  expenseTotalSell: 48,
  billableStatus: 49,
  jobLabel: 50,
  jobCreatedDate: 51,
  jobTotalLoggedCostExTax: 52,
  jobTotalLoggedTimeExTax: 54,
  jobTotalLoggedTimeCostExTax: 55,
  jobTotalExpensesCostExTax: 56,
  jobTotalLoggedExpensesExTax: 57,
  jobTotalLoggedProfitExTax: 58,
  jobTotalLoggedTimeProfitExTax: 59,
  jobTotalExpensesProfitExTax: 60,
  quoteLabel: 63,
  expenseLabel: 62,
  expenseType: 64,
  expenseStatus: 65,
  purchaseOrderRequiredDate: 66,
  purchaseOrderNumber: 67,
  purchaseOrderAmountPaidIncTax: 69,
  purchaseOrderBalance: 70,
  currencyCode: 68,
  invoiceAmountPaidIncTax: 73,
  jobProfitMargin: 75,
  jobId: 76,
  contactEmail: 77,
  contactPhoneNumber: 78,
  contactPosition: 79,
  companyTaxNumber: 80,
  companyWebsiteAddress: 81,
  jobItemStartDate: 82,
  jobItemEndDate: 83,
  jobItemUserStatus: 84,
  toDoStatus: 85,
  jobItemId: 86,
  jobItemUserId: 87,
  invoiceLabel: 89,
  jobPhaseName: 90,
  jobItemCompletedDate: 91,
  rateCardName: 92,
  jobPurchaseOrderNumber: 93,
  branchName: 94,
  totalDraftInvoicesExTax: 95,
  totalAwaitingPaymentInvoicesExTax: 96,
  totalPaidInvoicesExTax: 97,
  totalIssuedInvoicesExTax: 98,
  jobMilestoneId: 99,
  jobMilestoneDate: 100,
  jobMilestoneName: 101,
  jobItemDueDate: 102,
  toDoScheduled: 103,
  toDoCompleted: 104,
  jobCompletedDate: 105,
  quoteApprovedDate: 106,
  quoteDeclinedDate: 107,
  sentToAccountingPlatform: 108,
  hasBeenSent: 109,
  sentDate: 110,
  contactFullName: 111,
  contactFirstName: 112,
  contactLastName: 113,
  companyStatus: 114,
  contactStatus: 115,
  jobBudgetVariancePercentage: 116,
  jobTotalPlannedExpensesCostExTax: 117,
  jobTotalPlannedExpensesExTax: 118,
  companyLabel: 120,
  contactLabel: 121,
  // jobTotalPlannedExTax: 122,
  userDisplayName: 123,
  userEmail: 124,
  userBranchName: 125,
  userRoleName: 126,
  userStatus: 127,
  userLabel: 128,
  exchangeRate: 129,
  jobLead: 130,
  companyLead: 131,
  invoiceType: 132,
  billable: 133,
  jobArchivedDate: 134,
  nonBillablePlannedMinutes: 135,
  nonBillableLoggedMinutes: 136,
  nonBillablePlannedTimeExTax: 137,
  nonBillableLoggedTimeExTax: 138,
  companyId: 139,
  userBranchId: 140,
  toDoIsPersonal: 143,
  roleId: 146,
  jobBranchId: 147,
  rateCardId: 148,
  jobLeadUserId: 149,
  companyLeadUserId: 150,
  jobItemOverBudget: 151,
  quoteId: 154,
  invoiceId: 155,
  invoiceCreatedDate: 157,
  quoteCreatedDate: 158,
};

export const searchInvoiceStatus = {
  draft: 1,
  awaitingPayment: 2,
  paid: 3,
  voided: 5,
  creditNote: 8,
};

export const searchQuoteStatus = {
  draft: 5,
  pendingApproval: 1,
  approved: 2,
  declined: 3,
};

export const searchExpenseStatus = {
  draft: 1,
  sent: 2,
  paid: 3,
  external: 5,
};

export const searchJobStatus = {
  paused: 5,
  inPlay: 1,
  done: 2,
  archived: 4,
};

export const searchJobItemStatus = {
  paused: 1,
  inPlay: 4,
  done: 2,
};

export const searchJobItemUserStatus = {
  paused: 1,
  inPlay: 4,
  done: 2,
};

export const searchTodoStatus = {
  incomplete: 1,
  complete: 2,
};

export const searchValueMatchTypes = {
  equals: 1,
  notEquals: 2,
  contains: 3,
  doesNotContain: 4,
  greaterThan: 5,
  lessThan: 6,
  between: 7,
  anyValue: 8,
  overBudget: 9,
  thisWeek: 15,
  lastWeek: 16,
  thisMonth: 17,
  lastMonth: 18,
  jobItemIsComplete: 19,
  jobItemIsPlanning: 20,
  zeroOrNull: 21,
  jobItemIsScheduled: 22,
  isExpense: 23,
  isPurchaseOrder: 24,
  noValue: 27,
  booleanTrue: 28,
  booleanFalse: 29,
  nextWeek: 30,
  nextMonth: 31,
  lastQuarter: 32,
  thisQuarter: 33,
  nextQuarter: 34,
  lastYear: 35,
  thisYear: 36,
  nextYear: 37,
};
