import { request } from "./client";

export const getItem = (itemId: number) =>
  request({
    method: "GET",
    url: `/v1/items/${itemId}`,
  });

export const getItems = () =>
  request({
    method: "GET",
    url: `/v1/items`,
  });
