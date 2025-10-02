import React from 'react';

const InputField = ({setAmount}) => {

    const handleInput = (e) => {
        e.preventDefault();
        setAmount(e.target.value);
    }

    const handleOnSubmit = e => {
        e.preventDefault();
    }

    return (
        <div className='w-full'>
            <form onSubmit={handleOnSubmit}  className='border-1 border-gray-500 shadow-xl rounded-2xl'>
                <input  onChange={handleInput} className='focus:outline-none focus:border-none p-4 ' type="text" name="amount" id="amount" placeholder='Enter amoun to conver' />
            </form>
        </div>
    );
};

export default InputField;