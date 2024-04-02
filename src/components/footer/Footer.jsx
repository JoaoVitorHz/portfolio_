import { FaSquarePhone } from "react-icons/fa6";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { LuArrowUpRightSquare } from "react-icons/lu";
import { IoLogoLinkedin } from "react-icons/io";
import SectionTitle from "../SectionTitle";

export default function Footer(){
    return(
        <section 
            id="footer"
            className="w-full p-20 bg-[#1e1e1e] flex justify-center items-center"
        >
            <div className="w-[1024px] lg:w-[820px]">

                <SectionTitle 
                    title="Contato"
                    subTitle="Não seja tímido! Entre em contado comigo! 👇"
                    subTitleColor="gray"
                />

                <div className="flex gap-10 mt-5 lg:flex-col">
                    <div className="flex items-center gap-5">
                        <div className="w-[65px] h-[65px] rounded-full bg-white flex justify-center items-center ">
                            <FaSquarePhone className="text-[#147efb] text-3xl"/>
                        </div>
                        <div className="text-gray-300">
                            <h6>Número</h6>
                            <span className="flex items-center gap-2">+55 (11) 99818-8091</span>
                        </div>
                    </div>
                  
                    <div className="flex items-center gap-5">
                        <div className="w-[65px] h-[65px] rounded-full bg-white flex justify-center items-center ">
                            <FaEnvelopeOpenText  className="text-[#147efb] text-3xl"/>
                        </div>
                        <div className="text-gray-300">
                            <h6>Email</h6>
                            <span className="flex items-center gap-2">vitorjoao39207@gmail.com</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-5">
                        <div className="w-[65px] h-[65px] rounded-full bg-white flex justify-center items-center ">
                            <IoLogoLinkedin   className="text-[#147efb] text-3xl"/>
                        </div>
                        <div className="text-gray-300">
                            <h6>Linkedin</h6>
                            <a 
                                href="https://www.linkedin.com/in/jo%C3%A3o-vitor-araujo-96a78522b"
                                target="_blank"
                                className="flex items-center gap-2 cursor-pointer hover:text-[#147efb] transition"
                            >  
                                <LuArrowUpRightSquare /> 
                                Ir para linkedin 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}