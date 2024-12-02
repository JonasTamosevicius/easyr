export interface CreateOrganizationDto {
  invitationUid: string;
  organization: {
    name: string;
  };
  user: {
    email: string;
    password: string;
  };
}
