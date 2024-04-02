import { ProjectItens } from "@/utils/ProjectItens";
import { LuArrowUpRightSquare } from "react-icons/lu";
import SectionTitle from "../SectionTitle";

export default function Projects(){
    return(
        <section 
            id="projects"
            className="w-full p-20 bg-[#fafafa] flex justify-center items-center"
        >
            <div className="w-[1024px] md:w-[400px]">

                <SectionTitle 
                    title="Projetos"
                    subTitle="Cada projeto é uma peça única de desenvolvimento 🧩"
                />

                <div className="w-full grid grid-cols-3 gap-10 mt-10 md:grid-cols-1">
                    {ProjectItens.map((project) => {
                        return(
                            <div className="">
                                <div className="w-full bg-[#f1f1f1] h-[214px] flex justify-center items-center">
                                    <img src={project.ProjectimgSource} className="w-[200px] rounded-sm" alt="" />
                                </div>
                                <div className="flex flex-col gap-2 mt-7">
                                    <h3 className="text-xl font-medium">{project.projectName}</h3>
                                    <a 
                                        href={project.projectUrl} 
                                        target="_blank"
                                        className="flex items-center gap-2 font-medium  transition hover:text-blue-600"
                                    >   
                                        <LuArrowUpRightSquare /> 
                                        Acessar
                                    </a>
                                    <p>{project.projectDesc}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}