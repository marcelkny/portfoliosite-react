import { PortfolioCardProps } from "../../dtos/portfoliocard.dto";
import { LinkButton } from "../buttons/link.button";

export function PortfolioCard({ props }: { props: PortfolioCardProps }) {
    return (
        <div className="border-2 rounded p-4 w-[45%] bg-[#262525]">
            {props.imgSrc ?
                <div>
                    <img src={props.imgSrc} className="w-full" />
                </div>
                :
                undefined
            }
            <h3>{props.title}</h3>
            <div className="mb-4">{props.text}</div>
            <LinkButton caption={props.buttonCaption} href={props.url} target="_blank"/>
        </div>
    )
}