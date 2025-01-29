interface Employee {
  name: string;
  salary: string;
  increase:boolean;
  like:boolean;
  id:string;
}

export interface EmployeesListProps {
  employeesData: Employee[];
  onIncrease: (id:string)=>void;
  onLike: (id:string) => void;
}
