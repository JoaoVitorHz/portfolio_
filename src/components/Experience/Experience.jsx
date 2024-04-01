import SectionTitle from "../SectionTitle";

export default function Experience(){
    return(
        <section className="w-full min-h-[calc(100vh-70px)] p-16 bg-white flex justify-center items-center">
            <div className="w-[1024px] ">

                <SectionTitle 
                    title="Experiência Profissional"
                    subTitle="4 Anos de Experiência Profissional 🐱‍💻"
                />

                <div className="w-full grid grid-cols-2 gap-10 mt-10">

                    <div className="">
                        <div className="w-full bg-[#f1f1f1] h-[336px] flex justify-center items-center">
                            <img src="/LogoRed.svg" className="w-[200px]" alt="" />
                        </div>
                        <div className="flex flex-col gap-2 mt-7">
                            <h3 className="text-xl font-medium">Clinic Plus</h3>
                            <span className="text-sm text-gray-400">Desenvolvedor Full-Stack - <strong className="text-black">Senior</strong></span>
                            <p>Criação de um Software que otimiza os atendimentos e a gestão dos consultórios de profissionais de saúde.</p>
                        </div>
                    </div>

                    <div className="">
                        <div className="w-full bg-[#f1f1f1] h-[336px] flex justify-center items-center">
                            <img src="/manycontente.png" className="h-[55px]" alt="" />
                        </div>
                        <div className="flex flex-col gap-2 mt-7">
                            <h3 className="text-xl font-medium">ManyContent</h3>
                            <span className="text-sm text-gray-400">Desenvolvedor Front-End - <strong className="text-black">Pleno</strong></span>
                            <p>Criação de uma plataforma de criação de conteúdos por Inteligência Artificial para o exterior. </p>
                        </div>
                    </div>

                    <div className="">
                        <div className="w-full bg-[#f1f1f1] h-[336px] flex justify-center items-center">
                            <img src="/logo-incentea.png" className="h-[40px]" alt="" />
                        </div>
                        <div className="flex flex-col gap-2 mt-7">
                            <h3 className="text-xl font-medium">InCentea</h3>
                            <span className="text-sm text-gray-400">Desenvolvedor Full-Stack - <strong className="text-black">Pleno</strong></span>
                            <p>Criação e ajustes em projetos de desenvolvimento, seleção, cultura, gestão e futuro do trabalho.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}