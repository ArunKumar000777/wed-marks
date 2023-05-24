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
        <div className="bg-light mt-10 pt-14">
            <div className="grid lg:grid-cols-2 grid-cols-1">
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
                                    <h4>Thaavunul Khadham Welfare Association Building Thandekkad, Ponjassery (PO)</h4>
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
                                    <h4>Infoline: +(91) 81291 55551</h4>
                                </div>
                            </div>
                            {/*  */}
                            <div className="pt-10">
                                <div className="flex items-center gap-2 pb-2">
                                    <EmailIcon style={{ color: "#848F8B" }} />
                                    <h5 className="text-text_link_gray">Email</h5>
                                </div>
                                <div>
                                    <h4>lorem@.in</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  */}
                {/* child2 */}
                <div className="relative w-full lg:h-full md:h-[400px] h-[300px]  mt-14 lg:mt-0">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31236.406247824118!2d75.34926322995197!3d11.866685603593398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba422b9b2aca753%3A0x380605a11ce24f6c!2sKannur%2C%20Kerala!5e0!3m2!1sen!2sin!4v1684932983967!5m2!1sen!2sin"
                        width="100%"
                        height="650"
                        // style="border:0"
                        // allowFullscreen=""
                        loading="lazy"
                        // referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
            <ContactForm/>
        </div>
    );
};

export default Contact;
