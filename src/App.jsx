import React from "react";
import {GlobalStyles, Box} from "@mui/material";
import LogoBar from "./components/LogoBar";
import Navigation from "./components/Navigation";
import HeroSection from "./components/Hero";
import Footer from "./components/Footer"; // Импортируем футер
import NotFound from "./components/NotFound.jsx";
import backgroundImage from "./assets/back.png";
import AboutSection from "./components/About";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

export default function App() {
    const allLinks = [
        // Ссылки из раздела "Алкоголизм"
        "/alcoholism/withdrawal",
        "/alcoholism/coding",
        "/alcoholism/iv",
        "/alcoholism/rehabilitation",

        // Ссылки из раздела "Наркомания"
        "/addiction/detoxification",
        "/addiction/ubod",
        "/addiction/rehabilitation",
        "/addiction/social-adaptation",

        // Ссылки из раздела "Реабилитация"
        "/rehabilitation/inpatient",
        "/rehabilitation/day-hospital",
        "/rehabilitation/outpatient",
        "/rehabilitation/psychotherapy",

        // Ссылка из раздела "Контакты"
        "/about", // исправлено: добавлен слэш
    ];
    return (
        <>
            <GlobalStyles styles={{
                body: {
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed',
                    margin: 0,
                    padding: 0,
                },
                '#root': {
                    minHeight: '100vh',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    overflowX: 'hidden',
                },
            }}/>
            <BrowserRouter>
                <Box sx={{flex: 1}}>
                    <LogoBar/>
                    <Navigation/>
                    <Routes>
                        <Route path="/" element={<HeroSection />} />
                        <Route path="/about" element={<AboutSection />} />
                        <Route path="/alcoholism/withdrawal" element={<NotFound/>} />
                        <Route path="/alcoholism/coding" element={<NotFound/>} />
                        <Route path="/alcoholism/iv" element={<NotFound/>} />
                        <Route path="/alcoholism/rehabilitation" element={<NotFound/>} />
                        <Route path="/alcoholism/rehabilitation" element={<NotFound/>} />
                        <Route path="/addiction/detoxification" element={<NotFound/>} />
                        <Route path="/addiction/ubod" element={<NotFound/>} />
                        <Route path="/addiction/rehabilitation" element={<NotFound/>} />
                        <Route path="/addiction/social-adaptation" element={<NotFound/>} />
                        <Route path="/rehabilitation/inpatient" element={<NotFound/>} />
                        <Route path="/rehabilitation/day-hospital" element={<NotFound/>} />
                        <Route path="/rehabilitation/outpatient" element={<NotFound/>} />
                        <Route path="/rehabilitation/psychotherapy" element={<NotFound/>} />
                    </Routes>
                </Box>
                <Footer/>
            </BrowserRouter>
        </>
    );
}