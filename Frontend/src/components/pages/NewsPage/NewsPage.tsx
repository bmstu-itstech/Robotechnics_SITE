import "./newspage.scss"
import Circle from "../../utils/circle/Circle"
import NewsCard from "../../utils/news-card/NewsCard";

export const NewsPage = () => {
    return (
        <section className={"news-page"}>
            <Circle title="новости"/>
            <div className="news-carousel">
                <NewsCard img="news1.png"/>
                <NewsCard img="news2.png"/>
                <NewsCard img="news3.png"/>
            </div>
        </section>
    )
}