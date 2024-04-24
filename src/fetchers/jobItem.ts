import { StreamtimeJobItem } from "../types/jobItem";
import { StreamtimeSearchType } from "../types/search";
import { request } from "./client";

export const getJobItems = (jobId: string) =>
  request({
    method: "GET",
    url: `/v1/jobs/${jobId}/job_items`,
  });

export const createJobItem = (jobId: number, jobItem: StreamtimeJobItem) =>
  request({
    method: "POST",
    url: `/v1/jobs/${jobId}/job_items`,
    data: jobItem,
  });

export const getJobItem = (jobItemId: number) =>
  request({
    method: "GET",
    url: `/v1/job_items/${jobItemId}`,
  });

export const updateJobItem = (jobItemId: number, jobItem: StreamtimeJobItem) =>
  request({
    method: "PUT",
    url: `/v1/job_items/${jobItemId}`,
    data: jobItem,
  });

export const getJobPhases = (jobId: string) =>
  request({
    method: "GET",
    url: `/v1/jobs/${jobId}/job_phases`,
  });

export const createJobPhase = (jobId: number, jobPhase: StreamtimeJobItem) =>
  request({
    method: "POST",
    url: `/v1/jobs/${jobId}/job_phases`,
    data: jobPhase,
  });

export const getJobPhase = (jobPhaseId: number) =>
  request({
    method: "GET",
    url: `/v1/job_phases/${jobPhaseId}`,
  });

export const updateJobPhase = (
  jobPhaseId: number,
  jobPhase: StreamtimeJobItem,
) =>
  request({
    method: "PUT",
    url: `/v1/job_items/${jobPhaseId}`,
    data: jobPhase,
  });

export const searchJobItems = (search: StreamtimeSearchType) =>
  request({
    method: "POST",
    url: `/v1/job_items/search`,
    data: search,
  });

// SEARCH Job Item Users
