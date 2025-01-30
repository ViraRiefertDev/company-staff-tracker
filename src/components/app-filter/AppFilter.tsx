import './styles.css';
import { AppFilterProps, ButtonsData } from './types';

const AppFilter = ({ filter, onFilterSelect }: AppFilterProps) => {
  const buttonData: ButtonsData = [
    { name: 'all', label: 'All employees' },
    { name: 'rise', label: 'For promotion' },
    { name: 'moreThen1000', label: 'Salary over $1000' },
  ];

  const buttons = buttonData.map(({ name, label }) => {
    const active = filter === name;
    const clazz = active ? 'btn-light' : 'btn-outline-light';
    return (
      <button
        className={`btn ${clazz}`}
        type='button'
        key={name}
        onClick={() => onFilterSelect(name)}
      >
        {label}
      </button>
    );
  });

  return (
    <div className='btn-group'>
      {buttons}
    </div>
  );
};

export default AppFilter;
