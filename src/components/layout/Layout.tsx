import AppInfo from '../app-info/AppInfo';
import SearchPanel from '../search-panel/SearchPanel';
import AppFilter from '../app-filter/AppFilter';
import EmployeesList from '../employees-list/EmployeesList';
import EmployeesAddForm from '../employees-add-form/EmployeesAddForm';
import './styles.css';

function Layout() {
  return (
    <div className='app'>
      <AppInfo />
      <div className='search-panel'>
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList />
      <EmployeesAddForm />
    </div>
  );
}

export default Layout;