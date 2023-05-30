import Main from './Main';
import Article from './Article';

const Topic = ({ children, title }) => {
    return (
        <Main>
            <Article>
                <h2>{ title }</h2>
                {
                    document.title = title
                }
                { children }
            </Article>
        </Main>
    );
}

export default Topic;