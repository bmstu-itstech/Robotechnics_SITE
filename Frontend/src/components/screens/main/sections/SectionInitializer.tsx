import {EventsSection} from "./events/EventsSection";
import {NewsSection} from "./news/NewsSection";

export const SectionInitializer = () => {
    return (
        <div>
            <NewsSection/>
            <EventsSection/>
        </div>
    )
}