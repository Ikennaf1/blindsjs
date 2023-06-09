import Installation from './Installation';

export const metadata = {
    metadataBase: new URL('https://raw.githubusercontent.com'),
    title: 'Blinds | Installation',
    description: 'The best dark mode package for all websites',
    keywords: ['dark', 'dark mode', 'night mode'],
  
    openGraph: {
      title: 'Blinds | Installation',
      description: 'The best dark mode package for all websites',
      url: 'https://blindsjs.dev',
      images: [
        {
          url: 'https://raw.githubusercontent.com/Ikennaf1/staticrepo/master/imgs/og-blinds.jpg',
          width: '1200',
          height: '630'
        }
      ],
    }
}

const V0Installation = () => {
    
    return (
        <>
            <Installation />
        </>
    );
}

export default V0Installation;
