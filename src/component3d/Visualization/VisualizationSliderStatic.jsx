// import React, { useState } from 'react';

import { Link } from "react-router-dom";
import Heading from "../Heading/Heading";
import { LazyLoadImage } from "react-lazy-load-image-component";
const VisualizationSliderStatic = () => {
  return (
    <div className="bg-[#f1f4ed] py-3">
      <Heading
        className="pt-12 pb-10"
        titleClassName="w-[1500px]"
        title="ARCHITECTURAL VISUALIZATION"
      />
      <div className="2xl:container mx-auto">
        <div className="flex flex-col md:flex-row justify-items-center justify-center ">
          <Link to="/interior-visualization">
<<<<<<< HEAD
          <div className="  mx-2 cursor-pointer ">
            <div>
              <img
                src="/img/3d/slider/IV.webp"
=======
            <div className="  mx-2 cursor-pointer ">
              <div>
                {/* <img
                src="/img/3d/slider/IV.jpg"
>>>>>>> ba76b9bdf391add4390e5f2c657b92820704abcb
                className="w-full h-full object-cover "
              /> */}
                <LazyLoadImage
                  src="/img/3d/slider/IV.jpg"
                  className="w-full h-full object-cover "
                  effect="blur" />
              </div>
              <div className="w-full flex gap-3 pt-2 justify-center ">
                <h5 className="text-black font-semibold">
                  INTERIOR VISUALIZATION
                </h5>
                <img loading="lazy" className="h-6 z-30" src="/img/3d/slider/view.png" />
              </div>
            </div>
          </Link>
          <Link to="/exterior-visualization">
<<<<<<< HEAD
          <div className=" mx-2 cursor-pointer">
            <div>
              <img
                src="/img/3d/slider/EV.webp"
                className="w-full h-full object-cover "
              />
=======
            <div className=" mx-2 cursor-pointer">
              <div>
                <img
                  src="/img/3d/slider/EV.jpg"
                  className="w-full h-full object-cover "
                />
              </div>
              <div className="w-full flex gap-3  justify-center pt-2 ">
                <h5 className="text-black font-semibold">
                  EXTERIOR VISUALIZATION
                </h5>
                <img loading="lazy" className="h-6 z-30" src="/img/3d/slider/view.png" />
              </div>
>>>>>>> ba76b9bdf391add4390e5f2c657b92820704abcb
            </div>
          </Link>
          <Link to="/interior-visualization">
<<<<<<< HEAD
          <div className=" mx-2 cursor-pointer">
            <div>
              <img
                src="/img/3d/slider/VR.webp"
                className="w-full h-full object-cover opacity-90"
              />
=======
            <div className=" mx-2 cursor-pointer">
              <div>
                <img
                  src="/img/3d/slider/VR.jpg"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
              <div className="w-full flex gap-3 justify-center pt-2 ">
                <h5 className="text-black font-semibold">VR RENDERING</h5>
                <img loading="lazy" className="h-6 z-30" src="/img/3d/slider/view.png" />
              </div>
>>>>>>> ba76b9bdf391add4390e5f2c657b92820704abcb
            </div>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default VisualizationSliderStatic;
