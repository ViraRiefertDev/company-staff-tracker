import './styles.css';

const EmployeesListItem = () => {
  return (
    <li className='list-group-item d-flex justify-content-between'>
      <span className='list-group-item-label'>Vasya Pupkin</span>
      <input
        className='list-group-item-input'
        type='text'
        defaultValue='1000$'
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