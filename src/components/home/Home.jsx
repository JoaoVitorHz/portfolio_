import HomeTechnologies from "./HomeTechnologies";
import HomeText from "./HomeText";

export default function Home(){
    return(
        <section className="w-full h-[calc(100vh-70px)] bg-white flex justify-center items-center">
            <div className="w-[1024px] ">
               
                <div className="flex mb-20">
                        <HomeText />
                        <div>
                            <img src="/images06.png" alt="" className="w-[400px] rounded-md"/>
                        </div>
                </div>

                <HomeTechnologies />
            </div>
        </section>
    )
}