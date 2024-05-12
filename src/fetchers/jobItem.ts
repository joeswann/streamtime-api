import { StreamtimeJobItem } from "../types";
import { StreamtimeSearchType } from "../types/search";
import { request } from "./client";

export const getJobItems = (jobId: string) =>
  request({
    method: "GET",
    url: `/v1/jobs/${jobId}/job_items`,
  });

export const createJobItem = (
  jobId: number,
  jobItem: Partial<StreamtimeJobItem>,
) =>
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

export const updateJobItem = (
  jobItemId: number,
  jobItem: Partial<StreamtimeJobItem>,
) =>
  request({
    method: "PUT",
    url: `/v1/job_items/${jobItemId}`,
    data: jobItem,
  });

export const deleteJobItem = (jobItemId: number) =>
  request({
    method: "DELETE",
    url: `/v1/job_items/${jobItemId}`,
  });

export const getJobPhases = (jobId: string) =>
  request({
    method: "GET",
    url: `/v1/jobs/${jobId}/job_phases`,
  });

export const createJobPhase = (
  jobId: number,
  jobPhase: Partial<StreamtimeJobItem>,
) =>
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
