import HomeSocialMedia from "./HomeSocialMedia";

export default function HomeText(){
    return(
        <div className="">
            <h1 className='text-[#2d2e32] text-[55px] font-semibold leading-[1.2] my-5 w-[500px]'>
                Desenvolvedor Web & Mobile 
                {/* <img className='relative w-[60px] align-middle screen-800:w-[40px]'
                    src="https://stefantopalovicdev.vercel.app/static/media/waving.1bae5fcfb51082b5c2b4.png" 
                    alt="" 
                /> */}
                <br/>
                👑
            </h1>
            <span 
                className='w-[500px] block text-[#767676] text-[18px] font-medium leading-[1.6] screen-800:w-[350px] screen-800:text-[18px] screen-768:w-[300px]'>
                Olá! Me chamo João Vitor, um desenvolvedor Full-Stack Web, com mais de 4 anos de experiência! 📍
            </span>

            <HomeSocialMedia />
        </div>
    )
}