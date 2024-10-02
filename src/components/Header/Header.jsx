export function Header(){
    return(
        <header className="fixed top-0 w-screen h-[70px]  bg-white shadow-md">
            <div className="w-[80%] h-full m-auto flex justify-between items-center">
                <div>
                    <h1 className="text-xl font-bold">João Vitor</h1>
                </div>
                <nav className="flex gap-5 font-bold">
                    <a href="" className="font-semibold hover:text-[#147efb] transition">Home</a>
                    <a href="" className="font-semibold hover:text-[#147efb] transition">About Me</a>
                    <a href="" className="font-semibold hover:text-[#147efb] transition">Experience</a>
                    <a href="" className="font-semibold hover:text-[#147efb] transition">Projects</a>
                    <a href="" className="font-semibold hover:text-[#147efb] transition">Skills</a>
                    <a href="" className="font-semibold hover:text-[#147efb] transition">Contact</a>
                </nav>
            </div>
        </header>
    )
}