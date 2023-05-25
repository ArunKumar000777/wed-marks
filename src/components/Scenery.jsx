import React from "react";
import productImage2 from "../assets/weddingStageImage2.jpeg";
import productImage3 from "../assets/catering.png";
import productImage4 from "../assets/flowers.png";
const Scenery = () => {
    return (
        <div className="lg:min-h-[880px] bg-light lg:px-40 px-10 mt-10">
            {/* <div> */}
            <h1 className="lg:text-6xl text-4xl font-bold max-w-[800px] container mx-auto">
                Unrivaled scenery, memories that last forever
            </h1>
            {/* </div> */}
            {/* image container */}
            <div className="flex flex-col mt-8 lg:mt-20 lg:justify-between gap-x-6 md:flex-row">
                <div>
                    <img src={productImage2} alt="" className="aspect-32/27 max-h-[540px] rounded-3xl shadow-xl" />
                </div>
                <div className="flex flex-col">
                    <div className="lg:w-[445px] mt-6 lg:mt-0">
                        <img src={productImage3} alt="" className="w-full rounded-lg shadow-lg aspect-22/15" />
                    </div>
                    <div className="lg:w-[445px] mt-6">
                        <img src={productImage4} alt="" className="object-cover w-full rounded-lg shadow-lg aspect-44/21" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Scenery;
