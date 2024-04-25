import { StreamtimeJobItemUser } from "../types";
import { StreamtimeSearchType } from "../types/search";
import { request } from "./client";

export const getJobItemUsers = (jobItemId: number) =>
  request({
    method: "GET",
    url: `/v1/job_items/${jobItemId}/job_item_users`,
  });

export const getJobItemUser = (jobItemUserId: number) =>
  request({
    method: "GET",
    url: `/v1/job_item_users/${jobItemUserId}`,
  });

export const createJobItemUser = (
  jobItemId: number,
  jobItemUser: Partial<StreamtimeJobItemUser>,
) =>
  request({
    method: "POST",
    url: `/v1/job_items/${jobItemId}/job_item_users`,
    data: jobItemUser,
  });

export const updateJobItemUser = (
  jobItemUser: Partial<StreamtimeJobItemUser>,
) =>
  request({
    method: "PUT",
    url: `/v1/job_item_users/${jobItemUser.id}`,
    data: jobItemUser,
  });

export const searchJobItemUsers = (search: StreamtimeSearchType) =>
  request({
    method: "POST",
    url: `/v1/job_item_users/search`,
    data: search,
  });
