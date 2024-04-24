export type StreamtimeJobItemUser = {
  id?: string;
  jobItemId: number;
  userId: number;
  jobItemUserStatus: {
    id: number;
  };
  sellRate: string;
  totalPlannedMinutes: number;
};
