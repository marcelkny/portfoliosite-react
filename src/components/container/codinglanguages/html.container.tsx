import { LanguageContainerProps } from "../../../dtos/languagecontainer.dto";
import HtmlIcon from "../../icons/html.icon";

export function HtmlContainer({ languageContainerProps }: { languageContainerProps: LanguageContainerProps }) {
    return (
        <div className={languageContainerProps.containerClass}>
            <div className={languageContainerProps.svgContainerClass}><HtmlIcon /></div>
            <div className={languageContainerProps.labelCLass}>HTML/CSS</div>
        </div>);
}