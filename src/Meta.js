import { useEffect } from 'react';

export default function Meta({
    title       = '',
    author      = '',
    keywords    = '',
    description = '',
    og_image    = '',
    og_type     = ''
}) {

    var pageKeywords, pageAuthor, ogTitle, ogUrl, ogDescription, ogImage, ogImageWidth, ogImageHeight, ogType;

    const head = () => {
        document.title = `Blinds | ${title}`;

        pageAuthor = document.createElement('meta');
        pageAuthor.setAttribute('name', 'author');
        pageAuthor.setAttribute('content', author);
        document.head.appendChild(pageAuthor);

        pageKeywords = document.createElement('meta');
        pageKeywords.setAttribute('name', 'keywords');
        pageKeywords.setAttribute('content', keywords);
        document.head.appendChild(pageKeywords);

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
        ogImage.setAttribute('content', og_image);
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
        ogType.setAttribute('content', og_type);
        document.head.appendChild(ogType);
    }

    const cleanHead = () => {
        document.head.removeChild(pageAuthor);
        document.head.removeChild(pageKeywords);
        document.head.removeChild(ogTitle);
        document.head.removeChild(ogUrl);
        document.head.removeChild(ogDescription);
        document.head.removeChild(ogImage);
        document.head.removeChild(ogImageWidth);
        document.head.removeChild(ogImageHeight);
        document.head.removeChild(ogType);
    }

    useEffect(() => {
        head();
        return () => {
            cleanHead();
        }
    });

    return null;
}
