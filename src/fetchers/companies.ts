import { StreamtimeCompany } from "../types/company";
import { StreamtimeSearchType } from "../types/search";
import { request } from "./client";

export const createCompany = (company: StreamtimeCompany) =>
  request({
    method: "POST",
    url: `/v1/companies`,
    data: company,
  });

export const updateCompany = (company: StreamtimeCompany) =>
  request({
    method: "PUT",
    url: `/v1/companies/${company.id}`,
    data: company,
  });

export const getCompany = (companyId: number) =>
  request({
    method: "GET",
    url: `/v1/companies/${companyId}`,
  });

export const getCompanyAddresses = (companyId: number) =>
  request({
    method: "GET",
    url: `/v1/companies/${companyId}/addresses`,
  });

export const getCompanyContacts = (companyId: number) =>
  request({
    method: "GET",
    url: `/v1/companies/${companyId}/contacts`,
  });

export const searchCompanies = (search: StreamtimeSearchType) =>
  request({
    method: "POST",
    url: `/v1/companies/search`,
    data: search,
  });
