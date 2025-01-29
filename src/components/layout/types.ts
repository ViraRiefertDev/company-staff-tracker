interface Employee {
  name: string;
  salary: string;
  increase:boolean;
  like:boolean;
  id:string;
}

export interface EmployeesData {
  employeesData: Employee[];
}
