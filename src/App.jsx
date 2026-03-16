import React from "react";
import { GlobalStyles, Box } from "@mui/material";
import LogoBar from "./components/LogoBar";
import Navigation from "./components/Navigation";
import HeroSection from "./components/Hero";
import AboutSection from "./components/About";
import Footer from "./components/Footer"; // Импортируем футер
import backgroundImage from "./assets/back.png";

export default function App() {
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
            }} />

            <Box sx={{ flex: 1 }}>
                <LogoBar />
                <Navigation />
                <HeroSection />
            </Box>

            <Footer /> {/* Футер всегда внизу */}
        </>
    );
}