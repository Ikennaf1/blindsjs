import { useState } from "react";

const TopicCollapsible = ({ children }) => {

    const [ collapsed, setCollapsed ] = useState(true);

    const handleCollapse = () => {
        if (collapsed === true) {
            setCollapsed(false);
        } else {
            setCollapsed(true);
        }
    }

    return (
        <div className={`fixed w-full md:hidden overscroll-none ${collapsed ? 'nav-collapsed' : 'nav-show'}`}>
            <button id="collapsedNav" className="hidden" onClick={() => handleCollapse()}>Collapse nav</button>
            <label htmlFor="collapsedNav" className={`fixed w-screen h-screen bg-black z-10 ${collapsed ? 'opacity-0' : 'opacity-10 transition duration-300 ease-in-out delay-500'}`}></label>
            <div className="nav fixed w-3/4 h-screen z-20 text-light p-3">

                <div className="flex justify-between items-center">
                    <a href="/">
                        <div className="flex items-center justify-center">
                            <div className="link" style={{"width": "3rem", "height": "3rem", "display": "inline-block", "color": "coral", "marginTop": 25}}>
                                <svg stroke="#2ec4b6" viewBox="0 0 900 900">
                                    <g id="Layer_1">	
                                        <line fill="none" strokeWidth="25" strokeLinecap="round" strokeMiterlimit="10" x1="-14.074" y1="24.255" x2="520.825" y2="8.819"/>	
                                        <line fill="none" strokeWidth="25" strokeLinecap="round" strokeMiterlimit="10" x1="-14.074" y1="110.161" x2="508.074" y2="91.369"/>	
                                        <line fill="none" strokeWidth="25" strokeLinecap="round" strokeMiterlimit="10" x1="-14.074" y1="190.027" x2="512.101" y2="159.154"/>	
                                        <line fill="none" strokeWidth="25" strokeLinecap="round" strokeMiterlimit="10" x1="-19.443" y1="273.919" x2="515.456" y2="263.182"/>	
                                        <line fill="none" strokeWidth="25" strokeLinecap="round" strokeMiterlimit="10" x1="-14.074" y1="344.39" x2="498.678" y2="341.705"/>	
                                        <line fill="none" strokeWidth="25" strokeLinecap="round" strokeMiterlimit="10" x1="-14.074" y1="463.182" x2="512.101" y2="473.248"/>	
                                        <line fill="none" strokeWidth="25" strokeLinecap="round" strokeMiterlimit="10" x1="-19.443" y1="410.832" x2="508.074" y2="400.094"/>	
                                        <line fill="none" strokeWidth="10" strokeLinecap="round" strokeMiterlimit="10" x1="70.792" y1="-11.431" x2="67.914" y2="497.202"/>	
                                        <line fill="none" strokeWidth="10" strokeLinecap="round" strokeMiterlimit="10" x1="341.562" y1="-11.431" x2="344.439" y2="492.166"/>	
                                        <line fill="none" strokeWidth="10" strokeLinecap="round" strokeMiterlimit="10" x1="377.021" y1="-14.309" x2="379.18" y2="502.957"/>	
                                        <line fill="none" strokeWidth="10" strokeLinecap="round" strokeMiterlimit="10" x1="459.288" y1="-14.309" x2="458.568" y2="497.202"/>	
                                        <line fill="none" strokeWidth="10" strokeLinecap="round" strokeMiterlimit="10" x1="19.504" y1="-11.431" x2="15.188" y2="492.166"/>
                                    </g>
                                </svg>
                            </div>
                            <h1 className="font-bold text-xl">Blinds</h1>
                        </div>
                    </a>
                    <div onClick={() => handleCollapse()}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                { children }
            </div>
    </div>
    );
}

export default TopicCollapsible;
