import Header from "./Header";
import HomeContent from "./HomeContent";
import Meta from "./Meta";

const Home = () => {
    return (
        <div>
            <Header />
            <HomeContent />

            <Meta title="Homepage" />
        </div>
    );
}

export default Home;
