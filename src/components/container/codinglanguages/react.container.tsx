import { LanguageContainerProps } from "../../../dtos/languagecontainer.dto";
import ReactIcon from "../../icons/react.icon";

export function ReactContainer({ languageContainerProps }: { languageContainerProps: LanguageContainerProps }) {
    return (
        <div className={languageContainerProps.containerClass}>
            <div className={languageContainerProps.svgContainerClass}><ReactIcon /></div>
            <div className={languageContainerProps.labelCLass}>React JS</div>
        </div>);
}