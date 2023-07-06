import React, { useState } from 'react';

const Filter = ({ availableStatuses, onFilter }) => {
  const [selectedStatus, setSelectedStatus] = useState('');

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <select
      value={selectedStatus}
      onChange={handleStatusChange}
      className='min-w-[150px] mb-[20px] inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none  rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600'
    >
      <option key='All' value='All'>All</option>
      {availableStatuses.map((status) => (
        <option key={status} value={status} >
          {status}
        </option>
      ))}
    </select>
  );
}

export default Filter;