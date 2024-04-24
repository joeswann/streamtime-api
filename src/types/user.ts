export type StreamtimeUser = {
  id: number;
  email: string;
  branch: {
    id: number;
    name: string;
    externalName: string;
    taxNumber: string;
    address: string;
    active: boolean;
  };
  role: {
    id: number;
    name: string;
  } | null;
  displayName: string;
  firstName: string;
  lastName: string;
  jobTitle: string | null;
  phoneNumber: string | null;
  userStatus: {
    id: number;
    name: string;
  };
  costRate: string;
  billableRate: string;
  hoursWorkedMonday: string;
  hoursWorkedTuesday: string;
  hoursWorkedWednesday: string;
  hoursWorkedThursday: string;
  hoursWorkedFriday: string;
  hoursWorkedSaturday: string;
  hoursWorkedSunday: string;
  labels: {
    id: number;
    name: string;
    entityId: number;
    labelType: {
      id: number;
      name: string;
    };
  }[];
};
