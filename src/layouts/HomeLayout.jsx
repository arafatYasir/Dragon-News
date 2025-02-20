import Header from "../components/Header";
import LatestNews from "../components/LatestNews";

const HomeLayout = () => {
    return (
        <div>
            <Header />
            <section className="max-w-6xl mx-auto">
                <LatestNews />
            </section>
        </div>
    );
};

export default HomeLayout;