import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/news/categories")
        .then(res => res.json())
        .then(data => setCategories(data.data.news_category))
    }, []);
    return (
        <div>
            <h4 className="text-xl font-semibold leading-7 text-[#403F3F]">All Categories</h4>

            <div className="flex flex-col mt-5">
                {categories.map(category => <NavLink to={`/category/${category.category_id
                }`} className="text-xl font-semibold leading-7 text-[#403F3F] py-4 hover:bg-[#E7E7E7] cursor-pointer flex justify-center" key={category.category_id}>{category.category_name}</NavLink>)}
            </div>
        </div>
    );
};

export default LeftNavbar;