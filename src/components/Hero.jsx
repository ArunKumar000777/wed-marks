import React from "react";
import heroImage from "../assets/weddingImage3.jpeg";
import image1 from "../assets/wddingStageImage.jpeg";
import image2 from "../assets/weddingStageImage2.jpeg";
import image3 from "../assets/diamond.png";
const Hero = () => {
    return (
        <section>
            <img src={image3} alt="" className="absolute w-32 right-1/4 opacity-5 top-52" />
            <div className="flex items-center justify-between lg:min-h-[800px] py-[20px] px-10 lg:px-40 md:px-20  overflow-hidden flex-col-reverse lg:flex-row ">
                <div className="mt-8 lg:aspect-5/6 lg:mt-0">
                    <img
                        src={heroImage}
                        alt="heroImage"
                        className="h-full w-full object-cover rounded-tl-[60px] rounded-br-[60px] hover:scale-105 border-white border-8 transition ease-in-out duration-300 max-h-[550px]"
                    />
                </div>
                <div className="max-w-2xl mt-5 lg:pl-14 lg:mt-0">
                    <h1 className="text-4xl font-bold text-center lg:text-6xl lg:text-start">Perfect Weddings</h1>
                    <h1 className="mt-3 text-4xl font-bold text-center lg:text-6xl lg:text-start">Made Easy!</h1>
                    <p className="px-8 mt-6 text-center md:text-xl">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas eaque doloremque a excepturi
                        repudiandae autem maiores accusamus optio quidem, dicta adipisci minima similique tempora voluptatem
                        nesciunt corrupti maxime atque quis.
                    </p>
                </div>
            </div>

            {/* WHAT WE DO */}
            <div className="flex flex-col justify-center w-full px-20 mt-12 text-center lg:mt-32 lg:px-40 lg:flex-row lg:text-start ">
                <div className="lg:pr-24">
                    <h3 className="text-xl font-medium lg:text-2xl">About WedMark</h3>
                    <h1 className="lg:text-6xl text-4xl font-bold lg:leading-[70px] mt-4">What We do,We do With Passion</h1>
                    <p className="mt-6 text-xl lg:pr-4 ">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas eaque doloremque a excepturi
                        repudiandae autem maiores accusamus optio quidem, dicta adipisci minima similique tempora voluptatem
                        nesciunt corrupti maxime atque quis.
                    </p>
                    <button className="px-10 py-3 mt-8 text-base border-2 rounded-full shadow-md text-dark border-dark hover:text-light hover:bg-accent hover:border-none">
                        Learn More
                    </button>
                </div>
                {/* image section */}

                
                <div className="flex justify-center">
                    <div className="mt-8 lg:mt-0">
                        <div className="h-64 lg:w-96">
                            <img
                                src={image1}
                                alt=""
                                className="object-cover w-full h-full rounded-tr-[60px] border-4 border-white"
                            />
                        </div>
                        <div className="mt-6 lg:relative lg:w-60 lg:h-54 -top-16 right-20 lg:mt-0">
                            <img
                                src={image2}
                                alt=""
                                className="object-cover w-full h-full rounded-tl-[35px] rounded-br-[35px] border-4 border-white"
                            />
                        </div>
                        <div className="lg:relative lg:w-48 lg:h-28 -top-[180px] left-[180px] mt-6 lg:mt-0">
                            <img
                                src={heroImage}
                                alt=""
                                className="object-cover w-full h-full rounded-tl-[35px] rounded-br-[35px] border-4 border-white"
                            />
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default Hero;
