const Article = ({ children }) => {
    return (
        <article className="article bg-white p-5 rounded shadow-md">
            { children }
        </article>
    );
}

export default Article;
