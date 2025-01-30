type FilterType = 'all'|'rise'|'moreThen1000'

export interface AppFilterProps {
  filter:FilterType,
  onFilterSelect: (filter:FilterType) => void;

}

interface ButtonData{
  name:FilterType,
  label:string,
}

export type ButtonsData = ButtonData[]

/* const buttonData = [
    { name: 'all', label: 'All employees' },
    { name: 'rise', label: 'For promotion' },
    { name: 'moreThen1000', label: 'Salary over $1000' },
  ]; */