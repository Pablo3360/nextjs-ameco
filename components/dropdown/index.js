import React, { useState } from 'react';
import {dropdown,dropdownToggle,dropdownMenu} from './dropdown.module.css'

const Dropdown = ({placeholder,options}) => {
  // const [selectedOption, setSelectedOption] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionSelect = (option) => {
    // setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={dropdown}>
      <button className={dropdownToggle} onClick={() => setIsOpen(!isOpen)}>
        {placeholder}
      </button>
      {isOpen && (
        <ul className={dropdownMenu}>
          {options.map((option) => (
            <li key={option} onClick={() => handleOptionSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
