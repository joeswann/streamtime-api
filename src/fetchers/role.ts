import { request } from "./client";

export const getRole = (roleId: number) =>
  request({
    method: "GET",
    url: `/v1/roles/${roleId}`,
  });

export const getRoles = () =>
  request({
    method: "GET",
    url: `/v1/roles`,
  });
