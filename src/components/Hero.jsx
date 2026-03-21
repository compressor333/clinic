import React, { useState, useEffect } from "react";
import {
    Box,
    Typography,
    Button,
    Container,
    Grid,
    Chip,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmergencyIcon from "@mui/icons-material/Emergency";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import PsychologyIcon from "@mui/icons-material/Psychology";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroSection() {
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        setAnimated(true);
    }, []);

    // Преимущества
    const benefits = [
        { text: "Индивидуальный подход", icon: <PsychologyIcon />, delay: 0 },
        { text: "Опытные специалисты", icon: <FavoriteIcon />, delay: 0.1 },
        { text: "Современные методики", icon: <LocalHospitalIcon />, delay: 0.2 },
    ];

    // Варианты анимаций
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
                staggerChildren: 0.15,
                delayChildren: 0.2,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
            }
        }
    };

    const chipVariants = {
        hidden: { opacity: 0, scale: 0.8, x: -20 },
        visible: (custom) => ({
            opacity: 1,
            scale: 1,
            x: 0,
            transition: {
                delay: custom * 0.1,
                duration: 0.5,
                type: "spring",
                damping: 15,
                stiffness: 100,
            }
        })
    };

    const buttonVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.95 },
        visible: (custom) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                delay: custom * 0.1,
                duration: 0.5,
                type: "spring",
                damping: 15,
                stiffness: 100,
            }
        }),
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.2,
                ease: "easeOut",
            }
        },
        tap: {
            scale: 0.95,
            transition: {
                duration: 0.1,
            }
        }
    };

    const floatingIconVariants = {
        animate: {
            x: {
                value: [0, 50, 0],
                transition: {
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                    times: [0, 0.5, 1],
                }
            },
            y: {
                value: [0, 50, 0],
                transition: {
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                    times: [0, 0.5, 1],
                }
            },
            transition: {
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
            }
        }
    };

    const backgroundGradientVariants = {
        animate: {
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
            transition: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
            }
        }
    };

    const emergencyCardVariants = {
        hidden: { opacity: 0, x: -30, scale: 0.95 },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                delay: 0.8,
                duration: 0.5,
                type: "spring",
                damping: 15,
                stiffness: 100,
            }
        },
        hover: {
            scale: 1.02,
            transition: {
                duration: 0.2,
            }
        }
    };

    return (
        <Box
            sx={{
                mt: '120px',
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: { xs: "calc(100vh - 200px)", md: "calc(100vh - 150px)" },
                position: "relative",
                overflow: "hidden",
                py: { xs: 4, md: 0 },
            }}
        >
            {/* Анимированный фон с градиентом */}
            <motion.div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "radial-gradient(circle at 30% 50%, rgba(75, 123, 255, 0.2) 0%, transparent 70%)",
                    zIndex: 1,
                }}
                variants={backgroundGradientVariants}
                initial={{ opacity: 2, scale: 1 }}
                animate="animate"
            />

            {/* Декоративные летающие элементы - скрыты на мобильных */}
            <motion.div
                style={{
                    position: "absolute",
                    top: "20%",
                    right: "10%",
                    zIndex: 1,
                    display: { xs: "none", md: "block" },
                }}
                variants={floatingIconVariants}
                animate="animate"
            >
                <LocalHospitalIcon sx={{ fontSize: 60, color: "rgba(75, 123, 255, 0.3)" }} />
            </motion.div>

            <motion.div
                style={{
                    position: "absolute",
                    bottom: "15%",
                    left: "5%",
                    zIndex: 1,
                    display: { xs: "none", md: "block" },
                }}
                variants={floatingIconVariants}
                animate="animate"
            >
                <PsychologyIcon sx={{ fontSize: 80, color: "rgba(118, 75, 162, 0.2)" }} />
            </motion.div>

            <Container
                maxWidth="lg"
                sx={{
                    position: "relative",
                    zIndex: 2,
                    px: { xs: 2, sm: 3, md: 4 },
                }}
            >
                <Grid
                    container
                    spacing={{ xs: 3, md: 4 }}
                    alignItems="center"
                    justifyContent="center"
                >
                    {/* Левая колонка - основной контент */}
                    <Grid item xs={12} md={8} lg={7}>
                        <AnimatePresence mode="wait">
                            {animated && (
                                <motion.div
                                    variants={containerVariants}
                                    initial="initial"
                                    animate="visible"
                                >
                                    <Box
                                        sx={{
                                            backgroundColor: "rgba(0, 0, 0, 0.4)",
                                            backdropFilter: "blur(15px)",
                                            borderRadius: { xs: "24px", md: "30px" },
                                            padding: { xs: 3, sm: 4, md: 5 },
                                            border: "1px solid rgba(255, 255, 255, 0.15)",
                                            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                                            textAlign: { xs: "center", md: "left" },
                                        }}
                                    >
                                        {/* Бейджики преимуществ */}
                                        <Box sx={{
                                            display: "flex",
                                            gap: 1,
                                            mb: 3,
                                            flexWrap: "wrap",
                                            justifyContent: { xs: "center", md: "flex-start" },
                                        }}>
                                            {benefits.map((benefit, index) => (
                                                <motion.div
                                                    key={index}
                                                    custom={benefit.delay}
                                                    variants={chipVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    whileHover={{ scale: 1.05 }}
                                                >
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
                                                            fontSize: { xs: "0.75rem", sm: "0.875rem" },
                                                            height: { xs: 32, sm: 36 },
                                                        }}
                                                    />
                                                </motion.div>
                                            ))}
                                        </Box>

                                        {/* Заголовок */}
                                        <motion.div variants={itemVariants}>
                                            <Typography
                                                variant="h1"
                                                sx={{
                                                    fontSize: { xs: "1.8rem", sm: "2.2rem", md: "3rem", lg: "4rem" },
                                                    fontWeight: 800,
                                                    lineHeight: 1.2,
                                                    mb: 2,
                                                    textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                                                }}
                                            >
                                                <motion.span
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.3, duration: 0.6 }}
                                                    style={{ display: "inline-block" }}
                                                >
                                                    УСПЕШНО ЛЕЧИМ
                                                </motion.span>
                                                <br />
                                                <motion.span
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.5, duration: 0.6 }}
                                                    style={{ display: "inline-block" }}
                                                >
                                                    АЛКОГОЛИЗМ И НАРКОМАНИЮ
                                                </motion.span>
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
                                                    lineHeight: 1.5,
                                                    color: "rgba(255, 255, 255, 0.9)",
                                                }}
                                            >
                                                Не оставляйте близкого человека наедине с проблемой -
                                                позвоните нам. Поможем выбрать подходящее решение
                                                даже в безвыходных ситуациях
                                            </Typography>
                                        </motion.div>

                                        {/* Кнопки действий */}
                                        <Box sx={{
                                            display: "flex",
                                            gap: 2,
                                            flexWrap: "wrap",
                                            mb: 4,
                                            justifyContent: { xs: "center", md: "flex-start" },
                                        }}>
                                            <motion.div
                                                custom={0}
                                                variants={buttonVariants}
                                                initial="hidden"
                                                animate="visible"
                                                whileHover="hover"
                                                whileTap="tap"
                                            >
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
                                                        boxShadow: "0 8px 20px rgba(75, 123, 255, 0.4)",
                                                        whiteSpace: "nowrap",
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
                                            </motion.div>

                                            <motion.div
                                                custom={1}
                                                variants={buttonVariants}
                                                initial="hidden"
                                                animate="visible"
                                                whileHover="hover"
                                                whileTap="tap"
                                            >
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
                                                        borderWidth: "2px",
                                                        whiteSpace: "nowrap",
                                                        "&:hover": {
                                                            borderColor: "white",
                                                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                                                        },
                                                    }}
                                                >
                                                    Узнать больше
                                                </Button>
                                            </motion.div>
                                        </Box>

                                        {/* Дополнительная информация с анимацией */}
                                        <motion.div
                                            variants={emergencyCardVariants}
                                            initial="hidden"
                                            animate="visible"
                                            whileHover="hover"
                                        >
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: { xs: "center", md: "flex-start" },
                                                    gap: 2,
                                                    p: { xs: 1.5, sm: 2 },
                                                    backgroundColor: "rgba(0, 0, 0, 0.2)",
                                                    borderRadius: "15px",
                                                    cursor: "pointer",
                                                }}
                                            >
                                                <motion.div
                                                    animate={{
                                                        scale: [1, 1.1, 1],
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        repeatDelay: 1,
                                                    }}
                                                >
                                                    <EmergencyIcon sx={{ color: "#4B7BFF", fontSize: { xs: 24, sm: 30 } }} />
                                                </motion.div>
                                                <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                                                    <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)", fontSize: { xs: "0.7rem", sm: "0.8rem" } }}>
                                                        Круглосуточная горячая линия
                                                    </Typography>
                                                    <Typography variant="h6" sx={{ fontWeight: 600, fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" } }}>
                                                        +7 (999) 123-45-67
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </motion.div>
                                    </Box>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </Grid>
                </Grid>
            </Container>

            {/* Декоративные элементы */}
            <motion.div
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "100px",
                    background: "linear-gradient(to top, rgba(0,0,0,0.2), transparent)",
                    zIndex: 1,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            />
        </Box>
    );
}