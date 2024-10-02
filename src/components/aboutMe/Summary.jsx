import SectionTitle from "../SectionTitle";

export default function Summary(){
    return(
        <div className="flex gap-5 mb-10 md:flex-col md:gap-10">
            <div className="flex-1 h-full flex flex-col gap-5">
                <SectionTitle 
                    title="About me"
                    subTitle="Learn more about me 🤔"
                />
                <p className="lg:text-sm">
                    I am a Full Stack Developer with 4 years of experience in web developing. I have solid knowledge in technologies such as NextJs, React, Typescript, TailwindCss, PHP, Laravel, Node, and MySQL, among others, as well as expertise in Data Structures, Design Patterns, Clean Code, Clean Architecture, and System Design.
                    <br/>
                    <br/>
                    I am currently graduating in Systems Analysis and Development at Centro Universitário Senac.
             
                    <br/>
                    <br/>
                    My first contact with Development was in 2019 during a Technical Course in Computer Science. That was when I wrote my first lines of code. Since then, I have been continuously improving in Web and Mobile development.  
                </p>
            </div>
            
            <div className="flex-1 flex justify-center mt-10">
                <img className="w-[400px] rounded-md lg:w-[300px] lg:h-[300px] " src="/images09.png" alt="" />
            </div>
        </div>
    )
}