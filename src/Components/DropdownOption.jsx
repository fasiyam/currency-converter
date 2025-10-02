import React from 'react';

const DropdownOption = ({ currency }) => {
    return ( <option value={currency[0]}>{currency[1]}</option>);
};

export default DropdownOption;