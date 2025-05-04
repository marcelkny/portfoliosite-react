import { useCallback, useEffect, useState } from "react";

export function AboutSection() {
    const [age, setAge] = useState(0);
    const textClass = "text-sm lg:text-lg";
    const showPersInfo = useCallback((param: string) => {
        console.log("param: ", param);
    }, []);
    const loadData = useCallback(() => {
        // calculate age by today and date of birth
        const today = new Date();
        const birthDate = new Date("1989-01-09");
        const age = today.getFullYear() - birthDate.getFullYear();
        setAge(age);

    }, []);
    useEffect(()=>{
        loadData();
    },[loadData])
    return (
        <div>
            <h2 id="h_myname">Marcel Kny</h2>
            <p>
                <b>Fachinformatiker für Anwendungsentwicklung</b>
            </p>
            <div className="py-2">
                <p>
                    <i>
                        „Jeder der aufhört zu lernen, ist alt, mag er zwanzig oder achtzig Jahre zählen. Jeder, der weiterlernt, ist jung, mag er zwanzig oder
                        achtzig Jahre alt sein.“
                    </i>{" "}
                    (Henry Ford)
                </p>
            </div>
            <div className="py-2">
                <h3>Zu meiner Person:</h3>
                <div className="flex flex-wrap justify-between">
                    <div className="w-[45%] my-2 text-lg">
                        <div className="w-20">Alter</div>
                        <div>{age} Jahre</div>
                    </div>
                    <div className="w-[45%] my-2 text-lg">
                        <div className="w-20">Email</div>
                        <div>kontakt@knymarcel.de</div>
                    </div>
                    <div className="w-[45%] my-2 text-lg">
                        <div className="w-20">Wohnort</div>
                        <div>Leipzig</div>
                    </div>
                </div>
            </div>
            <div className="py-2">
                <h3>Interessen:</h3>
                <div className="mt-4 flex justify-evenly text-sm">
                    <div className="border-2 rounded px-4 hover:cursor-pointer" onClick={() => showPersInfo("pers_info_hum")}>
                        <p className={textClass}>Menschen</p>
                    </div>
                    <div className="border-2 rounded px-4 hover:cursor-pointer" onClick={() => showPersInfo("pers_info_crea")}>
                        <p className={textClass}>Kreativität</p>
                    </div>
                    <div className="border-2 rounded px-4 hover:cursor-pointer" onClick={() => showPersInfo("pers_info_nat")}>
                        <p className={textClass}>Natur</p>
                    </div>
                    <div className="border-2 rounded px-4 hover:cursor-pointer" onClick={() => showPersInfo("pers_info_tech")}>
                        <p className={textClass}>Technik</p>
                    </div>
                </div>
                <div className="info_txt_div" id="info_txt_div"></div>
            </div>
        </div>
    );
}
