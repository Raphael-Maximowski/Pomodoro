import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pomodoro from "../pages/Pomodoro";

export default function AppRouter () {
    return (
        <Router>
            <Routes>
                <Route path={'/'} element={<Pomodoro />} />
            </Routes>
        </Router>
    );
}
