// GET Invoice
// GET Invoice Line Items
// GET Invoice Payments

import { StreamtimeSearchType } from "../types/search";
import { request } from "./client";

// CREATE Payment
// UPDATE Invoice

// SEARCH Invoices Line Items
export const searchInvoiceLineItems = (search: StreamtimeSearchType) =>
  request({
    method: "POST",
    url: `/v1/invoice_line_items/search`,
    data: search,
  });
// SEARCH Invoices

export const searchInvoices = (search: StreamtimeSearchType) =>
  request({
    method: "POST",
    url: `/v1/invoices/search`,
    data: search,
  });

// GET Purchase Order
// GET Purchase Order Copy

export default {};
