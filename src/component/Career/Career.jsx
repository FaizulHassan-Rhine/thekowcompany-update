import "./career.css";
import { SlCalender } from "react-icons/sl";
import { MdOutlineEmail } from "react-icons/md";
import { useState } from "react";
import CareerMail from "./careerMail";

const Career = () => {
    const [jobCircular] = useState([
        {
            id: 1,
            title: "Sales Executive",
            description: `<div class="job-des">
    <h1>We are Hiring</h1>
    <h4>Sales Executive for Marketing Team</h4>
    <p>The Sales Executive will be responsible for generating new business opportunities by identifying and qualifying potential leads, conducting cold outreach through emails and calls, and nurturing relationships to convert prospects into clients. This role requires a proactive and results-driven individual with excellent communication and interpersonal skills.</p>
    <h3>Key Responsibilities:</h3>
    <ul>
        <li><b>Lead Generation:</b> Identify potential leads through various channels, including online research, social media, networking events, and industry databases.</li>
        <li><b>Cold Outreach:</b> Conduct cold emails and calls to prospective clients to introduce The KOW Company’s 2D, 3D, and CGI Processing Services and identify their needs.</li>
        <li><b>Client Engagement:</b> Build and maintain relationships with prospects, providing them with relevant information and answering their queries to move them through the sales pipeline.</li>
        <li><b>Pipeline Management:</b> Track and manage leads in the CRM system, ensuring timely follow-up and accurate record-keeping.</li>
        <li><b>Market Research:</b> Stay informed about industry trends, competitor activities, and market conditions to identify new business opportunities.</li>
        <li><b>Collaboration:</b> Work closely with the marketing team and other departments to develop and implement effective sales strategies.</li>
        <li><b>Reporting:</b> Provide regular updates and reports on lead generation activities, sales progress, and results to the Sales Manager.</li>
    </ul>
    <h3>Qualifications:</h3>
    <ul>
        <li>Bachelor’s degree in Business, Marketing, or a related field.</li>
        <li>1+ years of experience in sales, lead generation, or business development.</li>
        <li>Freshers are also encouraged to apply. Flexible for extraordinary candidates.</li>
        <li>Excellent communication and interpersonal skills.</li>
        <li>Strong ability to conduct cold outreach and engage potential clients.</li>
        <li>Self-motivated, proactive, and results oriented.</li>
        <li>Ability to work independently and as part of a team.</li>
        <li>Strong organizational and time management skills.</li>
    </ul>
    <h3>Preferred Qualifications:</h3>
    <ul>
        <li>Experience in the image post-production sector.</li>
        <li>Familiarity with lead generation tools and techniques.</li>
        <li>Proficiency in CRM software and Microsoft Office Suite.</li>
        <li>Knowledge of digital marketing strategies and tools.</li>
    </ul>
    <h3>What We Offer:</h3>
    <ul>
        <li>Competitive salary and commission structure.</li>
        <li>Comprehensive benefits package.</li>
        <li>Opportunities for professional growth and career advancement.</li>
        <li>Supportive and collaborative work environment.</li>
        <li>Intensive training and development programs during the first 3 months.</li>
    </ul>
	</div>`,
            date: "31 July, 2024",
        },
        {
            id: 2,
            title: "UI/UX Designer",
            description: "",
            date: "01 August, 2024",
        },
        {
            id: 3,
            title: "Image Editor",
            description: "",
            date: "21 July, 2024",
        },
        {
            id: 4,
            title: ".NET Developer",
            description: "",
            date: "10 July, 2024",
        },
    ]);
    const [isOpen, setIsOpen] = useState(false);
    const [cvData, setCvData] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (data) => {
        setCvData(data);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const submitCvFunc = () => {
        setIsOpen(true);
        setIsModalOpen(false);
    };

    const onClose = () => {
        console.log("closed");
        setIsOpen(false);
    };

    const compareCurrentDate = (d) => {
        const currentDate = new Date();
        const selectedDate = new Date(d);
        // console.log("currentDate",  currentDate.getTime() < selectedDate.getTime());
        return currentDate.getTime() < selectedDate.getTime();
    };
    return (
        <>
            {/* <div className="career-bg h-[100vh]"> */}
            <div className="bg-gradient-to-t from-[#ebebeb] to-[#cdcbcc] h-[100vh]">
                <div className="container mx-auto relative h-screen">
                    {/* <div dangerouslySetInnerHTML={{ __html: jobCircular[0].description }} /> */}

                    <div className="flex flex-col items-center ">
                        <div className="w-full md:w-[450px] mt-[140px] md:mt-[120px]  text-center md:text-left">
                            <h1 className="text-[24px] font-bold text-[#57524B]">WE ARE</h1>
                            <h1 className="text-[90px] md:text-[120px] font-bold leading-[80px] md:leading-[100px] text-[#57524B] -ml-2">
                                HIRING
                            </h1>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className="w-full  md:w-[450px] ">
                            <h1 className=" text-center md:text-left text-[12px] text-green-700 font-semibold">
                                Note : Please select a position and submit your curriculum vitae
                                at your earliest convenience.
                            </h1>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className=" md:w-[450px] mt-5  border-black border-l-2 pl-3">
                            {jobCircular.map((item, index) => (
                                <>
                                    {
                                        compareCurrentDate(item.date) &&
                                        <div className="flex  items-center gap-2" key={index}>
                                            <button
                                                onClick={() => openModal(item)}
                                                className="bg-gray-300 border-green-700 px-4 hover:bg-green-600 hover:text-white py-1 mb-2 text-left rounded-md w-[140px]"
                                            >
                                                {item.title}
                                            </button>
                                            <div>
                                                <h1 className="text-xs ">
                                                    Deadline :{" "}
                                                    <span className="text-red-700 underline">
                                                        {item.date}
                                                    </span>
                                                </h1>
                                            </div>
                                        </div>
                                    }

                                </>
                            ))}
                        </div>
                    </div>

                    <div class="flex justify-center mt-7">
                        <div class="md:w-[450px]">
                            <div class="flex flex-col justify-center items-center md:items-start ">

                                <div class="flex flex-col justify-center items-center md:items-start pt-5 md:pt-0 ">
                                    <div class="flex justify-center items-center gap-2">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-green-800 text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="none" d="M0 0h24v24H0V0z"></path><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"></path></svg>
                                        <h1 class="text-sm  font-bold">career@thekowcompany.com</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*                     
                    <div className="absolute bottom-5 right-5">
                        <div className="flex justify-center items-center gap-1">
                            <MdOutlineEmail className="text-green-800 text-xl" />
                            <h1 className="text-[14px] font-semibold">
                                career@thekowcompany.com
                            </h1>
                        </div>
                    </div> */}

                    <div className="career-top-bg absolute top-0 left-[50%] md:left-[35%] -translate-x-[50%] md:-translate-x-[35%] w-20 h-32"></div>
                    <div className="career-bottom-bg absolute bottom-[25px] right-6 md:right-[20%] md:-translate-x-[20%] w-[200px] h-[170px] "></div>
                </div>
                {/* ------------------------------------main modal ----------------------------------- */}

                {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center">
                        <div className="absolute bg-gray-800 bg-opacity-50 inset-0" onClick={closeModal}></div>
                        <div className="bg-white rounded-lg mx-10 md:mx-0  h-[500px] overflow-y-auto shadow-xl transform transition-all w-full md:w-[700px] p-6">
                            <div className="flex justify-end">
                                <button
                                    onClick={closeModal}
                                    className="text-gray-400 hover:text-gray-600"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        ></path>
                                    </svg>
                                </button>
                            </div>

                            <div className="mt-4">
                                <h2 className="text-lg leading-6 font-medium text-gray-900">
                                    {cvData.title}
                                </h2>

                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: cvData.description,
                                    }}
                                />

                                <div className="flex justify-center">
                                    <button
                                        onClick={() => submitCvFunc()}
                                        className="bg-teal-600 px-5 py-2 font-semibold text-white rounded-md"
                                    >
                                        Apply Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <CareerMail cvData={cvData} isOpen={isOpen} onClose={onClose} />
        </>
    );
};

export default Career;
