export type StreamtimeJob = {
  id: number;
  company: {
    id: number;
    name: string;
    branchId: number;
    companyLeadUserId: number | null;
    companyStatus: {
      id: number;
      name: string;
    };
    branchName: string;
    rateCardId: number;
    rateCardName: string;
    taxNumber: string;
    phone1: string;
    phone2: string;
    websiteAddress: string;
    notes: string;
    physicalAddress: null;
    postalAddress: any;
    companyLabels: any[];
  };
  jobLeadUserId: number;
  rateCard: {
    id: number;
    name: string;
    currency: {
      id: string;
      name: string;
      symbol: string;
    };
  };
  isBillable: boolean;
  exchangeRate: string;
  branch: {
    id: number;
    name: string;
    externalName: string;
    taxNumber: string;
    address: string;
    active: boolean;
  };
  jobStatus: {
    id: number;
    name: string;
  };
  number: number | null;
  name: string;
  fullName: string;
  purchaseOrderNumber: string | null;
  createdUser: string;
  jobCreatedDate: string;
  estimatedStartDate: string | null;
  estimatedEndDate: string | null;
  completedDate: string;
  archivedDate: string | null;
  contact: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string | null;
    position: string | null;
    notes: boolean;
    active: boolean;
    companyId: number;
    contactStatus: {
      id: number;
      name: string;
    };
    contactLabels: any[];
  };
  budget: number;
  finalBudget: number;
  totalPlannedMinutes: number;
  totalPlannedTimeExTax: number;
  totalPlannedExpensesExTax: number | null;
  totalPlannedExpensesCostExTax: number | null;
  totalIncompleteMinutes: number | null;
  totalIncompleteTimeExTax: number | null;
  totalLoggedCostExTax: number;
  totalLoggedExTax: number;
  totalLoggedExpensesCostExTax: number;
  totalLoggedExpensesExTax: number;
  totalLoggedMinutes: number;
  totalLoggedTimeCostExTax: number;
  totalLoggedTimeExTax: number;
  totalInvoicedExTax: number;
  totalDraftInvoicesExTax: number;
  totalAwaitingPaymentInvoicesExTax: number;
  totalPaidInvoicesExTax: number;
  totalIssuedInvoicesExTax: number;
  totalApprovedQuoteExTax: number;
  users: {
    id: number;
    name: string;
  }[];
  jobLabels: {
    id: number;
    name: string;
    entityId: number | null;
    labelType: string | null;
    jobId: number;
  }[];
};

export type StreamtimeJobItem = {
  id: number;
  jobId: number;
  jobPhaseId: null;
  jobItemStatus: {
    id: number;
    name: string;
  };
  name: string;
  description: string;
  sellRate: string;
  costingMethod: {
    id: number;
    name: string;
  };
  isBillable: boolean;
  totalScheduledUsers: number;
  totalJobItemRoles: number;
  timeAllocationMethod: {
    id: number;
    name: string;
  };
  totalPlannedMinutes: number;
  totalIncompleteMinutes: number;
  totalLoggedMinutes: number;
  totalPlannedTimeExTax: number;
  totalLoggedTimeExTax: number;
  orderId: number;
  estimatedStartDate: null;
  estimatedEndDate: null;
  earliestStartDate: string;
  latestEndDate: string;
  completedDate: null;
  incompleteJobItemSubItems: number;
  completeJobItemSubItems: number;
};

export type StreamtimeJobItemUser = {
  id: number;
  jobItemId: number;
  userId: number;
  jobItemUserStatus: string;
  sellRate: string;
  totalPlannedMinutes: number | null;
  totalIncompleteMinutes: number | null;
  totalLoggedMinutes: number;
  totalPlannedTimeExTax: string | null;
  totalLoggedTimeExTax: number | null;
  completedDate: string | null;
  earliestStartDate: string | null;
  latestEndDate: string | null;
};
