const Nav = () => {
    return (
        <nav className="nav fixed top-0 w-full">
            <div className="h-16 flex items-center justify-between body-margin">
                <a href="/">
                    <div className="flex items-center justify-left">
                            <div className="" style={{"width": "3rem", "height": "3rem", "display": "inline-block", "color": "coral", "marginTop": 25}}>
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
                <div className="text-sm">
                    <ul className="flex items-center">
                        <li className="uppercase hidden sm:block">Documentation</li>
                        <li className="uppercase sm:hidden">Docs</li>
                        <li className=" ml-5"><svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" width="16"><path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 6.8 9.5c.5 0 .7-.2.7-.5v-1.7C6.7 20 6.1 18 6.1 18c-.4-1.2-1-1.5-1-1.5-1-.6 0-.6 0-.6 1 0 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9 0-.7.3-1.1.6-1.4-2.2-.2-4.6-1-4.6-4.9 0-1.1.4-2 1-2.7 0-.3-.4-1.3.2-2.7 0 0 .8-.2 2.7 1a9.4 9.4 0 0 1 5 0c2-1.2 2.8-1 2.8-1 .5 1.4.1 2.4 0 2.7.7.7 1 1.6 1 2.7 0 3.8-2.3 4.7-4.5 5 .4.2.7.8.7 1.8V21c0 .3.2.6.7.5 4-1.3 6.8-5 6.8-9.5A10 10 0 0 0 12 2z"></path></svg></li>
                        <li className=" ml-5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" aria-hidden="true" fill="currentColor" width="16"><path d="M28 6.937c-.957.425-1.985.711-3.064.84a5.343 5.343 0 0 0 2.345-2.951 10.696 10.696 0 0 1-3.388 1.295 5.334 5.334 0 0 0-9.089 4.864A15.143 15.143 0 0 1 3.809 5.411a5.321 5.321 0 0 0-.721 2.683 5.33 5.33 0 0 0 2.372 4.439 5.323 5.323 0 0 1-2.416-.667v.067a5.335 5.335 0 0 0 4.279 5.23 5.336 5.336 0 0 1-2.409.092 5.34 5.34 0 0 0 4.983 3.705 10.699 10.699 0 0 1-6.625 2.284c-.43 0-.855-.025-1.273-.075a15.102 15.102 0 0 0 8.177 2.396c9.812 0 15.176-8.128 15.176-15.177 0-.231-.005-.461-.015-.69A10.855 10.855 0 0 0 28 6.937z"></path></svg></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
