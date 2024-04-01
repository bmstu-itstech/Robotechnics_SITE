import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./components/utils/menu/Menu";
import {NewsPage} from "./components/pages/NewsPage/NewsPage";
import {EventsPage} from "./components/pages/EventsPage/EventsPage";
import {EventSection} from "./components/pages/EventSection/EventSection";
import {Partners} from "./components/pages/Partners/Partners";
import {Contacts} from "./components/pages/Contacts/Contacts";
import {MainPage} from "./components/pages/MainPage/MainPage";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";

function App() {
    return (
    <Router>
        <Menu />
        <main>
            <Routes>
                <Route path="/" element={<MainPage/>} />
                <Route path="/robot" element={<MainPage/>} />
                <Route path="/news_page" element={<NewsPage/>} />
                <Route path="/events_page" element={<EventsPage/>} />
                <Route path="/event_section" element={<EventSection/>} />
                <Route path="/partners" element={<Partners/>} />
                <Route path="/contacts" element={<Contacts/>} />
            </Routes>
        </main>
    </Router>
  );
}

export default App;
