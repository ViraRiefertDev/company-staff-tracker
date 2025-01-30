export interface Employee {
  name: string;
  salary: number;
  increase:boolean;
  rise:boolean;
  id:string;
}

export interface EmployeesData {
  employeesData: Employee[];
}

export interface InputData {
  name:string,
  salary:number,
}