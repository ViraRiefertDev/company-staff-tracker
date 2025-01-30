import { ChangeEvent, FormEvent, useState } from 'react';

import './styles.css';
import { EmployeeAddFormProps, InputData, InputDataState } from './types';

const initInputState = {
  name: '',
  salary: '',
};

const EmployeesAddForm = ({ addEmployee }: EmployeeAddFormProps) => {
  const [inputData, setInputData] = useState<InputDataState>(initInputState);
  const { name, salary } = inputData;

  const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputData.name !== '' && !isNaN(Number(inputData.salary))) {
      addEmployee({
        ...inputData,
        salary: Number(inputData.salary),
      } as InputData);
    }
    setInputData(initInputState);
  };

  return (
    <div className='app-add-form'>
      <h3>Add a new employee</h3>
      <form className='add-form d-flex' onSubmit={handleSubmit}>
        <input
          type='text'
          className='form-control new-post-label'
          placeholder='What is his/her name?'
          name='name'
          value={name}
          onChange={onValueChange}
        />
        <input
          type='text'
          className='form-control new-post-label'
          placeholder='Salary in $'
          name='salary'
          value={salary}
          onChange={onValueChange}
        />
        <button className='btn btn-outline-light'>Add</button>
      </form>
    </div>
  );
};

export default EmployeesAddForm;
