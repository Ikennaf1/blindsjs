import TopicList from "./docs/v0/TopicList";
import Aside from "./Aside";
import TopicListCollapsible from "./docs/v0/TopicListCollapsible";

const Main = ({ children }) => {
    return (
        <section>
            <TopicListCollapsible />
            <main className="main body-margin flex justify-between">
                <div className="article-left-margin hidden md:block"></div>
                <TopicList />
                { children }
                <div className="article-right-margin hidden sm:block"></div>
                <Aside />
            </main>
        </section>
    );
}

export default Main;
