export default function HomeTechnologies(){
    return(
        <div className="flex items-center md:flex-col">
            <span className="border-r-2 border-solid border-[rgba(45,46,50,.5)] mr-[70px] pr-[20px] font-semibold">Skills: </span>

            <div className="flex gap-[25px] md:grid md:grid-cols-2">
                <div 
                    title="NextJs"
                    className='group flex justify-center items-center rounded-[50%] w-[65px] h-[65px] bg-white shadow-md hover:scale-[1.2] transition-[100ms] cursor-pointer'
                >
                    <img 
                        className="w-[34px]"
                        src="/Technologies/next-js.svg" alt="" />
                </div>
                <div 
                    title="React"
                    className='group flex justify-center items-center rounded-[50%] w-[65px] h-[65px] bg-white shadow-md hover:scale-[1.2] transition-[100ms] cursor-pointer'
                >
                   <img 
                    className="w-[34px]"
                       src="/Technologies/react.png" alt="" />
                </div>
                <div 
                    title="Typescript"
                    className='group flex justify-center items-center rounded-[50%] w-[65px] h-[65px] bg-white shadow-md hover:scale-[1.2] transition-[100ms] cursor-pointer'
                >
                    <img 
                        className="w-[34px]"
                        src="/Technologies/typescript.svg" alt="" />
                </div>
                <div 
                    title="Javascript"
                    className='group flex justify-center items-center rounded-[50%] w-[65px] h-[65px] bg-white shadow-md hover:scale-[1.2] transition-[100ms] cursor-pointer'
                >
                    <img 
                        className="w-[30px]"
                        src="/Technologies/JavaScript-logo.png" alt="" />
                </div>
                <div 
                    title="PHP"
                    className='group flex justify-center items-center rounded-[50%] w-[65px] h-[65px] bg-white shadow-md hover:scale-[1.2] transition-[100ms] cursor-pointer'
                >
                    <img 
                        className="w-[40px]"
                        src="/Technologies/php.png" alt="" />
                </div>
                <div 
                    title="Laravel"
                    className='group flex justify-center items-center rounded-[50%] w-[65px] h-[65px] bg-white shadow-md hover:scale-[1.2] transition-[100ms] cursor-pointer'
                >
                    <img 
                        className="w-[60px]"
                        src="/Technologies/Laravel.svg" alt="" />
                </div>
                <div 
                    title="NodeJs"
                    className='group flex justify-center items-center rounded-[50%] w-[65px] h-[65px] bg-white shadow-md hover:scale-[1.2] transition-[100ms] cursor-pointer'
                >
                    <img 
                        className="w-[60px]"
                        src="/Technologies/node-js.svg" alt="" />
                </div>
            </div>
        </div>
    )
}