import HomeTechnologies from "./HomeTechnologies";
import HomeText from "./HomeText";

export default function Home(){
    return(
        <section className="w-full mt-[70px] min-h-[calc(100vh-70px)] h-auto bg-white flex justify-center items-center xl:py-10">
            <div className="w-[1024px] lg:flex lg:flex-col lg:justify-center ">
               
                <div className="flex  mb-20 md:flex-col md:gap-10 md:items-center">
                    <HomeText />
                    <div>
                        <img src="/images06.png" alt="" className="w-[400px] rounded-md 2xl:w-[300px]"/>
                    </div>
                </div>

                <HomeTechnologies />
            </div>
        </section>
    )
}