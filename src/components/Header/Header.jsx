export function Header(){
    return(
        <header className="fixed top-0 w-screen h-[70px]  bg-white shadow-md">
            <div className="w-[80%] h-full m-auto flex justify-between items-center">
                <div>
                    <h1 className="text-xl font-bold">João Vitor</h1>
                </div>
                <nav className="flex gap-5 font-bold">
                    <a href="" className="font-semibold hover:text-[#147efb] transition">Home</a>
                    <a href="" className="font-semibold hover:text-[#147efb] transition">Sobre min</a>
                    <a href="" className="font-semibold hover:text-[#147efb] transition">Experiência</a>
                    <a href="" className="font-semibold hover:text-[#147efb] transition">Projetos</a>
                    <a href="" className="font-semibold hover:text-[#147efb] transition">Conhecimentos</a>
                    <a href="" className="font-semibold hover:text-[#147efb] transition">Contato</a>
                </nav>
            </div>
        </header>
    )
}