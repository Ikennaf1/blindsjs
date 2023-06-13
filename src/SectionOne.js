import { Link } from "react-router-dom"
import CodeClip from "./CodeClip"

const SectionOne = () => {
    return (
        <section>
            <div className="body-margin">
                <div className="m-auto w-full text-center">
                    <div>{`<>`}</div>
                    <h3>Install Blinds the way you want</h3>
                    <p>Activate dark mode in your website with Blinds - Use the CDN, or install via NPM package manager</p>
                    <Link to="/docs">Read installation docs</Link>
                </div>
                <div className="block mt-8 w-full sm:flex sm:justify-between sm:gap-10">
                    <div className="section-one-items">
                        <h4>Install via NPM</h4>
                        <div className="mt-8">
                            <CodeClip id="npm">
                                npm install --save blinds
                            </CodeClip>
                        </div>                        
                    </div>
                    <div className="section-one-items">
                        <h4>Include via CDN</h4>
                        <div className="mt-8">
                            <CodeClip id="cdn">
                                {/* {`<script src="https://cdn.jsdelivr.net/gh/Ikennaf1/blinds@0.6.1/dist/blinds.min.js" defer></script>`} */}
                                jfszsmndfjnfkjsbkzskbklasbkgbkfjnfisjz zf izsgiznsi iszfi gizfigvnsfzi i zfivn l fgi ndfi difg ibdifb inifgn isdnfb 
                            </CodeClip>
                        </div>
                    </div>
                </div>
            </div>
            {/* Get started however you want... npm, cdn */}
        </section>
    );
}

export default SectionOne;
