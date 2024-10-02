import SectionTitle from "../SectionTitle";
import CardTechnologies from "./CardTechnologies";

export default function Technologies(){
    return(
        <section 
            id="technologies"
            className="w-full min-h-[calc(100vh-70px)] h-auto bg-white flex justify-center items-center xl:py-20"
        >
            <div className="w-[1024px] lg:w-[820px] md:w-[400px]">
                <SectionTitle 
                    title="SKILLS / KNOWLEDGE "
                    subTitle="All the technologies I master. 🐱‍👤"
                />

                <div className="flex gap-5 my-10 lg:flex-col lg:items-center">
                   <CardTechnologies specialty="Front-End"/>
                   <CardTechnologies specialty="Back-End"/>
                   <CardTechnologies specialty="Other"/>
                </div>

            </div>
        </section>
        )
}