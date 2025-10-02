import React from 'react';
import DropdownOption from "./DropdownOption.jsx";

const DropdownForm = ({name, id, currencies}) => {
    const updatedCurrencies = currencies.filter(cur => cur[1].length !== 0)

    return (
        <div>
            <form>
                <select name={name} id={id}>
                    {
                        updatedCurrencies.map((currency, index) => <DropdownOption key={index} currency={currency}></DropdownOption>)
                    }
                </select>
            </form>
        </div>
    );
};

export default DropdownForm;