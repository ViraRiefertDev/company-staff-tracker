interface Employee {
  name: string;
  salary: string;
  increase:boolean;
  id:string;
}

export interface EmployeesListProps {
  employeesData: Employee[];
  onIncrease: (id:string)=>void;
}
