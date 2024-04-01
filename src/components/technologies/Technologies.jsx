import SectionTitle from "../SectionTitle";
import CardTechnologies from "./CardTechnologies";

export default function Technologies(){
    return(
        <section className="w-full h-[calc(100vh-70px)] bg-white flex justify-center items-center">
            <div className="w-[1024px] ">
                <SectionTitle 
                    title="CONHECIMENTOS / TECNOLOGIAS"
                    subTitle="Todas as Tecnologias que domino / conheço 🐱‍👤"
                />

                <div className="flex gap-5 mt-10">
                   <CardTechnologies specialty="Front-End"/>
                   <CardTechnologies specialty="Back-End"/>
                   <CardTechnologies specialty="Other"/>
                </div>

            </div>
        </section>
        )
}