export type StreamtimeInvoice = {
  id: number;
  createdUser: string;
  sentByUser: string;
  sentDate: string;
  company: any;
  jobId: number;
  name: string;
  number: string;
  reference: string;
  invoiceType: {
    id: number;
    name: string;
  };
  invoiceStatus: {
    id: number;
    name: string;
  };
  currencyCode: string;
  currencySymbol: string;
  exchangeRate: string;
  discount: string | null;
  instalment: string | null;
  invoiceCurrencyAmountPaidIncTax: string;
  invoiceCurrencyTotalAmountExTax: string;
  invoiceCurrencyTotalAmountTax: string;
  invoiceCurrencyTotalAmountIncTax: string;
  invoiceCurrencyBalance: number;
  jobCurrencyAmountPaidIncTax: number;
  jobCurrencyTotalAmountExTax: number;
  jobCurrencyTotalAmountIncTax: number;
  amountPaidIncTax: number;
  totalAmountExTax: number;
  totalAmountIncTax: number;
  balance: number;
  createdDatetime: string;
  invoiceDate: string;
  dueDate: string;
  paidDate: string;
  externalAccountingPlatformId: number;
  externalAccountingPlatformName: string;
  externalInvoiceId: string;
  sentTo: any[];
  invoiceLabels: string[];
};

export type StreamtimeInvoiceItem = {
  id: number;
  active: boolean;
  name: string;
  description: string | null;
  accountCode: string;
  quantity: string | null;
  unitRate: string | null;
  totalAmountExTax: string;
  totalAmountIncTax: string;
  orderId: number;
  taxName: string;
  taxRate: string;
  externalTaxRateId: string;
  invoiceId: number;
};
