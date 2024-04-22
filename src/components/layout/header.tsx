import Logo from "../img/mk_logo.png";
import { NavMenu } from "../menu/navmenu";

export function Header() {
    return (
    <header id="header" className="sticky top-0 bg-[#1b1a1f] p-2 flex items-center align-middle">
        <a href="#" className="w-fit lg:w-full cursor-pointer">
            <div className="">
                <img className="h-8" src={Logo} alt="Logo" />
            </div>
        </a>
        <NavMenu />
    </header>);
}