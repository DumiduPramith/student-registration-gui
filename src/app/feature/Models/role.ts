export interface Role {
  value: string;
  viewValue: string;
}

export const roles: Role[] = [
  { value: 'student', viewValue: 'Student' },
  { value: 'academic', viewValue: 'Academic' },
  { value: 'management', viewValue: 'Management' },
  { value: 'admin', viewValue: 'Admin' },
];
