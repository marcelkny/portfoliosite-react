import { LanguageContainerProps } from "../../../dtos/languagecontainer.dto";
import PostgresIcon from "../../icons/postgres.icon";

export function PostgresContainer({ languageContainerProps }: { languageContainerProps: LanguageContainerProps }) {
    return (
        <div className={languageContainerProps.containerClass}>
            <div className={languageContainerProps.svgContainerClass}><PostgresIcon /></div>
            <div className={languageContainerProps.labelCLass}>PostgreSQL</div>
        </div>);
}