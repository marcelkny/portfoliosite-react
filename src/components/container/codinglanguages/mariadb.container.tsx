import { LanguageContainerProps } from "../../../dtos/languagecontainer.dto";
import MariaDbIcon from "../../icons/mariadb.icon";

export function MariaDbContainer({ languageContainerProps }: { languageContainerProps: LanguageContainerProps }) {
    return (
        <div className={languageContainerProps.containerClass}>
            <div className={languageContainerProps.svgContainerClass}><MariaDbIcon /></div>
            <div className={languageContainerProps.labelCLass}>MariaDB</div>
        </div>);
}