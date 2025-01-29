import EmployeesListItem from '../employees-list-item/EmployeesListItem';

import './styles.css';
import { EmployeesListProps } from './types';

const EmployeesList = ({ employeesData, onToggleProp }: EmployeesListProps) => {
  const employees = employeesData.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <EmployeesListItem
        key={id}
        {...itemProps}
        onToggleProp={(e) => {
          onToggleProp(
            id,
            e.currentTarget.getAttribute('data-toggle') as 'increase' | 'rise'
          );
        }}
      />
    );
  });

  return <ul className='app-list list-group'>{employees}</ul>;
};

export default EmployeesList;
