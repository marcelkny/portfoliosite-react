import { LanguageContainerProps } from "../../../dtos/languagecontainer.dto";
import GodotIcon from "../../icons/godot.icon";

export function GodotContainer({ languageContainerProps }: { languageContainerProps: LanguageContainerProps }) {
    return (
        <div className={languageContainerProps.containerClass}>
            <div className={languageContainerProps.svgContainerClass}><GodotIcon /></div>
            <div className={languageContainerProps.labelCLass}>Godot</div>
        </div>);
}