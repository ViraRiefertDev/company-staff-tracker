export interface EmployeesListItemProps {
  name: string;
  salary: string;
  increase:boolean;
  like:boolean;
  onIncrease:()=>void;
  onLike: ()=>void;
}
