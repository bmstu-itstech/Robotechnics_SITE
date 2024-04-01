import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./components/utils/menu/Menu";
import {News} from "./components/pages/News/News";
import {Events} from "./components/pages/Events/Events";
import {Event} from "./components/pages/Event/Event";
import {Partners} from "./components/pages/Partners/Partners";
import {Contacts} from "./components/pages/Contacts/Contacts";
import {Home} from "./components/pages/Home/Home";

function App() {
    return (
    <Router>
        <Menu />
        <main>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/news" element={<News/>} />
                <Route path="/events" element={<Events/>} />
                <Route path="/event/:id" element={<Event/>} />
                <Route path="/partners" element={<Partners/>} />
                <Route path="/contacts" element={<Contacts/>} />
            </Routes>
        </main>
    </Router>
  );
}

export default App;
