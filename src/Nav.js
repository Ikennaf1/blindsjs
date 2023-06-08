import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="nav fixed top-0 w-full z-10">
            <div className="h-16 flex items-center justify-between body-margin">
                <label htmlFor="collapsedNav" className="mr-3 p-1 fixed md:hidden rounded-full hover:bg-gray-800 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                    </svg>
                </label>
                <a href="/">
                    <div className="flex items-center justify-left ml-10 md:ml-0">
                        <div className="link" style={{"width": "3rem", "height": "3rem", "display": "inline-block", "color": "coral", "marginTop": 17}}>
                            <svg viewBox="0 0 700 700">
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
                <div className="text-sm">
                    <ul className="flex items-center">
                        <Link to="/docs/"><li className="uppercase hidden sm:block">Documentation</li></Link>
                        <Link to="/docs/"><li className="uppercase sm:hidden">Docs</li></Link>
                        <li className=" ml-5">
                            <a className="link" href="https://github.com/Ikennaf1/blinds" target="_blank" rel="noreferrer"> <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" width="16"><path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 6.8 9.5c.5 0 .7-.2.7-.5v-1.7C6.7 20 6.1 18 6.1 18c-.4-1.2-1-1.5-1-1.5-1-.6 0-.6 0-.6 1 0 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9 0-.7.3-1.1.6-1.4-2.2-.2-4.6-1-4.6-4.9 0-1.1.4-2 1-2.7 0-.3-.4-1.3.2-2.7 0 0 .8-.2 2.7 1a9.4 9.4 0 0 1 5 0c2-1.2 2.8-1 2.8-1 .5 1.4.1 2.4 0 2.7.7.7 1 1.6 1 2.7 0 3.8-2.3 4.7-4.5 5 .4.2.7.8.7 1.8V21c0 .3.2.6.7.5 4-1.3 6.8-5 6.8-9.5A10 10 0 0 0 12 2z"></path></svg></a>
                        </li>
                        <li className=" ml-5">
                            <a className="link" href="/" target="_blank"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" aria-hidden="true" fill="currentColor" width="16"><path d="M28 6.937c-.957.425-1.985.711-3.064.84a5.343 5.343 0 0 0 2.345-2.951 10.696 10.696 0 0 1-3.388 1.295 5.334 5.334 0 0 0-9.089 4.864A15.143 15.143 0 0 1 3.809 5.411a5.321 5.321 0 0 0-.721 2.683 5.33 5.33 0 0 0 2.372 4.439 5.323 5.323 0 0 1-2.416-.667v.067a5.335 5.335 0 0 0 4.279 5.23 5.336 5.336 0 0 1-2.409.092 5.34 5.34 0 0 0 4.983 3.705 10.699 10.699 0 0 1-6.625 2.284c-.43 0-.855-.025-1.273-.075a15.102 15.102 0 0 0 8.177 2.396c9.812 0 15.176-8.128 15.176-15.177 0-.231-.005-.461-.015-.69A10.855 10.855 0 0 0 28 6.937z"></path></svg></a>
                        </li>
                        {/* <li className="uppercase hidden sm:block ml-5 bg-blue-500 text-white cursor-pointer p-3 rounded font-bold hover:bg-blue-600">Get Templates</li> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
