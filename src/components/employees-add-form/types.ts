export interface InputDataState {
  name: string;
  salary: string;
}

export interface EmployeeAddFormProps {
  addEmployee: (inputData:InputDataState)=> void
}