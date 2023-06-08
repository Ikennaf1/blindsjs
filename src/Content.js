import SectionOne from "./SectionOne";
import Footer from "./Footer";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";

const Content = () => {
    return (
        <div className="absolute top-[756px] w-full">
            <div>
                {/* Carbon ad goes here */}
            </div>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <Footer />
        </div>
    );
}

export default Content;
