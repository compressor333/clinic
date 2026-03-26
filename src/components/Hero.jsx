import React, { memo, useMemo } from "react";
import { Box, Typography, Button, Container, Grid, Chip } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmergencyIcon from "@mui/icons-material/Emergency";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import PsychologyIcon from "@mui/icons-material/Psychology";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion, useReducedMotion } from "framer-motion";

// Выносим статические данные
const BENEFITS = [
    { text: "Индивидуальный подход", icon: <PsychologyIcon /> },
    { text: "Опытные специалисты", icon: <FavoriteIcon /> },
    { text: "Современные методики", icon: <LocalHospitalIcon /> },
];

const HeroSection = memo(() => {
    const shouldReduceMotion = useReducedMotion();

    // Оптимизированные варианты анимаций
    const containerVariants = useMemo(() => ({
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: shouldReduceMotion ? 0 : 0.8,
                staggerChildren: shouldReduceMotion ? 0 : 0.15,
                delayChildren: shouldReduceMotion ? 0 : 0.2,
            }
        }
    }), [shouldReduceMotion]);

    const itemVariants = useMemo(() => ({
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: shouldReduceMotion ? 0 : 0.6 }
        }
    }), [shouldReduceMotion]);

    // Мемоизированные кнопки
    const ActionButtons = useMemo(() => (
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", justifyContent: { xs: "center", md: "flex-start" } }}>
            <Button
                variant="contained"
                size="large"
                startIcon={<PhoneIcon />}
                href="tel:+79991234567"
                sx={{
                    background: "linear-gradient(45deg, #4B7BFF 30%, #6E9EFF 90%)",
                    color: "white",
                    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                    py: { xs: 1.2, sm: 1.5, md: 1.8 },
                    px: { xs: 3, sm: 3.5, md: 4 },
                    borderRadius: "60px",
                    whiteSpace: "nowrap",
                    "&:hover": {
                        background: "linear-gradient(45deg, #3A5FCC 30%, #4B7BFF 90%)",
                        transform: "translateY(-2px)",
                    },
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
                    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                    py: { xs: 1.2, sm: 1.5, md: 1.8 },
                    px: { xs: 3, sm: 3.5, md: 4 },
                    borderRadius: "60px",
                    whiteSpace: "nowrap",
                    "&:hover": {
                        borderColor: "white",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                    },
                }}
            >
                Узнать больше
            </Button>
        </Box>
    ), []);

    return (
        <Box
            sx={{
                mt: 12, // 120px = 12 * 8px
                display: "flex",
                alignItems: "center",
                minHeight: { xs: "calc(100vh - 200px)", md: "calc(100vh - 150px)" },
                position: "relative",
                overflow: "hidden",
                py: { xs: 4, md: 0 },
            }}
        >
            {/* Градиентный фон с CSS анимацией вместо motion */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "radial-gradient(circle at 30% 50%, rgba(75, 123, 255, 0.2) 0%, transparent 70%)",
                    zIndex: 1,
                    animation: shouldReduceMotion ? "none" : "pulse 8s infinite ease-in-out",
                    "@keyframes pulse": {
                        "0%, 100%": { opacity: 0.3, transform: "scale(1)" },
                        "50%": { opacity: 0.5, transform: "scale(1.1)" },
                    },
                }}
            />

            <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
                <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
                    <Grid item xs={12} md={8} lg={7}>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <Box
                                sx={{
                                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                                    backdropFilter: "blur(15px)",
                                    borderRadius: { xs: "24px", md: "30px" },
                                    padding: { xs: 3, sm: 4, md: 5 },
                                    border: "1px solid rgba(255, 255, 255, 0.15)",
                                    textAlign: { xs: "center", md: "left" },
                                }}
                            >
                                {/* Бейджики */}
                                <Box sx={{
                                    display: "flex",
                                    gap: 1,
                                    mb: 3,
                                    flexWrap: "wrap",
                                    justifyContent: { xs: "center", md: "flex-start" },
                                }}>
                                    {BENEFITS.map((benefit, index) => (
                                        <motion.div
                                            key={index}
                                            custom={index * 0.1}
                                            variants={{
                                                hidden: { opacity: 0, scale: 0.8, x: -20 },
                                                visible: {
                                                    opacity: 1,
                                                    scale: 1,
                                                    x: 0,
                                                    transition: { delay: index * 0.1 }
                                                }
                                            }}
                                        >
                                            <Chip
                                                icon={benefit.icon}
                                                label={benefit.text}
                                                sx={{
                                                    backgroundColor: "rgba(75, 123, 255, 0.2)",
                                                    color: "white",
                                                    border: "1px solid rgba(255, 255, 255, 0.2)",
                                                }}
                                            />
                                        </motion.div>
                                    ))}
                                </Box>

                                {/* Заголовок - упрощенная анимация */}
                                <motion.div variants={itemVariants}>
                                    <Typography
                                        variant="h1"
                                        sx={{
                                            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "3rem", lg: "4rem" },
                                            fontWeight: 800,
                                            lineHeight: 1.2,
                                            mb: 2,
                                        }}
                                    >
                                        УСПЕШНО ЛЕЧИМ<br />
                                        АЛКОГОЛИЗМ И НАРКОМАНИЮ
                                    </Typography>
                                </motion.div>

                                {/* Подзаголовок */}
                                <motion.div variants={itemVariants}>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem", lg: "1.4rem" },
                                            fontWeight: 400,
                                            mb: 3,
                                            color: "rgba(255, 255, 255, 0.9)",
                                        }}
                                    >
                                        Не оставляйте близкого человека наедине с проблемой -
                                        позвоните нам. Поможем выбрать подходящее решение
                                        даже в безвыходных ситуациях
                                    </Typography>
                                </motion.div>

                                {ActionButtons}

                                {/* Информация о телефоне - упрощена */}
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: { xs: "center", md: "flex-start" },
                                        gap: 2,
                                        p: { xs: 1.5, sm: 2 },
                                        backgroundColor: "rgba(0, 0, 0, 0.2)",
                                        borderRadius: "15px",
                                    }}
                                >
                                    <EmergencyIcon sx={{ color: "#4B7BFF" }} />
                                    <Box>
                                        <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
                                            Круглосуточная горячая линия
                                        </Typography>
                                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                            +7 (999) 123-45-67
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;
