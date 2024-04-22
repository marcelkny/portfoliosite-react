import { LinkButton } from "../buttons/link.button";

export function NavMenu(){
    return (<div className="w-full flex justify-between px-4">
        <div className="cursor-pointer hover:text-white">
            <a href="#home">Home</a></div>
        <div className="cursor-pointer hover:text-white">
            <a href="#about">Über Mich</a></div>
        <div className="cursor-pointer hover:text-white">
            <a href="#portfolio">Portfolio</a></div>
        <LinkButton caption="Kontakt" href="mailto:kontakt@knymarcel.de" />
    </div>);
}