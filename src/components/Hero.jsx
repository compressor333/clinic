import React, { useState, useEffect } from "react";
import {
    Box,
    Typography,
    Button,
    Container,
    Paper,
    Grid,
    Chip,
    Fade,
    Grow,
    Zoom,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmergencyIcon from "@mui/icons-material/Emergency";
import VerifiedIcon from "@mui/icons-material/Verified";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import PsychologyIcon from "@mui/icons-material/Psychology";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SecurityIcon from "@mui/icons-material/Security";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function HeroSection() {
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        setAnimated(true);
    }, []);

    // Статистика для отображения
    const stats = [
        { value: "98%", label: "Успешных случаев", icon: <VerifiedIcon /> },
        { value: "24/7", label: "Круглосуточно", icon: <AccessTimeIcon /> },
        { value: "15+", label: "Лет опыта", icon: <LocalHospitalIcon /> },
        { value: "Анонимно", label: "Гарантия", icon: <SecurityIcon /> },
    ];

    // Преимущества
    const benefits = [
        { text: "Индивидуальный подход", icon: <PsychologyIcon /> },
        { text: "Опытные специалисты", icon: <FavoriteIcon /> },
        { text: "Современные методики", icon: <LocalHospitalIcon /> },
    ];

    return (
        <Box
            sx={{
                minHeight: "90vh",
                display: "flex",
                alignItems: "center",
                position: "relative",
                mt: { xs: "150px", md: "180px" }, // Увеличил отступ
                mb: 4, // Добавил отступ снизу
                overflow: "hidden",
            }}
        >
            {/* Анимированный фон с градиентом */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "radial-gradient(circle at 30% 50%, rgba(75, 123, 255, 0.2) 0%, transparent 50%)",
                    zIndex: 1,
                }}
            />

            <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
                <Grid container spacing={4} alignItems="center">

                    {/* Левая колонка - основной контент */}
                    <Grid item xs={12} md={7}>
                        <Fade in={animated} timeout={1000}>
                            <Paper
                                elevation={0}
                                sx={{
                                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                                    backdropFilter: "blur(15px)",
                                    color: "white",
                                    p: { xs: 3, md: 5 },
                                    borderRadius: "30px",
                                    border: "1px solid rgba(255, 255, 255, 0.15)",
                                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                                }}
                            >
                                {/* Бейджики преимуществ */}
                                <Box sx={{ display: "flex", gap: 1, mb: 3, flexWrap: "wrap" }}>
                                    {benefits.map((benefit, index) => (
                                        <Zoom in={animated} style={{ transitionDelay: `${index * 200}ms` }} key={index}>
                                            <Chip
                                                icon={benefit.icon}
                                                label={benefit.text}
                                                sx={{
                                                    backgroundColor: "rgba(75, 123, 255, 0.2)",
                                                    color: "white",
                                                    border: "1px solid rgba(255, 255, 255, 0.2)",
                                                    "& .MuiChip-icon": {
                                                        color: "#4B7BFF",
                                                    },
                                                }}
                                            />
                                        </Zoom>
                                    ))}
                                </Box>

                                {/* Заголовок */}
                                <Typography
                                    variant="h1"
                                    sx={{
                                        fontSize: { xs: "2.2rem", md: "4rem" },
                                        fontWeight: 800,
                                        lineHeight: 1.2,
                                        mb: 2,
                                        textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                                    }}
                                >
                                    <Box component="span">
                                        УСПЕШНО ЛЕЧИМ
                                    </Box>
                                    <br />
                                    АЛКОГОЛИЗМ И НАРКОМАНИЮ
                                </Typography>

                                {/* Подзаголовок */}
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontSize: { xs: "1.1rem", md: "1.4rem" },
                                        fontWeight: 400,
                                        mb: 3,
                                        lineHeight: 1.6,
                                        color: "rgba(255, 255, 255, 0.9)",
                                    }}
                                >
                                    Не оставляйте близкого человека наедине с проблемой -
                                    позвоните нам. Поможем выбрать подходящее решение
                                    даже в безвыходных ситуациях
                                </Typography>

                                {/* Кнопки действий */}
                                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 4 }}>
                                    <Button
                                        variant="contained"
                                        size="large"
                                        startIcon={<PhoneIcon />}
                                        href="tel:+79991234567"
                                        sx={{
                                            background: "linear-gradient(45deg, #4B7BFF 30%, #6E9EFF 90%)",
                                            color: "white",
                                            fontSize: "1.2rem",
                                            py: 1.8,
                                            px: 4,
                                            borderRadius: "60px",
                                            boxShadow: "0 8px 20px rgba(75, 123, 255, 0.4)",
                                            "&:hover": {
                                                background: "linear-gradient(45deg, #3A5FCC 30%, #4B7BFF 90%)",
                                                transform: "translateY(-2px)",
                                                boxShadow: "0 12px 25px rgba(75, 123, 255, 0.6)",
                                            },
                                            transition: "all 0.3s ease",
                                        }}
                                    >
                                        Срочная помощь
                                    </Button>

                                    <Button
                                        variant="outlined"
                                        size="large"
                                        endIcon={<ArrowForwardIcon />}
                                        sx={{
                                            color: "white",
                                            borderColor: "rgba(255, 255, 255, 0.5)",
                                            fontSize: "1.2rem",
                                            py: 1.8,
                                            px: 4,
                                            borderRadius: "60px",
                                            borderWidth: "2px",
                                            "&:hover": {
                                                borderColor: "white",
                                                backgroundColor: "rgba(255, 255, 255, 0.1)",
                                            },
                                        }}
                                    >
                                        Узнать больше
                                    </Button>
                                </Box>

                                {/* Дополнительная информация */}
                                <Box sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 2,
                                    p: 2,
                                    backgroundColor: "rgba(0, 0, 0, 0.2)",
                                    borderRadius: "15px",
                                }}>
                                    <EmergencyIcon sx={{ color: "#4B7BFF", fontSize: 30 }} />
                                    <Box>
                                        <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
                                            Круглосуточная горячая линия
                                        </Typography>
                                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                            +7 (999) 123-45-67
                                        </Typography>
                                    </Box>
                                </Box>
                            </Paper>
                        </Fade>
                    </Grid>

                    {/* Правая колонка - статистика и преимущества */}
                    {/* Правая колонка - статистика и преимущества */}

                </Grid>
            </Container>

            {/* Декоративные элементы */}
            <Box
                sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "100px",
                    background: "linear-gradient(to top, rgba(0,0,0,0.2), transparent)",
                    zIndex: 1,
                }}
            />
        </Box>
    );
}