import Summary from "./Summary";
import SocialMedia from "./SocialMedia";

export default function AboutMe(){
    return(
        <section className="w-full h-[calc(100vh-70px)] flex justify-center items-center">
            <div className="w-[1024px] ">
                <Summary />
                <SocialMedia />
            </div>
        </section>
    )
}