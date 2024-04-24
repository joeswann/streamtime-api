import { request } from "./client";

export const getRateCard = (rateCardId: number) =>
  request({
    method: "GET",
    url: `/v1/rate_cards/${rateCardId}`,
  });

export const getRateCards = () =>
  request({
    method: "GET",
    url: `/v1/rate_cards`,
  });
