import { useCallback } from "react";
import { DiffYears } from "../../utils/dateutils";

export function AboutSection() {
    const showPersInfo = useCallback((param: string) => {
        console.log("param: ", param);
    }, []);
    const currentAge = DiffYears(new Date(), new Date("1989-01-09"));
    return (<div>
        <h2 id="h_myname">Marcel Kny</h2>
        <p><b>Fachinformatiker für Anwendungsentwicklung</b></p>
        <div className="py-2">
            <p><i>„Jeder der aufhört zu lernen, ist alt, mag er zwanzig oder achtzig Jahre zählen. Jeder, der weiterlernt, ist jung, mag er zwanzig oder achtzig Jahre alt sein.“</i> (Henry Ford)</p>
        </div>
        <div className="py-2">
            <h3>Zu meiner Person:</h3>
            <div className="flex flex-wrap justify-between">
                <div className="w-[45%] my-2 text-lg">
                    <div className="w-20">Alter</div>
                    <div>{currentAge} Jahre</div>
                </div>
                
                <div className="w-[45%] my-2 text-lg">
                    <div className="w-20">Wohnort</div>
                    <div>Leipzig, Sachsen</div>
                </div>
                <div className="w-[45%] my-2 text-lg">
                    <div className="w-20">Email</div>
                    <div>kontakt[at]knymarcel.de</div>
                </div>
            </div>
        </div>
        {/* <div className="py-2">
            <h3>Interessen:</h3>
            <div className="mt-4 flex justify-evenly">
                <div className="border-2 rounded px-4 hover:cursor-pointer" onClick={() => showPersInfo('pers_info_hum')}>
                    <p className="text-lg">Menschen</p>
                </div>
                <div className="border-2 rounded px-4 hover:cursor-pointer" onClick={() => showPersInfo('pers_info_crea')}>
                    <p className="text-lg">Kreativität</p>
                </div>
                <div className="border-2 rounded px-4 hover:cursor-pointer" onClick={() => showPersInfo('pers_info_nat')}>
                    <p className="text-lg">Natur</p>
                </div>
                <div className="border-2 rounded px-4 hover:cursor-pointer" onClick={() => showPersInfo('pers_info_tech')}>
                    <p className="text-lg">Technik</p>
                </div>
            </div>
            <div className="info_txt_div" id="info_txt_div"></div>
        </div> */}
    </div>);
}
