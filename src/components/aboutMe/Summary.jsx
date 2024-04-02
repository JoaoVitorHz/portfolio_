import SectionTitle from "../SectionTitle";

export default function Summary(){
    return(
        <div className="flex gap-5 mb-10 md:flex-col md:gap-10">
            <div className="flex-1 h-full flex flex-col gap-5">
                <SectionTitle 
                    title="Sobre min"
                    subTitle="Oh não! Você sabe quem eu sou? 🤔"
                />
                <p className="lg:text-sm">
                    Sou um Desenvolvedor com 4 anos de experiência no desenvolvimento de sistemas para diversos nichos industriais. Possuo sólido conhecimento em tecnologias como NextJs, React, Typescript, PHP, Laravel e MySQL, entre outras, além de expertise em Estrutura de Dados, Design Patterns, Clean Code, Clean Architecture e System Design.
                    <br/>
                    <br/>
                    Atualmente estou me formando em tecnologo de Analise e Desenvolvimento de sistemas no Centro Universitario Senac.
             
                    <br/>
                    <br/>
                    Meu primeiro contato com Desenvolvimento foi em 2019 em um Curso Tecnico de Tecnico em Informatica. Foi ali onde escrevi minhas primeiras linha de código. Desde então venho me aprimorando cada vez mais em desenvolvimento Web e Mobile.  
                </p>
            </div>
            
            <div className="flex-1 flex justify-center mt-10">
                <img className="w-[400px] rounded-md lg:w-[300px] lg:h-[300px] " src="/images09.png" alt="" />
            </div>
        </div>
    )
}