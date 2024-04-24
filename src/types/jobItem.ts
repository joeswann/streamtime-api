export type StreamtimeJobItem = {
  id?: number;
  name: string;
  jobItemStatus: {
    id: number;
  };
  jobPhaseId: null | number;
  description?: string;
  sellRate?: number;
  costingMethod: {
    id: number;
  };
  timeAllocationMethod: {
    id: number;
  };
  totalPlannedMinutes: number;
  totalPlannedTimeExTax: number;
  estimatedStartDate: null | string;
  estimatedEndDate: null | string;
  isBillable: boolean;
};
