import { LanguageContainerProps } from "../../../dtos/languagecontainer.dto";
import RaspberryPiIcon from "../../icons/raspberrypi.icon";

export function RaspberryPiContainer({ languageContainerProps }: { languageContainerProps: LanguageContainerProps }) {
    return (
        <div className={languageContainerProps.containerClass}>
            <div className={languageContainerProps.svgContainerClass}><RaspberryPiIcon /></div>
            <div className={languageContainerProps.labelCLass}>Raspberry Pi</div>
        </div>);
}