import { StreamtimeContact } from "../types/contact";
import { StreamtimeSearchType } from "../types/search";
import { request } from "./client";

export const getContact = (contactId: number) =>
  request({
    method: "GET",
    url: `/v1/contacts/${contactId}`,
  });

export const updateContact = (contact: StreamtimeContact) =>
  request({
    method: "PUT",
    url: `/v1/contacts/${contact.id}`,
    data: contact,
  });

export const createContact = (contact: StreamtimeContact) =>
  request({
    method: "POST",
    url: `/v1/contacts`,
    data: contact,
  });

export const searchContacts = (search: StreamtimeSearchType) =>
  request({
    method: "POST",
    url: `/v1/contacts/search`,
    data: search,
  });
