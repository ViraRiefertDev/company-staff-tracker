import EmployeesListItem from '../employees-list-item/EmployeesListItem';

import './styles.css';
import { EmployeesListProps } from './types';

const EmployeesList = ({ employeesData, onIncrease,onLike }: EmployeesListProps) => {
  const employees = employeesData.map((item) => {
    const {id, ...itemProps} =item
    return (
      <EmployeesListItem key={id} {...itemProps} onIncrease = {()=>{onIncrease(id)}} onLike = {()=>{onLike(id)}}/>
    );
  });

  return <ul className='app-list list-group'>{employees}</ul>;
};

export default EmployeesList;
