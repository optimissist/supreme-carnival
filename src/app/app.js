import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../component/header/header";
import Home from "../component/about/about";
import PortfolioContainer from "../component/portfolio/portfolioContainer";
import Resume from "../component/resume/resume";
import Footer from "../component/footer/footer";
import Contact from "../component/contact/contact";


export function App() {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/resume' element={<Resume />} />
                    <Route path='/portfolio' element={<PortfolioContainer />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    )
}