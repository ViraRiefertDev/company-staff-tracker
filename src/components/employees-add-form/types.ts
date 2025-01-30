export interface InputDataState {
  name: string;
  salary: number|string;
}

export interface InputData {
  name: string;
  salary: number;
}

export interface EmployeeAddFormProps {
  addEmployee: (inputData:InputData)=> void
}