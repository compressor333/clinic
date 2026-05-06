import React, { lazy, Suspense } from "react";
import { GlobalStyles, Box, CircularProgress } from "@mui/material";
import LogoBar from "./components/LogoBar";
import Navigation from "./components/Navigation";
import HeroSection from "./components/Hero";
import Footer from "./components/Footer";
import backgroundImage from "./assets/back.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import serviceContent from "./pages/serviceContent";

const AboutSection = lazy(() => import("./components/About"));
const ServicePage = lazy(() => import("./pages/ServicePage.jsx"));
const NotFound = lazy(() => import("./components/NotFound.jsx"));

const loadingFallback = (
    <Box
        sx={{
            minHeight: "50vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}
    >
        <CircularProgress sx={{ color: "var(--color-primary)" }} />
    </Box>
);

export default function App() {
    return (
        <>
            <GlobalStyles styles={{
                body: {
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "fixed",
                    margin: 0,
                    padding: 0,
                },
                "#root": {
                    minHeight: "100vh",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    overflowX: "hidden",
                },
            }}/>
            <BrowserRouter>
                <Box sx={{ flex: 1 }}>
                    <LogoBar />
                    <Navigation />
                    <Suspense fallback={loadingFallback}>
                        <Routes>
                            <Route path="/" element={<HeroSection />} />
                            <Route path="/about" element={<AboutSection />} />
                            {serviceContent.map((service) => (
                                <Route
                                    key={service.path}
                                    path={service.path}
                                    element={<ServicePage service={service} />}
                                />
                            ))}
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </Suspense>
                </Box>
                <Footer />
            </BrowserRouter>
        </>
    );
}
