import React from 'react';

const ConversionResult = () => {
    return (
        <div className='p-4 bg-[#eef2ff] w-full border-l-4 border-[#6366f1] rounded-xl shadow-sm'>
            <p className='text-[#483bca] text-xl mb-2.5 '>Conversion Result</p>
            <div className='flex gap-2.5 items-center mb-4 text-[#312e81]'>
                <h1 className='text-4xl font-semibold'>1295.40</h1>
                <p className='text-2xl'>Bangladeshi Taka</p>
            </div>
            <p>11 US Dollar equals 1295.40 Bangladeshi Taka</p>
        </div>
    );
};

export default ConversionResult;