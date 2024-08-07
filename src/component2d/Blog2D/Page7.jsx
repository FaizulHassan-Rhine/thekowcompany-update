import icon1 from "../../../public/img/Blog-Images/2fb.webp";
import icon2 from "../../../public/img/Blog-Images/2in.webp";
import icon3 from "../../../public/img/Blog-Images/2X.webp";



const Page7 = () => {
  return (
    <div className="bg-[#DEE2E2] py-28 ">
      <div className="container mx-auto ">
        <div className="flex justify-center items-center gap-5 md:gap-20">
          <div className="w-20">
            <img alt="icon" loading="lazy" src={icon1} />
          </div>
          <div className="w-20">
            <img alt="icon" loading="lazy" src={icon2} />
          </div>
          <div className="w-20">
            <img alt="icon" loading="lazy" src={icon3} />
          </div>
          {/* <div className="w-20 ">
            <img loading="lazy" src={icon4} />
            
          </div> */}
        </div>

      </div>
      <div className="pt-20">
        <div className="relative  border border-[#6E890B]">
          <h2 className="absolute flex -top-[12px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span className="bg-[#DEE2E2] px-12 py-1 text-3xl md:text-4xl text-kow-text-black text-center  font-bold">
              {`SHARE`}
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Page7;
