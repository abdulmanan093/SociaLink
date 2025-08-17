export type Member = {
  id: string;
  dateOfBirth: string;
  imageUrl?: string;
  userName: string;
  created: string;
  lastActive: string;
  gender: string;
  description?: string;
  city: string;
  country: string;
};

export type Photo = {
  id: number;
  url: string;
  publicId?: string;
  memberId: string;
};

export type EditableMember = {
  userName: string;
  description?: string;
  city: string;
  country: string;
};
