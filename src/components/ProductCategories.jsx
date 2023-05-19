import React from "react";
import productImage1 from "../assets/chair.png";
import productImage2 from "../assets/weddingStageImage2.jpeg";
import productImage3 from "../assets/catering.png";
import productImage4 from "../assets/flowers.png";

const ProductCategories = () => {
    return (
        <div className="grid h-[880px] grid-cols-2 px-40 bg-light">
            <div className="flex flex-col justify-center h-full">
                <h1 className="text-6xl font-bold leading-[70px] text-center">Includes Various Product Categories</h1>
            </div>
            <div className="flex flex-col justify-center h-full gap-y-8">
                <div className="flex gap-x-8 ">
                    <div className="w-[255px] h-[260px] bg-white  shadow-md hover:scale-105 hover:shadow-lg transition ease-in-out duration-500 -mt-10">
                        <img src={productImage1} alt="" className="w-full h-[220px] object-cover" />
                        <h4 className="mt-1 font-medium text-center text-gray-600">Chairs</h4>
                    </div>
                    <div className="w-[255px] h-[260px] bg-white border-4 border-white shadow-md hover:scale-105 hover:shadow-lg transition ease-in-out duration-500">
                        <img src={productImage2} alt="" className="w-full h-[220px] object-cover" />
                        <h4 className="mt-1 font-medium text-center text-gray-600">Wedding Walls</h4>
                    </div>
                </div>
                <div className="flex gap-x-8">
                    <div className="w-[255px] h-[260px] bg-white border-4 border-white shadow-md hover:scale-105 hover:shadow-lg transition ease-in-out duration-500 -mt-10">
                        <img src={productImage3} alt="" className="w-full h-[220px] object-cover" />
                        <h4 className="mt-1 font-medium text-center text-gray-600">Catering</h4>
                    </div>
                    <div className="w-[255px] h-[260px] bg-white border-4 border-white shadow-md hover:scale-105 hover:shadow-lg transition ease-in-out duration-500">
                        <img src={productImage4} alt="" className="w-full h-[220px] object-cover" />
                        <h4 className="mt-1 font-medium text-center text-gray-600">Metal Circle & Flowers</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCategories;
