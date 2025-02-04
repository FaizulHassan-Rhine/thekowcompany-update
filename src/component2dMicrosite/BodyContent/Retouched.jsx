import React from 'react';

const Retouched = () => {
    return (
        <div className='container mx-auto bg-white mt-9 '>
             <div className="  bg-white py-[36px]  ">
        <h1 className="w-full text-center text-[20px] lg:text-[36px] font-bold lg:leading-10 text-[#000] py-[23px] ">
        Try the Ai powered background replacement solution with Retouched.ai
        </h1>
        
      </div>

      <div>
      <div className="pb-10">
          
          <div className="w-full flex justify-center items-center ">
            <iframe
              className="bg-white h-[500px]  2xl:h-[720px] md:h-[700px]  w-full lg:w-[90%] border-[3px] lg:border-4 border-[#255646] rounded-xl"
              src="https://www.retouched.ai"
              title="Embedded Website"
              frameBorder="0"
            
              allowFullScreen
            />
          </div>
        </div>
      </div>
        </div>
    );
};

export default Retouched;