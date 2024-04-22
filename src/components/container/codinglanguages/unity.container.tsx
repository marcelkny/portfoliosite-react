import { LanguageContainerProps } from "../../../dtos/languagecontainer.dto";
import UnityIcon from "../../icons/unity.icon";

export function UnityContainer({ languageContainerProps }: { languageContainerProps: LanguageContainerProps }) {
    return (
        <div className={languageContainerProps.containerClass}>
            <div className={languageContainerProps.svgContainerClass}><UnityIcon /></div>
            <div className={languageContainerProps.labelCLass}>Unity</div>
        </div>);
}