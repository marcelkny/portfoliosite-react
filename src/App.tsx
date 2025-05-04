// import './App.css'
import { Footer } from "./components/layout/footer";
import { Header } from "./components/layout/header";
import { AboutSection } from "./components/sections/about.section";
import { CodingSection } from "./components/sections/coding.section";

function App() {
    return (
        <div className="w-full mx-auto min-h-screen text-slate-200">
            <Header />
            <div className="px-4 py-4">
                <div id="about" className="min-h-screen w-full lg:flex justify-between gap-4">
                    <div className="w-full xl:w-[60%]">
                        <AboutSection />
                    </div>
                    <div className="w-full xl:w-[40%] mt-8 xl:mt-0">
                        <CodingSection />
                    </div>
                </div>
                {/* <hr />
                <PortfolioSection /> */}
            </div>
            <Footer />
        </div>
    );
}

export default App;
