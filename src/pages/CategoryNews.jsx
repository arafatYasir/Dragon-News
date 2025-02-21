import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
    const data = useLoaderData();
    const news = data.data;
    return (
        <div>
            <h2 className="text-xl font-semibold leading-7 text-[#403F3F]">Dragon News Home</h2>

            <div className="mt-5 flex flex-col gap-8">
                {
                    news.map(singleNews => <NewsCard singleNews={singleNews} key={singleNews._id} />)
                }
            </div>
        </div>
    );
};

export default CategoryNews;