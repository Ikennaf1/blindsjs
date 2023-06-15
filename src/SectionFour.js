import { Link } from "react-router-dom"

const SectionFour = () => {
    return (
        <section>
            <div className="body-margin mt-16">
                <div className="text-center">
                    <div className="flex items-center justify-center bg-[darkred]/20 w-16 h-16 rounded-2xl mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="darkred" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                        </svg>
                    </div>
                    <h4 className="mt-4 font-bold text-lg">Blinds is coming soon in your favorite CMS</h4>
                    {/* <p className="mt-4">Skip the default icons. Get the freedom to use any markup, image, or SVG you wantfor your toggle icons.</p> */}
                    <div>
                        {/*  */}
                    </div>
                    <Link to="/docs" className="inline-block mt-2 link">
                        Get started
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className="inline-block ml-2 w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
        // Blinds is coming soon in your favorite CMS
    );
}

export default SectionFour;
