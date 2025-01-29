import './styles.css';
import { AppInfoProps } from './types';

const AppInfo = ({ numberOfEmployees, recieveBonus }: AppInfoProps) => {
  return (
    <div className='app-info'>
      <h1>Employee Management at Company N</h1>
      <h2>Total number of employees: {numberOfEmployees}</h2>
      <h2>Will receive a bonus:  {recieveBonus}</h2>
    </div>
  );
};

export default AppInfo;
