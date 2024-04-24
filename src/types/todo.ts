import { StreamtimeJob, StreamtimeJobItemUser } from "./job";

export type StreamtimeTodo = {
  id: number;
  userId: number;
  loggedTimeStatus: {
    id: number;
    name: string;
  };
  date: string;
  completedDatetime: string;
  job: StreamtimeJob;
  jobItemUser: StreamtimeJobItemUser;
  itemName: string;
  notes: string;
  scheduleNotes: null;
  private: boolean;
  minutes: number;
  cost: null;
  totalCostExTax: string;
  totalExTax: string;
  jobLabels: string[];
};
