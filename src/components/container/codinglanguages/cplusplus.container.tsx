import { LanguageContainerProps } from "../../../dtos/languagecontainer.dto";
import CPlusPlusIcon from "../../icons/cplusplus.icon";

export function CplusPlusContainer({ languageContainerProps }: { languageContainerProps: LanguageContainerProps }) {
    return (
        <div className={languageContainerProps.containerClass}>
            <div className={languageContainerProps.svgContainerClass}><CPlusPlusIcon /></div>
            <div className={languageContainerProps.labelCLass}>C++</div>
        </div>);
}