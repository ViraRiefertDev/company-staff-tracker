import { MouseEvent } from "react";
export interface EmployeesListItemProps {
  name: string;
  salary: string;
  increase:boolean;
  rise:boolean;
  onToggleProp:(e:MouseEvent<HTMLButtonElement>)=>void;

}
