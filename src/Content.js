import SectionOne from "./SectionOne";
import Footer from "./Footer";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";

const Content = () => {
    return (
        <div className="absolute top-[640px] sm:top-[756px] w-full mt-8">
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
