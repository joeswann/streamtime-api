export type StreamtimeContact = {
  id?: number;
  firstName: string;
  lastName?: string;
  email: string;
  phoneNumber?: string;
  position?: string;
  companyId: number;
  active: boolean;
  contactStatus: { id: number; name: string };
};
