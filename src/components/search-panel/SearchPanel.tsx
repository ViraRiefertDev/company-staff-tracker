import { ChangeEvent, useState } from 'react';
import './styles.css';
import { SearchPanelProps } from './types';

const SearchPanel = ({onUpdateSearch}:SearchPanelProps) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value
    setInputValue(term);
    onUpdateSearch(term);
  };

  return (
    <input
      type='text'
      className='form-control search-input'
      placeholder='Find an employee'
      value={inputValue}
      onChange={handleOnChange}
    />
  );
};

export default SearchPanel;
