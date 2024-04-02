import SectionTitle from "../SectionTitle";

export default function Experience(){
    return(
        <section className="w-full min-h-[calc(100vh-70px)] p-16 bg-white flex justify-center items-center">
            <div className="w-[1024px] lg:w-[820px] md:w-[400px]">

                <SectionTitle 
                    title="Experiência Profissional"
                    subTitle="4 Anos de Experiência Profissional. 🐱‍💻"
                />

                <div className="w-full grid grid-cols-3 gap-10 mt-10 lg:grid-cols-2 md:grid-cols-1">

                    <div className="">
                        <div className="w-full bg-[#f1f1f1] h-[200px] flex justify-center items-center">
                            <img src="/LogoRed.svg" className="w-[200px]" alt="" />
                        </div>
                        <div className="flex flex-col gap-2 mt-7">
                            <h3 className="text-xl font-medium">Clinic Plus  💉</h3>
                            <p>Criação de um Software que otimiza os atendimentos e a gestão dos consultórios de profissionais de saúde.</p>
                        </div>
                    </div>

                    <div className="">
                        <div className="w-full bg-[#f1f1f1] h-[200px] flex justify-center items-center">
                            <img src="/manycontente.png" className="h-[40px]" alt="" />
                        </div>
                        <div className="flex flex-col gap-2 mt-7">
                            <h3 className="text-xl font-medium">ManyContent ⏰</h3>
                            <p>Criação de uma plataforma de criação de conteúdos por Inteligência Artificial para o exterior. </p>
                        </div>
                    </div>

                    <div className="">
                        <div className="w-full bg-[#f1f1f1] h-[200px] flex justify-center items-center">
                            <img src="/logo-incentea.png" className="h-[40px]" alt="" />
                        </div>
                        <div className="flex flex-col gap-2 mt-7">
                            <h3 className="text-xl font-medium">InCentea 🏦</h3>
                            <p>Criação e ajustes em projetos de desenvolvimento, seleção, cultura, gestão e futuro do trabalho.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}