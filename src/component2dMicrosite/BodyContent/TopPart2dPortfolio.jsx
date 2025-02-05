import React from 'react';

const TopPart2dPortfolio = () => {
    return (
        <div className='container mx-auto '>
            <div className='bg-white py-8 px-9 rounded-xl'>
                <div className='flex flex-col gap-[200px] lg:gap-[260px] 2xl:gap-[360px]'>
                    <div>
                    <div className='text-center md:text-left text-[40px] md:text-[50px] lg:text-[100px] 2xl:text-[160px] text-[#737373] lg:leading-[100px] 2xl:leading-[176px] font-bold'>
                        <h1>Portfolio of</h1>
                        <h1>2D Services</h1>
                       
                    </div>
                    <div className='flex flex-col items-start  gap-10 pt-5'>
                        <h1 className='text-[36px] font-bold leading-[111%] text-[#155331]'>Industry-Leading Image Editing for Unparalleled Brand Impact</h1>
                       <a> <button className='bg-[#1E1E1E] text-white py-2 px-4 w-[280px] h-[64px] text-[24px] rounded-xl'>Explore Full Portfolio</button></a>
                    </div>
                    </div>

                    <div className='text-2xl lg:text-4xl 2xl:text-5xl text-center md:text-right font-bold text-[#737373]'>
                        <p>Offerd by The KOW Company Ltd.</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default TopPart2dPortfolio;