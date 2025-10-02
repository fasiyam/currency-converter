import React, { use, useEffect, useState } from 'react';
import ConversionResult from '../Components/ConversionResult';
import InputField from '../Components/InputField';
import BasseCurrency from '../Components/BaseCurrency';
import ConvertCurrency from '../Components/ConvertCurrency';

const currenciesAPI = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json";


const ConversionPage = () => {
    const [currencies, setCurrencies] = useState([]);
    const [baseCurrency, setBaseCurrency] = useState('');
    const [convertCurrency, setConvertCurrency] = useState('');
    const [convertedAmount, setConvertedAmount] = useState('');
    const [amount, setAmount] = useState('');
    const [baseCurrConversionData, setBaseCurrConversionData] = useState([])


    useEffect(() => {

        if(!baseCurrency || !convertCurrency){
            return
        }

        const baseCurrConversionRate = async () => {
            const res = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${baseCurrency}.json`);
            const resData = await res.json();
            const ratesData = Object.entries(resData[baseCurrency])
            setBaseCurrConversionData(ratesData);
        };

        baseCurrConversionRate();
    }, [baseCurrency, convertCurrency]);


    
    useEffect(() => {

        const getCurrencies = async () => {
            const res = await fetch(currenciesAPI);
            const resData = await res.json();
            const currencyCodesArray = Object.entries(resData);
            setCurrencies(currencyCodesArray);
        };

        getCurrencies();
    }, []);


    useEffect(() => {

        const calculateConvertedAmount = () => {
            const numericAmount = parseFloat(amount);
            if (!numericAmount || numericAmount <= 0 || !convertCurrency || baseCurrConversionData.length === 0) {
                setConvertedAmount('');
                return;
            }

            const ratePair = baseCurrConversionData.find(([code]) => code === convertCurrency);

            if (ratePair) {
                const exchangeRate = ratePair[1];

                const result = numericAmount * exchangeRate;

                setConvertedAmount(result.toFixed(2));
            } else {
                setConvertedAmount('Rate unavailable');
            }
        };

        calculateConvertedAmount();
        
    }, [amount, baseCurrConversionData, convertCurrency]); 


    return (
        <div className='h-[100dvh] flex flex-col justify-center items-center '>
            <div className='flex flex-col items-center justify-center border-none shadow-2xl bg-white p-10 rounded-2xl space-y-10 max-w-[660px]'>
                <h1 className='text-[#4338ca] text-4xl mb-2.5 font-bold'>Universal Currency Converter</h1>
                <p className='text-[#202020] mb-8'>Rates relative to a common base currency</p>

                <InputField setAmount={setAmount}></InputField>

                <div className='flex gap-10'>
                    <div>
                        <p className='text-xl font-semibold'>From</p>
                        <BasseCurrency name="baseCurrency" id='baseCurrency' currencies={currencies} setBaseCurrency={setBaseCurrency}></BasseCurrency>
                    </div>
                    <div>
                        <p className='text-xl font-semibold'>To</p>
                        <ConvertCurrency name="convertCurrency" id="convertCurrency" currencies={currencies} setConvertCurrency={setConvertCurrency}></ConvertCurrency>
                    </div>
                </div>
                <ConversionResult amount={amount} convertedAmount={convertedAmount} convertCurrency={convertCurrency}  baseCurrency={baseCurrency} currencies={currencies}></ConversionResult>

            </div>
        </div>
    );
};

export default ConversionPage;