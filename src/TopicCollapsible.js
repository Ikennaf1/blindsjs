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
        <div className={`fixed w-full md:hidden overscroll-none z-50 ${collapsed ? 'nav-collapsed' : 'nav-show'}`}>
            <button id="collapsedNav" className="hidden" onClick={() => handleCollapse()}>Collapse nav</button>
            <label htmlFor="collapsedNav" className={`fixed w-screen h-screen bg-black z-40 ${collapsed ? 'opacity-0' : 'opacity-10 transition duration-300 ease-in-out delay-500'}`}></label>
            <div className="nav fixed w-3/4 h-screen z-50 text-light p-3">

                <div className="flex justify-between items-center">
                    <a href="/">
                        <div className="flex items-center justify-center">
                            <div className="link" style={{"width": "3rem", "height": "3rem", "display": "inline-block", "color": "coral", "marginTop": 25}}>                                
                                <svg viewBox="0 0 900 900">
                                    <g id="Layer_1">
                                        <circle fill="#141519" cx="256" cy="256" r="256"/>
                                    </g>
                                    <g id="Layer_3">
                                        <g>
                                            <path fill="#ADB6D8" d="M381,101.857c0,0-26.428-42.143-87.143-50H246v50H381z"/>
                                            <polygon fill="#2EC4B6" points="178.857,65.857 128.857,115.857 229,115.857 229,65.857 		"/>
                                            <polygon fill="#2EC4B6" points="179,398.857 128.857,449 229,449 229,398.857 		"/>
                                            <path fill="#ADB6D8" d="M301.714,435C372.428,427.429,406,384.857,406,384.857H246V435H301.714z"/>
                                            <path fill="#ADB6D8" d="M393.143,187.214c0,0,9.285-24.643,3.571-46.786H246v46.786H393.143z"/>
                                            <polygon fill="#2EC4B6" points="179.571,154.429 132.786,201.214 229,201.214 229,154.429 		"/>
                                            <polygon fill="#2EC4B6" points="177.964,317.107 132.786,362.286 178.857,362.286 229,362.286 229,317.107 		"/>
                                            <path fill="#ADB6D8" d="M428.857,348.286c5.715-10,8.571-45.179,8.571-45.179H246v45.179H428.857z"/>
                                            <polygon fill="#2EC4B6" points="178.857,238.714 137.071,280.5 229,280.5 229,238.714 		"/>
                                            <path fill="#ADB6D8" d="M432.429,266.5c0,0-9.286-28.214-26.429-41.786H246V266.5H432.429z"/>
                                        </g>
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
