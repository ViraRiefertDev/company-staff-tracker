import { useState } from 'react';

import AppInfo from '../app-info/AppInfo';
import SearchPanel from '../search-panel/SearchPanel';
import AppFilter from '../app-filter/AppFilter';
import EmployeesList from '../employees-list/EmployeesList';
import EmployeesAddForm from '../employees-add-form/EmployeesAddForm';

import './styles.css';
import { Employee, EmployeesData, InputData } from './types';
import { v4 } from 'uuid';

const intitDataState = {
  employeesData: [
    { name: 'John C.', salary: 800, increase: false, rise: true, id: '1' },
    { name: 'Alex M.', salary: 3000, increase: false, rise: false, id: '2' },
    { name: 'Carl W.', salary: 15000, increase: false, rise: false, id: '3' },
  ],
};

type FilterStateType = 'all' | 'rise' | 'moreThen1000';

function Layout() {
  const [data, setData] = useState<EmployeesData>(intitDataState);
  const [term, setTerm] = useState<string>('');
  const [filter, setFilter] = useState<FilterStateType>('all');

  const numberOfEmployees = data.employeesData.length;

  const recieveBonus = data.employeesData.filter(
    (item) => item.increase
  ).length;

  const onToggleProp = (id: string, prop: 'rise' | 'increase') => {
    setData((prevState) => {
      const newArray = prevState.employeesData.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        } else {
          return item;
        }
      });
      return { employeesData: newArray };
    });
  };

  const addEmployee = (inputData: InputData) => {
    setData((prevValue) => {
      return {
        employeesData: [
          ...prevValue.employeesData,
          { ...inputData, increase: false, rise: false, id: v4() },
        ],
      };
    });
  };

  const deleteEmployee = (id: string) => {
    setData((prevValue) => {
      return {
        employeesData: prevValue.employeesData.filter((item) => item.id !== id),
      };
    });
  };

  const searchEmp = (items: Employee[], term: string): Employee[] => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => item.name.indexOf(term) > -1);
  };

  const onUpdateSearch = (term: string) => {
    setTerm(term);
  };

  const filterPost = (
    items: Employee[],
    filter: FilterStateType
  ): Employee[] => {
    switch (filter) {
      case 'rise':
        return items.filter((item) => item.rise);
      case 'moreThen1000':
        return items.filter((item) => item.salary > 1000);
      case 'all':
        return items;
    }
  };

  const onFilterSelect = (filter: FilterStateType) => {
    setFilter(filter);
  };

  const visibleData = filterPost(searchEmp(data.employeesData, term), filter);

  return (
    <div className='app'>
      <AppInfo
        numberOfEmployees={numberOfEmployees}
        recieveBonus={recieveBonus}
      />
      <div className='search-panel'>
        <SearchPanel onUpdateSearch={onUpdateSearch} />
        <AppFilter filter={filter} onFilterSelect={onFilterSelect} />
      </div>
      <EmployeesList
        employeesData={visibleData}
        onToggleProp={onToggleProp}
        deleteEmployee={deleteEmployee}
      />
      <EmployeesAddForm addEmployee={addEmployee} />
    </div>
  );
}

export default Layout;
