import { PortfolioCardProps } from "../../dtos/portfoliocard.dto";
import { PortfolioCard } from "../container/portfolio.card";
import portfolioPHPImg from "../img/portfoliopage_php.png";

export function PortfolioSection() {
    const cards: PortfolioCardProps[] = [
        {
            title: "Profilseite (React)",
            text: "Github Repository für diese Profilseite.",
            url: "https://github.com/marcelkny/portfoliosite-react",
            imgSrc: portfolioPHPImg,
            buttonCaption: "Github"
        },
        {
            title: "Profilseite (PHP)",
            text: "Github Repository für diese Profilseite. Erste Version in PHP.",
            url: "https://github.com/marcelkny/portfoliosite",
            imgSrc: portfolioPHPImg,
            buttonCaption: "Github"
        }
    ];
return (
    <div id="portfolio" className="pt-[80px] h-screen w-[70%] mx-auto">
        <h2 className="text-center mb-4">Mein Portfolio</h2>
        <div className="flex justify-evenly gap-4 flex-wrap">
            {cards.map((card) => (
                <PortfolioCard props={card} />
            ))}
        </div>
    </div>);
}
