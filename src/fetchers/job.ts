import { StreamtimeJob } from "../types/job";
import { StreamtimeSearchType } from "../types/search";
import { request } from "./client";

export const fetchJob = (jobId: number) =>
  request({
    method: "GET",
    url: `/v1/jobs/${jobId}`,
  });

export const createJob = (job: Partial<StreamtimeJob>) =>
  request({
    method: "POST",
    url: `/v1/jobs`,
    data: job,
  });

export const updateJob = (job: Partial<StreamtimeJob>) =>
  request({
    method: "PUT",
    url: `/v1/jobs/${job.id}`,
    data: job,
  });

export const updateJobStatus = (jobId: number, jobStatusId: number) =>
  request({
    method: "PUT",
    url: `/v1/jobs/${jobId}/job_status`,
    params: {
      job_status_id: jobStatusId,
    },
  });

export const searchJobs = (search: StreamtimeSearchType) =>
  request({
    method: "POST",
    url: `/v1/jobs/search`,
    data: search,
  });

// SEARCH Jobs
// SEARCH Job Phases
// SEARCH Job Milestones
// Duplicate job
