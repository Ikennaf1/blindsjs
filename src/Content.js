import SectionOne from "./SectionOne";
import Footer from "./Footer";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";

const Content = () => {
    return (
        <div className="absolute top-[640px] sm:top-[756px] w-full mt-8">
            <div>
                {/* Carbon ad goes here */}
            </div>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <Footer />
        </div>
    );
}

export default Content;
