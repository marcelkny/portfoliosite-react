import { LanguageContainerProps } from "../../../dtos/languagecontainer.dto";
import GimpIcon from "../../icons/gimp.icon";

export function GimpContainer({ languageContainerProps }: { languageContainerProps: LanguageContainerProps }) {
    return (
        <div className={languageContainerProps.containerClass}>
            <div className={languageContainerProps.svgContainerClass}><GimpIcon /></div>
            <div className={languageContainerProps.labelCLass}>GIMP</div>
        </div>);
}