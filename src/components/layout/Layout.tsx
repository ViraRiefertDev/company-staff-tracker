import { useState } from 'react';

import AppInfo from '../app-info/AppInfo';
import SearchPanel from '../search-panel/SearchPanel';
import AppFilter from '../app-filter/AppFilter';
import EmployeesList from '../employees-list/EmployeesList';
import EmployeesAddForm from '../employees-add-form/EmployeesAddForm';

import './styles.css';
import { EmployeesData } from './types';

function Layout() {
  const [data, setData] = useState<EmployeesData>({
    employeesData: [
      { name: 'John C.', salary: '800', increase: true, like:false, id: '1' },
      { name: 'Alex M.', salary: '3000', increase: false, like:false, id: '2' },
      { name: 'Carl W.', salary: '15000', increase: false, like:false, id: '3' },
    ],
  });

  const onIncrease = (id: string) => {
    setData((prevState) => {
      const newArray = prevState.employeesData.map((item) => {
        if (item.id === id) {
          return { ...item, increase: !item.increase };
        } else {
          return item;
        }
      });
      return { employeesData: newArray };
    });
  };

  const onLike = (id:string) => {
    setData((prevState) => {
      const newArray = prevState.employeesData.map((item) => {
        if (item.id === id) {
          return { ...item, like: !item.like };
        } else {
          return item;
        }
      });
      return { employeesData: newArray };
    });
  };

  return (
    <div className='app'>
      <AppInfo />
      <div className='search-panel'>
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList employeesData={data.employeesData} onIncrease = {onIncrease} onLike = {onLike}/>
      <EmployeesAddForm />
    </div>
  );
}

export default Layout;
