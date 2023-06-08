import SectionOne from "./SectionOne";
import Footer from "./Footer";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";

const Content = () => {
    return (
        <div className="absolute top-[100%] w-full">
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <Footer />
        </div>
    );
}

export default Content;
