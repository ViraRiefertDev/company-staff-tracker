interface Employee {
  name: string;
  salary: string;
  increase:boolean;
  rise:boolean;
  id:string;
}

export interface EmployeesListProps {
  employeesData: Employee[];
  onToggleProp: (id:string, prop:'rise'|'increase')=>void;
}
