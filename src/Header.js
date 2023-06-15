import { Link } from "react-router-dom";
import TopicCollapsible from "./TopicCollapsible";
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="jumbotron absolute top-0 w-full h-[670px] sm:h-[756px] w-full bg-cover bg-center bg-no-repeat">
            <TopicCollapsible>
                <div className="mt-5 h-1/2 overflow-y-auto">
                    <ul id="topic_list_collapsible">
                        <NavLink to='/docs' className="topic-list-items-collapsible"><li>Documentation</li></NavLink>
                        <NavLink to='/docs' className="topic-list-items-collapsible"><li>Blog</li></NavLink>
                    </ul>
                </div>
            </TopicCollapsible>
            {/* <div className="absolute top-0 w-full h-full bg-black"></div> */}
            <div className="cta mt-24 body-margin h-[85%]">
                <div className="w-24 h-24 sm:w-40 sm:h-40 m-auto">
                    <svg viewBox="0 0 512 512">
                        y="0px" width="512px" height="512px" viewBox="0 0 512 512" xml:space="preserve">
                        <g>
                            <path fill="#141519" d="M381,101.857c0,0-26.428-42.143-87.143-50H246v50H381z"/>
                            <polygon fill="#2EC4B6" points="178.857,65.857 128.857,115.857 229,115.857 229,65.857 	"/>
                            <polygon fill="#2EC4B6" points="179,398.857 128.857,449 229,449 229,398.857 	"/>
                            <path fill="#141519" d="M301.714,435C372.428,427.429,406,384.857,406,384.857H246V435H301.714z"/>
                            <path fill="#141519" d="M393.143,187.214c0,0,9.285-24.643,3.571-46.786H246v46.786H393.143z"/>
                            <polygon fill="#2EC4B6" points="179.571,154.429 132.786,201.214 229,201.214 229,154.429 	"/>
                            <polygon fill="#2EC4B6" points="177.964,317.107 132.786,362.286 178.857,362.286 229,362.286 229,317.107 	"/>
                            <path fill="#141519" d="M428.857,348.286c5.715-10,8.571-45.179,8.571-45.179H246v45.179H428.857z"/>
                            <polygon fill="#2EC4B6" points="178.857,238.714 137.071,280.5 229,280.5 229,238.714 	"/>
                            <path fill="#141519" d="M432.429,266.5c0,0-9.286-28.214-26.429-41.786H246V266.5H432.429z"/>
                        </g>
                    </svg>
                </div>
                <div className="w-3/4 text-center m-auto mt-4">
                    <h2 className="">The only dark mode package you need for your website</h2>
                    <p className="mt-4">
                        Blinds provides the scaffold required to give your customers the dark mode user interface necessary for a truely modern website.
                    </p>
                    <Link to="/docs" className="inline-block rounded-md p-5 mt-8 shadow-sm bg-[#2ec4b6] text-white font-bold uppercase hover:bg-[#289e92] transition duration-100 ease-linear">Get started</Link>
                    <ul className="mt-6 flex justify-center items-center text-gray-400">
                        <li className="mx-3">Currently v0.6.1</li>
                        <li>·</li>
                        <li className="mx-3"><a href="https://github.com/Ikennaf1/blinds">Visit Github</a></li>
                        <li>·</li>
                        <li className="mx-3"><a href="https://github.com/Ikennaf1/blinds/tags">See all releases</a></li>
                    </ul>
                </div>                
            </div>
        </header>
    );
}

export default Header;
