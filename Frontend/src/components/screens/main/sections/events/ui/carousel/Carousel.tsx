import Slider from "react-slick"

export const Carousel = ({ settings }: { settings: any }) => {
    return (
        <div>
            <Slider {...settings}>
            </Slider>
        </div>
    )
}