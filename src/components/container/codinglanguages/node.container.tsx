import { LanguageContainerProps } from "../../../dtos/languagecontainer.dto";
import NodeIcon from "../../icons/node.icon";

export function NodeContainer({ languageContainerProps }: { languageContainerProps: LanguageContainerProps }) {
    return (
        <div className={languageContainerProps.containerClass}>
            <div className={languageContainerProps.svgContainerClass}><NodeIcon /></div>
            <div className={languageContainerProps.labelCLass}>Node JS</div>
        </div>);
}