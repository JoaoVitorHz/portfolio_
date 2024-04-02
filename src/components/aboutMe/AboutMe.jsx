import Summary from "./Summary";
import SocialMedia from "./SocialMedia";

export default function AboutMe(){
    return(
        <section 
            id="aboutMe"
            className="w-full min-h-[calc(100vh-70px)] h-auto flex justify-center items-center xl:py-20"
        >
            <div className="w-[1024px] lg:w-[820px] md:w-[400px]">
                <Summary />
                <SocialMedia />
            </div>
        </section>
    )
}