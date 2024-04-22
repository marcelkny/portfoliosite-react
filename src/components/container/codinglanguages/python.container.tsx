import { LanguageContainerProps } from "../../../dtos/languagecontainer.dto";
import PythonIcon from "../../icons/python.icon";

export function PythonContainer({ languageContainerProps }: { languageContainerProps: LanguageContainerProps }) {
    return (
        <div className={languageContainerProps.containerClass}>
            <div className={languageContainerProps.svgContainerClass}><PythonIcon /></div>
            <div className={languageContainerProps.labelCLass}>Python</div>
        </div>);
}