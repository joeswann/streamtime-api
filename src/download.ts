import {
  searchConditionType,
  searchFilterGroup,
} from "./streamtime/types/search";
import {
  getBranches,
  getItems,
  getOrganisation,
  getRoles,
  getUsers,
  searchCompanies,
  searchContacts,
  searchJobItems,
  searchJobs,
  searchTodos,
} from "./streamtime/fetchers";
import { writeJSON } from "./helpers";
import { fetchAll } from "./streamtime/fetchers/client";

export const downloadOrganisation = async () => {
  const results = await getOrganisation();
  writeJSON("./public/store/organisation.json", results);
  return;
};

export const downloadUsers = async () => {
  const results = await getUsers();
  writeJSON("./public/store/users.json", results);
  return;
};

export const downloadBranches = async () => {
  const results = await getBranches();
  writeJSON("./public/store/branches.json", results);
  return;
};

export const downloadRoles = async () => {
  const results = await getRoles();
  writeJSON("./public/store/roles.json", results);
  return;
};

export const downloadCompanies = async () => {
  const results = await fetchAll(searchCompanies, {
    conditionMatchTypeId: searchConditionType.and,
    sortAscending: false,
    wildcardSearch: "",
    sortField: searchFilterGroup.companyName,
    filterGroups: [],
  });
  writeJSON("./public/store/companies.json", results);
  return;
};

export const downloadContacts = async () => {
  const results = await fetchAll(searchContacts, {
    conditionMatchTypeId: searchConditionType.and,
    sortAscending: false,
    wildcardSearch: "",
    sortField: searchFilterGroup.companyName,
    filterGroups: [],
  });
  writeJSON("./public/store/contacts.json", results);
  return;
};

export const downloadItems = async () => {
  const results = await getItems();
  writeJSON("./public/store/items.json", results);
  return;
};

export const downloadJobs = async () => {
  const results = await fetchAll(searchJobs, {
    conditionMatchTypeId: searchConditionType.and,
    sortField: searchFilterGroup.jobName,
    sortAscending: false,
    filterGroups: [],
    wildcardSearch: "",
  });
  writeJSON("./public/store/jobs.json", results);
  return;
};

export const downloadJobItems = async () => {
  const results = await fetchAll(searchJobItems, {
    conditionMatchTypeId: searchConditionType.and,
    sortField: searchFilterGroup.jobName,
    sortAscending: false,
    filterGroups: [],
    wildcardSearch: "",
  });
  writeJSON("./public/store/jobItems.json", results);
  return;
};

export const downloadTodos = async () => {
  const results = await fetchAll(searchTodos, {
    conditionMatchTypeId: searchConditionType.and,
    sortField: 1,
    sortAscending: false,
    filterGroups: [],
    wildcardSearch: "",
    // groupByField: "jobFullName",
  });
  writeJSON("./public/store/todos.json", results);
  return;
};
