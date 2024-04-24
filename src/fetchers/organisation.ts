import { StreamtimeOrganisation } from "../types/organisation";
import { request } from "./client";

export const fetchOrganisation = () =>
  request({
    method: "GET",
    url: `/v1/organisation`,
  }) as Promise<StreamtimeOrganisation>;
