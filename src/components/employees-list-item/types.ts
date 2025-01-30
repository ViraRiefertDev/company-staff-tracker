import { MouseEvent } from 'react';
export interface EmployeesListItemProps {
  name: string;
  salary: number;
  increase: boolean;
  rise: boolean;
  onToggleProp: (e: MouseEvent<HTMLButtonElement>) => void;
  deleteEmployee: () => void;
}
