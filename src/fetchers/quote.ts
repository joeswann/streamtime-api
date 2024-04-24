import { request } from "./client";

export const getQuote = (quoteId: number) =>
  request({
    method: "GET",
    url: `/v1/quotes/${quoteId}`,
  });

export const getQuoteLineItems = (quoteId: number) =>
  request({
    method: "GET",
    url: `/v1/quotes/${quoteId}/quote_line_items`,
  });

// SEARCH Quote Line Items
// SEARCH Quotes
