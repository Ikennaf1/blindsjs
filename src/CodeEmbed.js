const CodeEmbed = ({ title, width, maxHeight, script }) => {
    return (
        <iframe title={`${title}`}
            width={`${width}`}
            max-height={`${maxHeight}`}   
            src={`data:text/html;charset=utf-8,
                <head><base target='_blank' /></head>
                <body><script src='${script}'></script>
                </body>`}
            />
    );
}

export default CodeEmbed;
