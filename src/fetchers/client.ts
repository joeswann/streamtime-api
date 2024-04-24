import { objectToArray } from "../../helpers";
import axios from "axios";

const baseURL = "https://api.streamtime.net/";

const client = axios.create({
  baseURL,
  headers: {
    "content-type": "application/json",
    Authorization: `Bearer ${process.env.STREAMTIME_API_KEY}`,
  },
});

type StreamtimeQueryParams = {
  url: string;
  method?: string;
  params?: null | object;
  data?: null | object;
};

export const request = async (data: StreamtimeQueryParams) => {
  try {
    const { url, method = "post", params, data: requestData } = data;

    console.log("request", url);
    const response = await client.request({
      url,
      method,
      data: requestData,
      params,
    });

    return response.data;
  } catch (error) {
    console.log("error", error);
    return null;
  }
};

export const fetchAll: any = async (
  fetcher: any,
  args: any,
  results = [] as any,
  offset = 0,
  perPage = 500,
) => {
  const response = await fetcher({
    ...args,
    offset,
    maxResults: perPage,
  });

  const data =
    typeof response?.searchResults == "object"
      ? objectToArray(response?.searchResults)
      : response.searchResults;

  if (data?.length > 0) {
    const newOffset = offset + perPage;
    const allResults = [...results, ...data];

    return fetchAll(fetcher, args, allResults, newOffset);
  } else {
    // console.log("here", response);
    console.log("Fetched: ", results.length);
    return results;
  }
};
