export default function Header(){
    return(
        <header className="w-screen h-[70px] border-b border-black/10">
            <div className="w-[80%] h-full m-auto flex justify-between items-center">
                <div>
                    <h1 className="text-xl font-bold">João Vitor</h1>
                </div>
                <nav className="flex gap-5">
                    <a href="">Home</a>
                    <a href="">Sobre min</a>
                    <a href="">Experiência</a>
                    <a href="">Projetos</a>
                    <a href="">Conhecimentos</a>
                    <a href="">Contato</a>
                </nav>
            </div>
        </header>
    )
}