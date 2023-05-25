import React from "react";
import productImage1 from "../assets/chair.png";
import productImage2 from "../assets/weddingStageImage2.jpeg";
import productImage3 from "../assets/catering.png";
import productImage4 from "../assets/flowers.png";
const Organizers = () => {
    return (
        <div className="grid min-h-[880px] grid-cols-1 lg:px-40 bg-light lg:grid-cols-2 pb-14 px-10 mt-12 lg:mt-0">
            <div className="flex flex-col justify-center h-full">
                <h1 className="lg:text-6xl text-4xl font-bold lg:leading-[70px] lg:text-center">
                    Meet Our Creative Event Organizer
                </h1>
                <p className="mt-6 lg:text-center">
                    With our team of talented and passionate event organizers, we are dedicated to turning your dream into a
                    reality. At WedMarks, we bring a fresh perspective and meticulous attention to detail to create
                    unforgettable wedding experiences.
                </p>
            </div>
            {/* image container */}
            <div className="flex flex-col justify-center h-full mt-14 gap-y-8 lg:mt-0">
                <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
                    <div className="lg:w-[255px] w-full h-[260px] bg-white  shadow-md hover:scale-105 hover:shadow-lg transition ease-in-out duration-500 -mt-10">
                        <img src={productImage1} alt="" className="w-full h-[220px] object-cover" />
                        <h4 className="mt-1 font-medium text-center text-gray-600">Chairs</h4>
                    </div>
                    <div className="lg:w-[255px] w-full h-[260px] bg-white border-4 border-white shadow-md hover:scale-105 hover:shadow-lg transition ease-in-out duration-500">
                        <img src={productImage2} alt="" className="w-full h-[220px] object-cover" />
                        <h4 className="mt-1 font-medium text-center text-gray-600">Wedding Walls</h4>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-8 mt-8 md:flex-row lg:mt-0">
                    <div className="lg:w-[255px] w-full h-[260px] bg-white border-4 border-white shadow-md hover:scale-105 hover:shadow-lg transition ease-in-out duration-500 -mt-10">
                        <img src={productImage3} alt="" className="w-full h-[220px] object-cover" />
                        <h4 className="mt-1 font-medium text-center text-gray-600">Catering</h4>
                    </div>
                    <div className="lg:w-[255px] w-full h-[260px] bg-white border-4 border-white shadow-md hover:scale-105 hover:shadow-lg transition ease-in-out duration-500">
                        <img src={productImage4} alt="" className="w-full h-[220px] object-cover" />
                        <h4 className="mt-1 font-medium text-center text-gray-600">Metal Circle & Flowers</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Organizers;
