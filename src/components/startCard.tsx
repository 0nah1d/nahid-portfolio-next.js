import React, {JSX} from 'react';

const StartCard = (): JSX.Element => {
    return (
        <div className={'h-[200px] w-[500px] border-8 border-white text-white font-vt323 text-2xl select-none'}>
            <div className={'mt-5 text-center'}>
                <h1>Welcome to Nahid Portfolio Showcase {new Date().getFullYear()}</h1>
                <h2>
                    Click start to begin {' '}
                    <span className={'inline-block w-[14px] border-b-[3px] border-white animate-blink'}/>
                </h2>
            </div>

            <div className={'flex items-center justify-center mt-6'}>
                <button className={'border-4 border-white px-4 py-1 hover:bg-white hover:text-black'}>
                    START
                </button>
            </div>
        </div>
    );
};

export default StartCard;