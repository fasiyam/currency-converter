import React from 'react';
import findCurrPair from '../utils/FindCurrencyPair';

const ConversionResult = ({convertedAmount, convertCurrency, baseCurrency,  currencies, amount }) => {

    const finalBaseCurr = findCurrPair(baseCurrency, currencies);
    const finalConverCurr = findCurrPair(convertCurrency, currencies);

    return (
        <div className='p-4 bg-[#eef2ff] w-full border-l-4 border-[#6366f1] rounded-xl shadow-sm'>
            <p className='text-[#483bca] text-xl mb-2.5 '>Conversion Result</p>
            <div className='flex gap-2.5 items-center mb-4 text-[#312e81]'>
                <h1 className='text-4xl font-semibold'>{convertedAmount}</h1>
                <p className='text-2xl'>{finalConverCurr}</p>
            </div>
            <p>{`${amount} ${finalBaseCurr} equals 1295.40 ${finalConverCurr}`}</p>
        </div>
    );
};

export default ConversionResult;