import React from "react";
import image2 from "../assets/weddingStageImage2.jpeg";
import { motion } from "framer-motion";

const About = () => {
    return (
        <motion.div
            className=" bg-light mt-10 pt-14 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* section1 */}
            <div className="container mx-auto h-auto md:h-[440px] lg:h-[540px] flex flex-col justify-center lg:px-40 px-20">
                <h1 className="text-center text-[60px] font-medium">We are WedMarks</h1>
                <h2 className="text-center text-[50px] font-light">We bring</h2>
                <h2 className="text-center text-[50px] font-medium">dream weddings</h2>
                <h2 className="text-center text-[50px] font-light">to life!</h2>
            </div>
            {/* section2 */}
            <div className="flex flex-col md:flex-row justify-center items-center lg:px-40 px-20 md:gap-x-5">
                <div className="md:w-1/2 lg:h-[627px] md:h-[500px] sm:h-[400px] flex flex-col justify-center lg:px-5">
                    <h3 className="text-3xl font-bold mb-4">About Us</h3>
                    <p className="mb-4 lg:text-2xl">
                        At Wedmarks, we specialize in wedding event management, dedicated to creating unforgettable moments
                        for your dream wedding. With meticulous planning and flawless execution, our experienced team
                        ensures that your special day is a true reflection of your unique love story.
                    </p>
                </div>
                <div className="md:w-1/2 lg:h-[620px] md:h-[500px] sm:h-[400px] flex flex-col justify-center">
                    <img src={image2} alt="" className="w-full h-auto" />
                </div>
            </div>
            {/* <div className="h-[627px] flex bg-blue-200">
                <div className="h-[507px] w-[782px]">
                    <h3>About Us</h3>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, suscipit aspernatur? Voluptas dicta
                        nostrum odio quis sint aliquid dignissimos, aspernatur suscipit at placeat facere natus, saepe
                        maxime explicabo perspiciatis! Consectetur?
                    </p>
                </div>
                <div className="w-[652px] h-[436px]">
                    <img src={image2} alt="" />
                </div>
            </div> */}
            {/* section3 */}
            <div className="h-36 mt-10 flex justify-between flex-wrap bg-white items-center px-10">
                <div className="flex flex-col">
                    <span>100</span>
                    <span>Wedding Vendors</span>
                </div>
                <div className="flex flex-col">
                    <span>200</span>
                    <span>Annual Weddings</span>
                </div>
                <div className="flex flex-col">
                    <span>1000</span>
                    <span>Wedding Venues</span>
                </div>
                <div className="flex flex-col">
                    <span>1000</span>
                    <span>Monthly Followers</span>
                </div>
            </div>
            {/* section4 */}
            <div className="flex flex-col md:flex-row-reverse justify-center items-center lg:px-40 px-20 md:gap-x-5">
                <div className="md:w-1/2 lg:h-[627px] md:h-[500px] sm:h-[400px] flex flex-col justify-center lg:px-5">
                    <h3 className="text-3xl font-bold mb-4">Whow We Are</h3>
                    <p className="mb-4 lg:text-2xl">
                        Wedmarks is a passionate team of experts in wedding event management. With meticulous planning and
                        flawless execution, we curate exceptional weddings that reflect your unique style. Trust us to
                        transform your vision into reality, delivering a personalized and extraordinary wedding day that
                        creates unforgettable memories.
                    </p>
                </div>
                <div className="md:w-1/2 lg:h-[620px] md:h-[500px] sm:h-[400px] flex flex-col justify-center">
                    <img src={image2} alt="" className="w-full h-auto" />
                </div>
            </div>
            {/* section4 */}
            <div className="flex flex-col md:flex-row justify-center items-center lg:px-40 px-20 md:gap-x-5">
                <div className="md:w-1/2 lg:h-[627px] md:h-[500px] sm:h-[400px] flex flex-col justify-center lg:px-5">
                    <h3 className="text-3xl font-bold mb-4">What We Offer</h3>
                    <p className="mb-4 lg:text-2xl">
                        At Wedmarks, we provide a full range of wedding services, from concept design and planning to venue
                        selection, vendor coordination, and flawless execution. With personalized solutions tailored to your
                        style, we create a seamless and unforgettable wedding experience, exceeding your expectations and
                        ensuring a perfect day to cherish forever.
                    </p>
                </div>
                <div className="md:w-1/2 lg:h-[620px] md:h-[500px] sm:h-[400px] flex flex-col justify-center">
                    <img src={image2} alt="" className="w-full h-auto" />
                </div>
            </div>
        </motion.div>
    );
};

export default About;
