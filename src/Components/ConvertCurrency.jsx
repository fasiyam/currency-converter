import React from 'react';
import DropdownOption from "./DropdownOption.jsx";

const ConvertCurrency = ({name, id, currencies, setConvertCurrency, swapConvertCurr}) => {
    const updatedCurrencies = currencies.filter(cur => cur[1].length !== 0)

    const handleConvertCurrency = e => {
        setConvertCurrency(e.target.value)
    }

    return (
        <div>
            <form className='border-1 border-gray-400 p-2.5 rounded-2xl focus:border-0 outline-0'>
                <select name={name} id={id} onChange={handleConvertCurrency}>
                    {
                        updatedCurrencies.map((currency, index) => <DropdownOption key={index} currency={currency}></DropdownOption>)
                    }
                </select>
            </form>
        </div>
    );
};

export default ConvertCurrency;