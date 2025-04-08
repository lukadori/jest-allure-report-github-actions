import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./homePage/HomePage";
import CounterList from "./counter/CounterList";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/counter" element={<CounterList />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
