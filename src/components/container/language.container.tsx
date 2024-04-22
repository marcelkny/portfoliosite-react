import { LanguageContainerProps } from "../../dtos/languagecontainer.dto";
import { CplusPlusContainer } from "./codinglanguages/cplusplus.container";
import { CSharpContainer } from "./codinglanguages/csharp.container";
import { GimpContainer } from "./codinglanguages/gimp.container";
import { GodotContainer } from "./codinglanguages/godot.container";
import { HtmlContainer } from "./codinglanguages/html.container";
import { MariaDbContainer } from "./codinglanguages/mariadb.container";
import { NodeContainer } from "./codinglanguages/node.container";
import { PhpContainer } from "./codinglanguages/php.container";
import { PostgresContainer } from "./codinglanguages/postgres.container";
import { PythonContainer } from "./codinglanguages/python.container";
import { RaspberryPiContainer } from "./codinglanguages/raspberrypi.container";
import { ReactContainer } from "./codinglanguages/react.container";
import { UnityContainer } from "./codinglanguages/unity.container";

export function LanguageContainer({ type }: { type: string }) {
    const languageContainerProps: LanguageContainerProps = {
        containerClass: "w-fit",
        svgContainerClass: "w-fit overflow-hidden mx-auto px-auto text-center",
        svgClass: "",
        labelCLass: "w-fit mx-auto px-auto text-center text-lg",
    }

    switch (type) {
        case "html":
            return (<HtmlContainer languageContainerProps={languageContainerProps} />);
        case "php":
            return (<PhpContainer languageContainerProps={languageContainerProps} />);
        case "mariadb":
            return (<MariaDbContainer languageContainerProps={languageContainerProps} />);
        case "react":
            return (<ReactContainer languageContainerProps={languageContainerProps} />);
        case "raspberry":
            return (<RaspberryPiContainer languageContainerProps={languageContainerProps} />);
        case "godot":
            return (<GodotContainer languageContainerProps={languageContainerProps} />);
        case "unity":
            return (<UnityContainer languageContainerProps={languageContainerProps} />);
        case "gimp":
            return (<GimpContainer languageContainerProps={languageContainerProps} />);
        case "cplusplus":
            return (<CplusPlusContainer languageContainerProps={languageContainerProps} />);
        case "csharp":
            return (<CSharpContainer languageContainerProps={languageContainerProps} />);
        case "python":
            return (<PythonContainer languageContainerProps={languageContainerProps} />);
        case "node":
            return (<NodeContainer languageContainerProps={languageContainerProps} />);
        case "postgres":
            return (<PostgresContainer languageContainerProps={languageContainerProps} />);

        default:
            return undefined;
    }
}