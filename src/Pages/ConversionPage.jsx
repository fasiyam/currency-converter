import React, { use, useEffect, useState } from 'react';
import ConversionResult from '../Components/ConversionResult';
import DropdownForm from '../Components/DropdownForm';

const currenciesAPI = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json";


const ConversionPage = () => {
    const [currencies, setCurrencies] = useState([]);
    
    useEffect(() => {

        const getCurrencies = async () => {
            const res = await fetch(currenciesAPI);
            const resData = await res.json();
            const currencyCodesArray = Object.entries(resData);
            setCurrencies(currencyCodesArray);
        };

        getCurrencies();
    }, []);

    return (
        <div className='h-[100dvh] flex flex-col justify-center items-center '>
            <div className='flex flex-col items-center justify-center border-none shadow-2xl bg-white p-10 rounded-2xl'>
                <h1 className='text-[#4338ca] text-6xl mb-2.5'>Universal Currency Converter</h1>
                <p className='text-[#202020] mb-8'>Rates relative to a common base currency</p>

                <DropdownForm name="baseCurrency" id='baseCurrency' currencies={currencies}></DropdownForm>
                <DropdownForm name="convertCurrency" id="convertCurrency" currencies={currencies}></DropdownForm>
                <ConversionResult></ConversionResult>

            </div>
        </div>
    );
};

export default ConversionPage;