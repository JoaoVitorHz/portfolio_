export default function Summary(){
    return(
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
    )
}