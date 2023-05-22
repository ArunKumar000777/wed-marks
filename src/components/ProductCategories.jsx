import React from "react";
import productImage1 from "../assets/chair.png";
import productImage2 from "../assets/weddingStageImage2.jpeg";
import productImage3 from "../assets/catering.png";
import productImage4 from "../assets/flowers.png";

const ProductCategories = () => {
    return (
        <div className="grid min-h-[880px] grid-cols-1 lg:px-40 bg-light lg:grid-cols-2 pb-14 px-20">
            <div className="flex flex-col justify-center h-full">
                <h1 className="text-6xl font-bold leading-[70px] text-center">Includes Various Product Categories</h1>
                <p className="mt-6 text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore nam natus, dolorum,
                    laudantium quos enim perspiciatis asperiores tenetur voluptatum voluptas possimus in accusantium! Vitae
                    nam provident ab laboriosam. Velit!
                </p>
            </div>
            {/* image container */}
            <div className="flex flex-col justify-center h-full mt-14 gap-y-8 lg:mt-0">
                <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
                    <div className="w-[255px] h-[260px] bg-white  shadow-md hover:scale-105 hover:shadow-lg transition ease-in-out duration-500 -mt-10">
                        <img src={productImage1} alt="" className="w-full h-[220px] object-cover" />
                        <h4 className="mt-1 font-medium text-center text-gray-600">Chairs</h4>
                    </div>
                    <div className="w-[255px] h-[260px] bg-white border-4 border-white shadow-md hover:scale-105 hover:shadow-lg transition ease-in-out duration-500">
                        <img src={productImage2} alt="" className="w-full h-[220px] object-cover" />
                        <h4 className="mt-1 font-medium text-center text-gray-600">Wedding Walls</h4>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-8 mt-8 md:flex-row lg:mt-0">
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
