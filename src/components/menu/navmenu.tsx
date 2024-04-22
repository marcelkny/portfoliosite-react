export function NavMenu(){
    return (<div className="w-full flex justify-between px-4">
        <div className="cursor-pointer hover:text-white">
            <a href="#home">Home</a></div>
        <div className="cursor-pointer hover:text-white">
            <a href="#about">Über Mich</a></div>
        <div className="cursor-pointer hover:text-white">
            <a href="#portfolio">Portfolio</a></div>
        <div className="cursor-pointer border-2 rounded px-4 text-yellow-400 border-yellow-400 hover:text-yellow-600 hover:border-yellow-600">
            <a href="mailto:kontakt@knymarcel.de">Kontakt</a>
        </div>
    </div>);
}