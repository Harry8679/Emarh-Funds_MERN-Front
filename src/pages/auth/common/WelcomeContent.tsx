import React from 'react';

const WelcomeContent : React.FC = () => {
    return (
        <div className='flex flex-col items-center gap-2'>
            <img src="https://static.vecteezy.com/system/resources/previews/010/880/186/original/charity-hand-sign-inside-a-love-shape-international-day-of-charity-png.png" alt="charity" 
                className='w-72 h-60'
            />
            <h1 className="text-5xl text-[#FF5555] font-bold">EMARH - FUNDS</h1>
            <span className="text-sm text-gray-200">
                Happiness doesn't result from what we get, but from what we give.
            </span>
        </div>
    );
};

export default WelcomeContent;