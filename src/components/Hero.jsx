import React, { memo, useMemo } from "react";
import { Box, Typography, Button, Container, Grid, Chip, Fade, Grow, Slide, Stack } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmergencyIcon from "@mui/icons-material/Emergency";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import PsychologyIcon from "@mui/icons-material/Psychology";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Выносим статические данные
const BENEFITS = [
    { text: "Индивидуальный подход", icon: <PsychologyIcon /> },
    { text: "Опытные специалисты", icon: <FavoriteIcon /> },
    { text: "Современные методики", icon: <LocalHospitalIcon /> },
];

const HERO_SPACING = {
    sectionMarginTop: { xs: 13, md: 12 },
    sectionPaddingY: { xs: 3, sm: 4, md: 5 },
    cardPadding: { xs: 2.5, sm: 4, md: 5 },
    contentGap: { xs: 2, md: 3 },
    buttonPaddingX: { xs: 2.5, sm: 3.5, md: 4 },
    buttonPaddingY: { xs: 1.1, sm: 1.4, md: 1.7 },
};

const HeroSection = memo(() => {
    // Мемоизированные кнопки
    const ActionButtons = useMemo(() => (
        <Box sx={{ display: "flex", gap: { xs: 1.5, sm: 2 }, flexWrap: "wrap", justifyContent: { xs: "center", md: "flex-start" } }}>
            <Button
                variant="contained"
                size="large"
                startIcon={<PhoneIcon />}
                href="tel:+79991234567"
                sx={{
                    background: "linear-gradient(45deg, var(--color-primary) 30%, var(--color-primary-light) 90%)",
                    color: "var(--color-white)",
                    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                    py: HERO_SPACING.buttonPaddingY,
                    px: HERO_SPACING.buttonPaddingX,
                    borderRadius: "60px",
                    whiteSpace: "nowrap",
                    "&:hover": {
                        background: "linear-gradient(45deg, var(--color-primary-dark) 30%, var(--color-primary) 90%)",
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
                    color: "var(--color-white)",
                    borderColor: "rgba(var(--color-white-rgb), 0.5)",
                    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                    py: HERO_SPACING.buttonPaddingY,
                    px: HERO_SPACING.buttonPaddingX,
                    borderRadius: "60px",
                    whiteSpace: "nowrap",
                    "&:hover": {
                        borderColor: "var(--color-white)",
                        backgroundColor: "rgba(var(--color-white-rgb), 0.1)",
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
                mt: HERO_SPACING.sectionMarginTop,
                display: "flex",
                alignItems: "center",
                minHeight: { xs: "calc(100vh - 200px)", md: "calc(100vh - 150px)" },
                position: "relative",
                overflow: "hidden",
                py: HERO_SPACING.sectionPaddingY,
            }}
        >
            {/* Градиентный фон с CSS анимацией */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "radial-gradient(circle at 30% 50%, rgba(var(--color-primary-rgb), 0.2) 0%, transparent 70%)",
                    zIndex: 1,
                    animation: "pulse 8s infinite ease-in-out",
                    "@media (prefers-reduced-motion: reduce)": {
                        animation: "none",
                    },
                    "@keyframes pulse": {
                        "0%, 100%": { opacity: 0.3, transform: "scale(1)" },
                        "50%": { opacity: 0.5, transform: "scale(1.1)" },
                    },
                }}
            />

            <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
                <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
                    <Grid size={{ xs: 12, md: 8, lg: 7 }}>
                        <Fade in timeout={800}>
                            <Box
                                sx={{
                                    backgroundColor: "rgba(var(--color-black-rgb), 0.4)",
                                    backdropFilter: "blur(15px)",
                                    borderRadius: { xs: "24px", md: "30px" },
                                    p: HERO_SPACING.cardPadding,
                                    border: "1px solid rgba(var(--color-white-rgb), 0.15)",
                                    textAlign: { xs: "center", md: "left" },
                                }}
                            >
                                <Stack spacing={HERO_SPACING.contentGap}>
                                    {/* Бейджики */}
                                    <Box sx={{
                                        display: "flex",
                                        gap: { xs: 0.75, sm: 1 },
                                        flexWrap: "wrap",
                                        justifyContent: { xs: "center", md: "flex-start" },
                                    }}>
                                        {BENEFITS.map((benefit, index) => (
                                            <Grow
                                                key={index}
                                                in
                                                timeout={500 + index * 150}
                                                style={{ transformOrigin: "left center" }}
                                            >
                                                <Chip
                                                    icon={benefit.icon}
                                                    label={benefit.text}
                                                    sx={{
                                                        backgroundColor: "rgba(var(--color-primary-rgb), 0.2)",
                                                        color: "var(--color-white)",
                                                        border: "1px solid rgba(var(--color-white-rgb), 0.2)",
                                                    }}
                                                />
                                            </Grow>
                                        ))}
                                    </Box>

                                    {/* Заголовок - упрощенная анимация */}
                                    <Slide in direction="up" timeout={600}>
                                        <Typography
                                            variant="h1"
                                            sx={{
                                                fontSize: { xs: "1.8rem", sm: "2.2rem", md: "3rem", lg: "4rem" },
                                                fontWeight: 800,
                                                lineHeight: 1.2,
                                            }}
                                        >
                                            УСПЕШНО ЛЕЧИМ<br />
                                            АЛКОГОЛИЗМ И НАРКОМАНИЮ
                                        </Typography>
                                    </Slide>

                                    {/* Подзаголовок */}
                                    <Slide in direction="up" timeout={700}>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem", lg: "1.4rem" },
                                                fontWeight: 400,
                                                color: "rgba(var(--color-white-rgb), 0.9)",
                                            }}
                                        >
                                            Не оставляйте близкого человека наедине с проблемой -
                                            позвоните нам. Поможем выбрать подходящее решение
                                            даже в безвыходных ситуациях
                                        </Typography>
                                    </Slide>

                                    {ActionButtons}

                                    {/* Информация о телефоне - упрощена */}
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: { xs: "center", md: "flex-start" },
                                            gap: 2,
                                            p: { xs: 1.5, sm: 2.25 },
                                            backgroundColor: "rgba(var(--color-black-rgb), 0.2)",
                                            borderRadius: "15px",
                                        }}
                                    >
                                        <EmergencyIcon sx={{ color: "var(--color-primary)", mt: 0.5 }} />
                                        <Box>
                                            <Typography variant="body2" sx={{ color: "rgba(var(--color-white-rgb), 0.7)" }}>
                                                Круглосуточная горячая линия
                                            </Typography>
                                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                                +7 (999) 123-45-67
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Stack>
                            </Box>
                        </Fade>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;
