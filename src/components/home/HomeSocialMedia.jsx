import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFileArrowDown } from "react-icons/fa6";

export default function HomeSocialMedia(){
    return(
        <div className="w-[500px] flex gap-5 mt-[25px] screen-768:w-[270px]">
            <a 
                href="https://github.com/JoaoVitorHz"
                title="GitHub João Vitor"
                target="_blank" 
                className='group flex justify-center items-center rounded-[50%] w-[55px] h-[55px] bg-white shadow-md hover:scale-[1.2] transition-[100ms] cursor-pointer'
            >
                <FaGithub className="text-[24px] group-hover:text-[#147efb] transition"/>
            </a>
            <a 
                href="https://www.linkedin.com/in/jo%C3%A3o-vitor-araujo-96a78522b" 
                title="Linkedin João Vitor"
                target="_blank" 
                className='group flex justify-center items-center rounded-[50%] w-[55px] h-[55px] bg-white shadow-md hover:scale-[1.2] transition-[100ms] cursor-pointer'
            >
                <FaLinkedin className="text-[24px] group-hover:text-[#147efb] transition"/>
            </a>
            <a 
                href="/Curriculo João Vitor.pdf"
                target="_blank" 
                download="Currículo João Vitor"
                title="Baixar Curriculo"
                className='group flex justify-center items-center rounded-[50%] w-[55px] h-[55px] bg-white shadow-md hover:scale-[1.2] transition-[100ms] cursor-pointer'
            >
                <FaFileArrowDown className="text-[24px] group-hover:text-[#147efb] transition"/>
            </a>
        </div>
    )
}