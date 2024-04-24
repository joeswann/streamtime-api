import { request } from "./client";

export const getBranch = (branchId: number) =>
  request({
    method: "GET",
    url: `/v1/branches/${branchId}`,
  });

export const getBranches = () =>
  request({
    method: "GET",
    url: `/v1/branches`,
  });
