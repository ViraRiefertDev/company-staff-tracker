import { useState } from 'react';

import AppInfo from '../app-info/AppInfo';
import SearchPanel from '../search-panel/SearchPanel';
import AppFilter from '../app-filter/AppFilter';
import EmployeesList from '../employees-list/EmployeesList';
import EmployeesAddForm from '../employees-add-form/EmployeesAddForm';

import './styles.css';
import { EmployeesData, InputData } from './types';
import { v4 } from 'uuid';

const intitDataState = {
  employeesData: [
    { name: 'John C.', salary: 800, increase: false, rise: true, id: '1' },
    { name: 'Alex M.', salary: 3000, increase: false, rise: false, id: '2' },
    { name: 'Carl W.', salary: 15000, increase: false, rise: false, id: '3' },
  ],
};

function Layout() {
  const [data, setData] = useState<EmployeesData>(intitDataState);
  const [term, setTerm] = useState<string>('');


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

  const searchEmp = (items: EmployeesData, term: string) => {
    if (term.length === 0) {
      return items;
    }
    return {employeesData: items.employeesData.filter((item) => item.name.indexOf(term) > -1)};
  };

  const onUpdateSearch = (term: string) => {
    setTerm(term);
  };

  const filterPost = (items:EmployeesData, filter: string) =>{
    switch(filter){
      case 'rise':
        return items.employeesData.filter((item)=> item.rise);
        case 'moreThen1000':
          return items.employeesData.filter((item)=> item.salary>1000)
    }
  }

  const visibleData:EmployeesData = searchEmp(data,term);

  return (
    <div className='app'>
      <AppInfo
        numberOfEmployees={numberOfEmployees}
        recieveBonus={recieveBonus}
      />
      <div className='search-panel'>
        <SearchPanel onUpdateSearch={onUpdateSearch} />
        <AppFilter />
      </div>
      <EmployeesList
        employeesData={visibleData.employeesData}
        onToggleProp={onToggleProp}
        deleteEmployee={deleteEmployee}
      />
      <EmployeesAddForm addEmployee={addEmployee} />
    </div>
  );
}

export default Layout;
