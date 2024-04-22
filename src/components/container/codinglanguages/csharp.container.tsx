import { LanguageContainerProps } from "../../../dtos/languagecontainer.dto";
import CSharpIcon from "../../icons/csharp.container";

export function CSharpContainer({ languageContainerProps }: { languageContainerProps: LanguageContainerProps }) {
    return (
        <div className={languageContainerProps.containerClass}>
            <div className={languageContainerProps.svgContainerClass}><CSharpIcon /></div>
            <div className={languageContainerProps.labelCLass}>C#</div>
        </div>);
}