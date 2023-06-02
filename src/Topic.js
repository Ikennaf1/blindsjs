import Main from './Main';
import Article from './Article';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ children, title, description, prev, next }) => {
    
    var ogTitle, ogUrl, ogDescription, ogImage, ogImageWidth, ogImageHeight, ogType;

    const page = () => {
        document.title = `Blinds | ${title}`;

        ogTitle = document.createElement('meta');
        ogTitle.setAttribute('property', 'og:title');
        ogTitle.setAttribute('content', title);
        document.head.appendChild(ogTitle);

        ogUrl = document.createElement('meta');
        ogUrl.setAttribute('property', 'og:url' );
        ogUrl.setAttribute('content', window.location.href);
        document.head.appendChild(ogUrl);

        ogDescription = document.createElement('meta');
        ogDescription.setAttribute('property', 'og:description' );
        ogDescription.setAttribute('content', description);
        document.head.appendChild(ogDescription);

        ogImage = document.createElement('meta');
        ogImage.setAttribute('property', 'og:image' );
        ogImage.setAttribute('content', 'https://google.com');
        document.head.appendChild(ogImage);

        ogImageWidth = document.createElement('meta');
        ogImageWidth.setAttribute('property', 'og:image:width' );
        ogImageWidth.setAttribute('content', '1200');
        document.head.appendChild(ogImageWidth);

        ogImageHeight = document.createElement('meta');
        ogImageHeight.setAttribute('property', 'og:image:height' );
        ogImageHeight.setAttribute('content', '630');
        document.head.appendChild(ogImageHeight);

        ogType = document.createElement('meta');
        ogType.setAttribute('property', 'og:type' );
        ogType.setAttribute('content', 'article');
        document.head.appendChild(ogType);
    }

    const cleanPage = () => {
        document.head.removeChild(ogTitle);
        document.head.removeChild(ogUrl);
        document.head.removeChild(ogDescription);
        document.head.removeChild(ogImage);
        document.head.removeChild(ogImageWidth);
        document.head.removeChild(ogImageHeight);
        document.head.removeChild(ogType);
    }

    useEffect(() => {
        page();
        return () => {
            cleanPage();
        }
    });

    return (
        <Main>
            <Article>
                <h2 className="text-black font-bold text-3xl mb-3">{ title }</h2>
                { children }
                <div className="flex justify-between w-full">
                    {prev && <Link to={prev} className="mr-auto mt-5">
                        <div className="text-sm border rounded px-2 py-1 hover:text-blue-500 font-light text-gray-600 bg-gray-100 hover:bg-gray-200">
                        &lt; prev
                    </div>
                    </Link>}
                    {next && <Link to={next} className="ml-auto mt-5">
                        <div className="text-sm border rounded px-2 py-1 hover:text-blue-500 font-light text-gray-600 bg-gray-100 hover:bg-gray-200">
                        next &gt;
                        </div>
                    </Link>}
                </div>
            </Article>
        </Main>
    );
}

export default Topic;