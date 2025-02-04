import React from 'react';

const Navbar2DPortfolio = () => {
    return (
        <div className='bg-[#155331] py-4 px-6 '>
            <div className='container mx-auto'>
                <div className='flex justify-between text-white'>
                    <h3 className='text-[16px] lg:text-2xl font-bold'>TKCL</h3>
                    <h3 className='text-[16px] lg:text-xl font-medium'>The KOW Company</h3>
                    <a href='https://thekowcompany.com/book-a-call' target='_blank'>
                    <button className='text-[12px] lg:text-base font-normal py-1 lg:py-2 px-4 border-white border-[2px] border-solid rounded'>Book a Call</button>
                    </a>
                </div>
            </div>
        </div>

    );
};

export default Navbar2DPortfolio;