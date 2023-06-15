import CodeClip from "./CodeClip";
import { Link } from "react-router-dom";

const SectionTwo = () => {
    return (
        <section className="bg-gray-800 text-white mt-16">
            <div className="body-margin py-8">
                <div className="block w-full sm:flex sm:items-center sm:justify-between sm:gap-10">
                    <div className="section-two-items text-center">
                        <div className="inline-flex items-center justify-center bg-[yellow]/20 w-16 h-16 rounded-2xl mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="yellow" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                            </svg>
                        </div>
                        <div className="inline-flex items-center justify-center w-16 h-16 mx-auto text-2xl text-gray-300">+</div>
                        <div className="inline-flex items-center justify-center bg-[#ff6644]/20 w-16 h-16 rounded-2xl mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff6644" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                            </svg>
                        </div>
                        <h4 className="mt-4 font-bold text-lg">Customize your dark mode exactly how you want</h4>
                        <p className="mt-4 text-gray-300">Go beyond the defaults. Get your hands dirty and make your dark mode complement the overall user interface of your website.</p>
                        <Link to="/docs" className="inline-block mt-2 link">
                            Read documentation
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className="inline-block ml-2 w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </Link>
                    </div>
                    <div className="section-two-items text-gray-300">
                        <CodeClip id="customizeBlindStyle">
{`setBlindStyles({
    "body": {
        "background-color": "black",
        "color": "gray"
    },
    "div .container": {
        "background-color": "black",
        "color": "gray"
    },
    "input[type='text']": {
        "background-color": "black",
        "color": "gray"
    }
});

blindsInit();`}
                        </CodeClip>
                    </div>
                </div>
            </div>
        </section>
        // Customize everything
    );
}

export default SectionTwo;
