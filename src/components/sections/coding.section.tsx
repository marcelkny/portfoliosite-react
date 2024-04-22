import { LanguageContainer } from "../container/language.container";

export function CodingSection() {
    const portfolioSectionClass = "w-full flex flex-wrap justify-evenly gap-8 px-2 py-2";
    return (
        <div className="text-center border-2 rounded-lg bg-[#262525]">
            <div className="mb-10 mt-8">
                <h3 className="mb-4">Beruflich:</h3>
                <div className={portfolioSectionClass}>
                    <LanguageContainer type="html" />
                    <LanguageContainer type="php" />
                    <LanguageContainer type="mariadb" />
                    <LanguageContainer type="postgres" />
                    <LanguageContainer type="react" />
                    <LanguageContainer type="node" />
                </div>
            </div>
            <div className="mb-10">
                <h3 className="mb-4">Privat:</h3>
                <div className={portfolioSectionClass}>
                    <LanguageContainer type="raspberry" />
                    <LanguageContainer type="godot" />
                    <LanguageContainer type="unity" />
                    <LanguageContainer type="gimp" />
                </div>
            </div>
            <div className="mb-10">
                <h3 className="mb-4">Weitere Erfahrungen:</h3>
                <div className={portfolioSectionClass}>
                    <LanguageContainer type="cplusplus" />
                    <LanguageContainer type="csharp" />
                    <LanguageContainer type="python" />
                </div>
            </div>
        </div>
    );
}
