import { useState } from "react";
import MailIcon from "../icons/mail.icon";
import GithubIcon from "../icons/github.icon";
import LinkedInIcon from "../icons/linkedin.icon";

export function Footer() {
    const [year,] = useState(new Date().getFullYear());
    return (<footer className="sticky bottom-0 flex justify-between p-2 bg-[rgba(29,29,29,0.3)] backdrop-blur-sm">
        <div className="w-1/2">
            <div className="w-1/2 mx-auto">
                &copy; {year} Marcel Kny
            </div>
            
        </div>
        <div className="w-1/2">
            <div className="w-1/2 px-6 mx-auto flex justify-evenly gap-4">
                <div>
                    <a href="mailto:kontakt@knymarcel.de">
                        <MailIcon />
                    </a>
                </div>
                <div>
                    <a href="https://github.com/marcelkny" target="_blank">
                        <GithubIcon />
                    </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/marcel-kny-87b755226/" target="_blank">
                        <LinkedInIcon />
                    </a>
                </div>
            </div>
        </div>
    </footer>);
}