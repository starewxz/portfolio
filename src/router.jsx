import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout.jsx";
import ScrollToTop from "./components/scroll-to-top.jsx";
import MainPage from "./pages/mainPage.jsx";

// Everything except the landing page is split into its own chunk.
const AboutPage = lazy(() => import("./pages/aboutPage.jsx"));
const ProjectsPage = lazy(() => import("./pages/projectsPage.jsx"));
const ProjectDetails = lazy(() => import("./pages/projectDetails.jsx"));
const SkillsPage = lazy(() => import("./pages/skillsPage.jsx"));
const NotFoundPage = lazy(() => import("./pages/notFoundPage.jsx"));

const Router = () => (
    <BrowserRouter>
        <ScrollToTop />
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<MainPage />} />
                <Route path="/main" element={<MainPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/projects/projectDetails/:id" element={<ProjectDetails />} />
                <Route path="/skills" element={<SkillsPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
);

export default Router;
