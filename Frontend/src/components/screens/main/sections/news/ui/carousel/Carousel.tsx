import Slider from "react-slick"
import {CarouselItem} from "./CarouselItem";

export const Carousel = ({ settings }: { settings: any }) => {
    return (
        <div>
            <Slider {...settings}>
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
            </Slider>
        </div>
    )
}