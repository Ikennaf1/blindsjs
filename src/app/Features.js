

const CardFeature = ({ children, title, icon }) => {
    return (
        <div className="flex flex-row flex-wrap gap-8">
                    
            <div className="flex flex-col gap-2 w-full sm:w-64 md:w-72 lg:w-80 h-40 overflow-hidden border rounded-2xl p-4 bg-gray-200 shadow-lg">                        
                { icon }
                <p className="text-sm font-bold">{ title }</p>
                <p className="text-xs">
                    { children }
                </p>
            </div>

        </div>
    )
}

const Features = () => {
    return (
        <section>
            <div className="body-margin flex flex-col gap-8">
                <div>
                    <p className="flex flex-col gap-1 text-4xl">
                        <span className="font-light text-[#ff00ff]">The dark mode package</span><br />
                        that lets you choose
                    </p>
                </div>

                <div className="flex flex-row flex-wrap gap-8 lg:gap-12">
                    <CardFeature
                    title="Framework agnostic"
                    icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>}>
                        It does not matter which framework your website is written in as long as it is written for the web browser.
                        Blinds will happily work in any or no framework.
                    </CardFeature>

                    <CardFeature
                    title="Faster completion"
                    icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>}>
                        Faster completion time for both new and existing websites is possible due to ease of installation, and separation of code.
                    </CardFeature>

                    <CardFeature
                    title="Customize your dark theme"
                    icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>}>
                        Go beyond the default and make your dark mode look exactly how you want. Your dark theme should complement your normal user interface.
                    </CardFeature>

                    <CardFeature
                    title="Flexible toggle icons"
                    icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>}>
                        Set and customize your toggle icons to fit the look and feel of your brand and set you apart from the rest.
                    </CardFeature>

                    <CardFeature
                    title="Fast flexible storage"
                    icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>}>
                        Choose between cookie and local storage. Default choice is local storage.
                    </CardFeature>

                    <CardFeature
                    title="Light-weight"
                    icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>}>
                        Ships with a lot of flexibility but at under 20kb, Blinds has very little overhead and runs blazingly fast.
                    </CardFeature>
                </div>
            </div>
        </section>
    );
}

export default Features;
