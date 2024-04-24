import { StreamtimeSearchType } from "../types/search";
import { request } from "./client";

export const fetchUsers = () =>
  request({
    method: "GET",
    url: `/v1/users`,
  });

export const fetchUser = (userId: number) =>
  request({
    method: "GET",
    url: `/v1/users/${userId}`,
  });

export const getUserSavedSegments = (userId: number) =>
  request({
    method: "GET",
    url: `/v1/users/${userId}/saved_segments`,
  });

export const searchUsers = (search: StreamtimeSearchType) =>
  request({
    method: "POST",
    url: `/v1/users/search`,
    data: search,
  });
