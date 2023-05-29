const ContactForm = () => {
    return (
        <div className={` grid lg:grid-cols-2 grid-cols-1 lg:px-52 lg:h-[880px] sm:px-16 px-12 h-[1013px] bg-light`}>
            {/* child1 */}
            <div className="flex flex-col justify-center">
                <h1 className="lg:text-5xl text-[40px] font-Playfair">Get in touch</h1>
                <p className="mt-6 md:text-xl">
                    Send us your enquiry and someone from WedMark will get in touch with you shortly.
                </p>
                <div className="bg-secondary w-14 h-[2px] mt-12"></div>
            </div>
            {/* child2 */}
            <div className="h-full lg:pl-5 mt-36">
                <form className="flex flex-col h-full gap-y-4">
                    <input
                        type="text"
                        placeholder="Your name"
                        className={`bg-gray-200 px-8 py-4 placeholder:text-text_black rounded-r-2xl rounded-l-2xl shadow-input_shadow placeholder:text-xl`}
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        className={` bg-gray-200 px-8 py-4 placeholder:text-text_black rounded-r-2xl rounded-l-2xl shadow-input_shadow placeholder:text-xl`}
                    />
                    <input
                        type="text"
                        placeholder="Phone"
                        className={` bg-gray-200 px-8 py-4 placeholder:text-text_black rounded-r-2xl rounded-l-2xl shadow-input_shadow placeholder:text-xl`}
                    />
                    <input
                        type="text"
                        placeholder="Subject"
                        className={` bg-gray-200 px-8 py-4 placeholder:text-text_black rounded-r-2xl rounded-l-2xl shadow-input_shadow placeholder:text-xl`}
                    />
                    <textarea
                        placeholder="Message"
                        rows={8}
                        className={` bg-gray-200 px-8 py-4 placeholder:text-text_black rounded-r-2xl rounded-l-2xl shadow-input_shadow placeholder:text-xl`}
                    />

                    <button
                        className="self-start px-8 py-2 text-xl bg-transparent border-2 rounded-l-full rounded-r-full text-secondary shadow-input_shadow hover:bg-secondary border-secondary hover:text-black"
                        disabled
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
