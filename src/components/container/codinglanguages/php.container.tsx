import { LanguageContainerProps } from "../../../dtos/languagecontainer.dto";
import PhpIcon from "../../icons/php.icon";

export function PhpContainer({ languageContainerProps }: { languageContainerProps: LanguageContainerProps }) {
    return (
        <div className={languageContainerProps.containerClass}>
            <div className={languageContainerProps.svgContainerClass}><PhpIcon /></div>
            <div className={languageContainerProps.labelCLass}>PHP</div>
        </div>);
}