interface Employee {
  name: string;
  salary: number;
  increase: boolean;
  rise: boolean;
  id: string;
}

export interface EmployeesListProps {
  employeesData: Employee[];
  onToggleProp: (id: string, prop: 'rise' | 'increase') => void;
  deleteEmployee: (id: string) => void;
}
