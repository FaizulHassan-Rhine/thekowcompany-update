

import covisionLogo from "./image/Covision-Media-Logo.webp";
import nuregLogo from "./image/Nureg-Logo.webp"
import kowLogo from "./image/The-KOW-Company-Logo.webp"
import './style.css'

const FifthSection = () => {
    return (

        <div className='container'>
            <div className=''>
                <div className='fifth-section-image-container'>
                    <div className=' side-light'>
                        <div className='fifth-section-image-1'>
                            <img alt="COVISION" loading="lazy" src={"/img/partnership/COVISION_Image.webp"} className="max-w-[300px]" />
                        </div>
                        <div className='Fifth-section-logo-1'>
                            <img alt="COVISION-logo" loading="lazy" src={covisionLogo} />
                        </div>

                    </div>
                    <div className=' side-light'>
                        <div className='fifth-section-image-2'>
                            <img alt="NUREG" loading="lazy" src={"/img/partnership/NUREG_-Image.webp"} className="max-w-[300px]" />
                        </div>
                        <div className='Fifth-section-logo-2'>
                            <img alt="NUREG-logo" loading="lazy" src={nuregLogo} />
                        </div>
                    </div>

                    <div className=''>
                        <div className='fifth-section-image-3'>
                            <img alt="KOW-COMPANY" loading="lazy" src={"/img/partnership/KOW-COMPANY_image.webp"} className="max-w-[300px]" />
                        </div>
                        <div className='Fifth-section-logo-3'>
                            <img alt="KOW-COMPANY-logo"
                            loading="lazy" src={kowLogo} />
                        </div>
                    </div>
                </div>

                <div className='fifth-section-text px-2 md:px-0'>
                    <h1><span>Explore the Triumphant Trio in action!</span></h1>
                    <p>In a time when innovative collaborations lead to unmatched success, we’re excited to announce a pioneering partnership between Covision Media, Nureg GmbH, and The KOW Company. This trio unites expertise to provide an exceptional 3D content production experience. Covision Media stands out in the 3D scanning industry as a beacon of innovation. Their attention to detail and advanced equipment have established them as leaders in the field. Nureg GmbH builds on this foundation, transforming meticulous 3D scans into captivating content. They don’t just scan products; they bring them to life with raw 3D brilliance. Tommy Lenssen is more than a business partner; he’s a master at his field and a cherished friend, embodying the spirit of our collaboration. The KOW Company completes this triad, bringing passion and precision to content post-production. We scrutinize every frame, ensuring each pixel tells a compelling story. The result is not just a 3D visual but an unmatchable blend of art and technology. For brands and businesses, this means a significant improvement in the quality and precision of their 3D content. We’re crafting immersive experiences that connect with audiences on a deeper level. Our collaborative effort promises a seamless transition from concept to completion. Our vision is to redefine the 3D content production landscape. Together, we’re raising industry standards, offering our clients the pinnacle of innovation and quality. This partnership is more than a collaboration; it’s a commitment to a future that’s bright and extraordinary.</p>
                </div>
            </div>
        </div>


    );
};

export default FifthSection;