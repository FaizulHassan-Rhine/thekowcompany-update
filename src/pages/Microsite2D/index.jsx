import React from 'react';
import './style.css'; 
import Navbar2DPortfolio from '../../component2dMicrosite/Navbar2DMicrosite/Navbar2DPortfolio';
import Footer2DPortfolio from '../../component2dMicrosite/Footer2DPortfolio';
import BodyContent from '../../component2dMicrosite/BodyContent/BodyContent';

const Microsite2DFinal = () => {
    return (
        <div className='font-plus-jakarta bg-[#F1F2F3] flex flex-col gap-6'>
            <Navbar2DPortfolio/>
            <BodyContent/>
            <Footer2DPortfolio/>
        </div>
    );
};

export default Microsite2DFinal;