import cn from 'classnames';

import './styles.css';
import { EmployeesListItemProps } from './types';

const EmployeesListItem = ({name, salary,increase,onIncrease }: EmployeesListItemProps) => {
  const classNames = cn('list-group-item d-flex justify-content-between',{increase});

  return (
    <li className={classNames}>
      <span className='list-group-item-label ' onClick={onIncrease}>{name}</span>
      <input
        className='list-group-item-input'
        type='text'
        defaultValue={salary + '$'}
      />
      <div className='d-flex justify-content-center align-items-center'>
        <button type='button' className='btn-cookie btn-sm'>
          <i className='fas fa-cookie'></i>
        </button>

        <button className='btn-trash btn-sm'>
          <i className='fas fa-trash'></i>
        </button>
        <i className='fas fa-star'></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;
