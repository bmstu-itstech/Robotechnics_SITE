import {Title} from "../../../../ui/title/Title";
import {Carousel} from "./ui/carousel/Carousel";
import {useEffect, useState} from "react";
import {INews} from "../../../../../services/news/news.interface";
import {NewsService} from "../../../../../services/news/news.service";

export const NewsSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    }
    const [pagination, setPagination] = useState<number>(0)

    const [state, setState] = useState<INews>()
    useEffect(() => {
        const fetchData = async () => {
            const data = await NewsService.getAll(pagination.toString())
            setState(data)
        }

        fetchData()
    }, [pagination])

    return (
        <div>
            <Title text={"НОВОСТИ"} />
            <Carousel settings={settings} />
        </div>
    )
}