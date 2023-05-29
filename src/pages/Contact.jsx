import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ApartmentIcon from "@mui/icons-material/Apartment";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
// import Contact from "@/component/Contact";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";

const Contact = () => {
    // lg:min-h-[950px]
    return (
        <div className="pt-20 bg-light">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* child1 */}
                <div>
                    {/* <div className="h-[86px] flex items-center lg:pl-28 pl-16">
                        <Link to="/" className="text-base text-text_link_gray lg:text-xl">
                            Home
                        </Link>
                        <ChevronRightIcon style={{ color: "#848F8B" }} />
                        <Link to="/contact" className="text-base text-text_link_gray lg:text-xl">
                            Contact Us
                        </Link>
                    </div> */}

                    <div className="flex justify-center w-full px-16 lg:px-0">
                        <div className=" w-[455px]">
                            <h3>Let&apos;s Talk about Events!</h3>
                            <div className="pt-14">
                                {/*  */}
                                <div className="flex items-center gap-2 pb-2">
                                    <ApartmentIcon style={{ color: "#848F8B" }} />
                                    <h5 className="text-text_link_gray">WebMark</h5>
                                </div>
                                <div>
                                    <h4>Kunnumkai chittarikkal Kasaragod dist</h4>
                                </div>
                                <div>
                                    <h4>Pin-683 547</h4>
                                </div>
                            </div>
                            <div className="pt-10">
                                <div className="flex items-center gap-2 pb-2">
                                    <CallIcon style={{ color: "#848F8B" }} />
                                    <h5 className="text-text_link_gray">For trade enquiries</h5>
                                </div>
                                <div>
                                    <a href="tel:7907456800" target="_blank">
                                        <h4>Infoline: +(91) 9747834369</h4>
                                    </a>
                                    <h4>Dubai: +971582975256</h4>
                                </div>
                            </div>
                            {/*  */}
                            <div className="pt-10">
                                <div className="flex items-center gap-2 pb-2">
                                    <EmailIcon style={{ color: "#848F8B" }} />
                                    <h5 className="text-text_link_gray">Email</h5>
                                </div>
                                <div>
                                    <a href="mailto:philip@wedmarkevents.com">
                                        <h4>philip@wedmarkevents.com</h4>
                                    </a>
                                    <a href="mailto:philip@wedmarkevents.com">
                                        <h4>dominic@wedmarkevents.com</h4>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  */}
                {/* child2 */}
                <div className="relative w-full lg:h-full md:h-[400px] h-[300px]  mt-14 lg:mt-0">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.2864509014526!2d75.27865757472223!3d12.296486187960324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4672dbf09e2bb%3A0xd6ae07f8abbbea14!2sKunnumkai!5e0!3m2!1sen!2sin!4v1685261258111!5m2!1sen!2sin"
                        width="100%"
                        height="650"
                        // style="border:0;"
                        // allowfullscreen=""
                        loading="lazy"
                        // referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
            <hr className="bg-dark_gray" />
            <ContactForm />
        </div>
    );
};

export default Contact;
