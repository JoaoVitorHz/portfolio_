import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFileArrowDown } from "react-icons/fa6";

export default function AboutMe(){
    return(
        <section className="w-full h-[calc(100vh-70px)] flex justify-center items-center">
            <div className="w-[1024px] ">

                <div className="flex gap-5 mb-10">
                    <div className="flex-1 h-full flex flex-col gap-5">
                        
                        <h1 className="text-3xl font-semibold">
                            Conheça mais sobre  
                            <strong className="bg-gradient-to-tr from-orange-400 via-red-600 text-transparent bg-clip-text"> João Vitor </strong>
                        </h1>

                        <p>
                            I recently graduated from the Carnegie Mellon University Master of Entertainment Technology program and joined Duolingo as a product designer.
                            <br/>
                            <br/>
                            I am a highly motivated and enthusiastic Product Designer with a strong passion for 3D and AR/VR design. I enjoy combining my artistic background with my technical skills to create innovative and creative solutions.
                            <br/>
                            <br/>
                            I have experience developing visionary concepts, conducting user research, and establishing product frameworks through the use of animated and interactive prototypes. Possessing a positive attitude and a growth-oriented mindset, I am constantly seeking opportunities to expand my knowledge and skills as a designer.
                        </p>
                    </div>
                    <div className="flex-1 flex justify-center items-start h-full">
                        <img className="w-[400px] rounded-md" src="/images06.png" alt="" />
                    </div>
                </div>

                <div className="flex items-center">
                    <span className="border-r-2 border-solid border-[rgba(45,46,50,.5)] mr-[70px] pr-[20px] font-semibold">Redes socias: </span>

                    <div className="flex gap-[25px] screen-800:gap-[15px] screen-768:grid screen-768:grid-cols-2">
                        <a 
                            href="https://github.com/JoaoVitorHz"
                            title="GitHub João Vitor"
                            target="_blank" 
                            className='flex justify-center items-center rounded-[50%] w-[55px] h-[55px] bg-white shadow-md hover:scale-[1.3] transition-[100ms] cursor-pointer '>
                            <FaGithub className="text-[24px]"/>
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/jo%C3%A3o-vitor-araujo-96a78522b" 
                            title="Linkedin João Vitor"
                            target="_blank" 
                            className='flex justify-center items-center rounded-[50%] w-[55px] h-[55px] bg-white shadow-md hover:scale-[1.3] transition-[100ms] cursor-pointer '>
                            <FaLinkedin className="text-[24px]"/>
                        </a>
                        <a 
                            href="/Curriculo João Vitor.pdf"
                            target="_blank" 
                            download="Currículo João Vitor"
                            title="Baixar Curriculo"
                            className='flex justify-center items-center rounded-[50%] w-[55px] h-[55px] bg-white shadow-md hover:scale-[1.3] transition-[100ms] cursor-pointer '>
                            <FaFileArrowDown className="text-[24px]"/>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    )
}
