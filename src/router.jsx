import {BrowserRouter, Route, Routes} from "react-router-dom";
import AboutPage from "./pages/aboutPage.jsx";
import MainPage from "./pages/mainPage.jsx";
import ProjectsPage from "./pages/projectsPage.jsx";
import SkillsPage from "./pages/skillsPage.jsx";
import ProjectDetails from "./pages/projectDetails.jsx";
import NotFoundPage from "./pages/notFoundPage.jsx";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/main" element={<MainPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/projects/projectDetails/:id" element={<ProjectDetails />} />
                <Route path="/skills" element={<SkillsPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;