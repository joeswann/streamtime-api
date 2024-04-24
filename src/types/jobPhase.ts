export type StreamtimeJobItem = {
  jobItemStatus: {
    id: number;
  };
  name: string;
  description: string;
  sellRate: number;
  costingMethod: {
    id: number;
  };
  timeAllocationMethod: {
    id: number;
  };
  totalPlannedMinutes: number;
  totalPlannedTimeExTax: number;
  estimatedStartDate: "2018-05-18";
  estimatedEndDate: "2018-05-19";
};
