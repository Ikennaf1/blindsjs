const CodeEmbed = ({ title, width, height, script }) => {
    return (
        <iframe title={`${title}`}
            width={`${width}`}
            height={`${height}`}   
            src={`data:text/html;charset=utf-8,
                <head><base target='_blank' /></head>
                <body><script src='${script}'></script>
                </body>`}
            />
    );
}

export default CodeEmbed;
