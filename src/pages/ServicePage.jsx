import React, { memo } from "react";
import {
    Box,
    Button,
    Card,
    CardContent,
    Chip,
    Container,
    Divider,
    Grid,
    Stack,
    Typography,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HealingIcon from "@mui/icons-material/Healing";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import PhoneIcon from "@mui/icons-material/Phone";
import PsychologyIcon from "@mui/icons-material/Psychology";
import { Link as RouterLink } from "react-router-dom";

const categoryIcons = {
    Алкоголизм: <LocalHospitalIcon />,
    Наркомания: <MedicalServicesIcon />,
    Реабилитация: <HealingIcon />,
};

const ServicePage = memo(({ service }) => {
    const categoryIcon = categoryIcons[service.category] ?? <PsychologyIcon />;

    return (
        <Box sx={{ pt: { xs: 15, md: 16 }, pb: { xs: 6, md: 10 } }}>
            <Container maxWidth="lg">
                <Grid container spacing={{ xs: 3, md: 4 }} alignItems="stretch">
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Card
                            elevation={0}
                            sx={{
                                height: "100%",
                                borderRadius: { xs: "26px", md: "34px" },
                                background: "linear-gradient(135deg, rgba(var(--color-black-rgb), 0.74), rgba(var(--color-primary-rgb), 0.55))",
                                color: "var(--color-white)",
                                border: "1px solid rgba(var(--color-white-rgb), 0.16)",
                                backdropFilter: "blur(18px)",
                                overflow: "hidden",
                                position: "relative",
                            }}
                        >
                            <Box
                                sx={{
                                    position: "absolute",
                                    width: 260,
                                    height: 260,
                                    borderRadius: "50%",
                                    right: -80,
                                    top: -90,
                                    background: "rgba(var(--color-white-rgb), 0.12)",
                                }}
                            />
                            <CardContent sx={{ p: { xs: 3, sm: 4, md: 5 }, position: "relative" }}>
                                <Stack spacing={3}>
                                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                                        <Chip
                                            icon={categoryIcon}
                                            label={service.category}
                                            sx={{
                                                color: "var(--color-white)",
                                                backgroundColor: "rgba(var(--color-white-rgb), 0.14)",
                                                "& .MuiChip-icon": { color: "var(--color-white)" },
                                            }}
                                        />
                                        <Chip
                                            icon={<AccessTimeIcon />}
                                            label={service.accent}
                                            sx={{
                                                color: "var(--color-white)",
                                                backgroundColor: "rgba(var(--color-primary-rgb), 0.55)",
                                                "& .MuiChip-icon": { color: "var(--color-white)" },
                                            }}
                                        />
                                    </Stack>

                                    <Box>
                                        <Typography
                                            variant="overline"
                                            sx={{
                                                color: "rgba(var(--color-white-rgb), 0.72)",
                                                letterSpacing: "0.14em",
                                                fontWeight: 700,
                                            }}
                                        >
                                            {service.eyebrow}
                                        </Typography>
                                        <Typography
                                            component="h1"
                                            variant="h2"
                                            sx={{
                                                mt: 1,
                                                fontWeight: 800,
                                                fontSize: { xs: "2.15rem", md: "3.35rem" },
                                                lineHeight: 1.06,
                                            }}
                                        >
                                            {service.title}
                                        </Typography>
                                    </Box>

                                    <Typography
                                        variant="h6"
                                        sx={{
                                            color: "rgba(var(--color-white-rgb), 0.86)",
                                            fontSize: { xs: "1rem", md: "1.18rem" },
                                            lineHeight: 1.7,
                                        }}
                                    >
                                        {service.lead}
                                    </Typography>

                                    <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
                                        <Button
                                            variant="contained"
                                            size="large"
                                            startIcon={<PhoneIcon />}
                                            href="tel:+74951234567"
                                            sx={{
                                                borderRadius: "999px",
                                                backgroundColor: "var(--color-primary)",
                                                px: 3,
                                                "&:hover": { backgroundColor: "var(--color-primary-dark)" },
                                            }}
                                        >
                                            Позвонить сейчас
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            size="large"
                                            endIcon={<ArrowForwardIcon />}
                                            component={RouterLink}
                                            to="/about"
                                            sx={{
                                                borderRadius: "999px",
                                                color: "var(--color-white)",
                                                borderColor: "rgba(var(--color-white-rgb), 0.45)",
                                                px: 3,
                                                "&:hover": {
                                                    borderColor: "var(--color-white)",
                                                    backgroundColor: "rgba(var(--color-white-rgb), 0.1)",
                                                },
                                            }}
                                        >
                                            Контакты
                                        </Button>
                                    </Stack>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid size={{ xs: 12, md: 5 }}>
                        <Card
                            elevation={0}
                            sx={{
                                height: "100%",
                                borderRadius: { xs: "26px", md: "34px" },
                                backgroundColor: "rgba(var(--color-white-rgb), 0.92)",
                                border: "1px solid rgba(var(--color-primary-rgb), 0.16)",
                                backdropFilter: "blur(12px)",
                            }}
                        >
                            <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
                                <Typography variant="h5" component="h2" sx={{ fontWeight: 800, mb: 2 }}>
                                    Что входит
                                </Typography>
                                <Stack spacing={1.5}>
                                    {service.highlights.map((highlight) => (
                                        <Stack key={highlight} direction="row" spacing={1.25} alignItems="center">
                                            <CheckCircleIcon sx={{ color: "var(--color-primary)" }} />
                                            <Typography variant="body1" sx={{ color: "var(--color-text)" }}>
                                                {highlight}
                                            </Typography>
                                        </Stack>
                                    ))}
                                </Stack>

                                <Divider sx={{ my: 3 }} />

                                <Typography variant="h6" component="h3" sx={{ fontWeight: 800, mb: 2 }}>
                                    Результат
                                </Typography>
                                <Typography variant="body1" sx={{ color: "var(--color-text-secondary)", lineHeight: 1.7 }}>
                                    {service.result}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                <Card
                    elevation={0}
                    sx={{
                        mt: { xs: 3, md: 4 },
                        borderRadius: { xs: "26px", md: "34px" },
                        backgroundColor: "rgba(var(--color-white-rgb), 0.9)",
                        border: "1px solid rgba(var(--color-primary-rgb), 0.14)",
                        backdropFilter: "blur(12px)",
                    }}
                >
                    <CardContent sx={{ p: { xs: 3, sm: 4, md: 5 } }}>
                        <Typography variant="h4" component="h2" sx={{ fontWeight: 800, mb: 3 }}>
                            Как проходит помощь
                        </Typography>
                        <Grid container spacing={2.5}>
                            {service.steps.map((step, index) => (
                                <Grid key={step} size={{ xs: 12, md: 4 }}>
                                    <Stack
                                        spacing={1.5}
                                        sx={{
                                            height: "100%",
                                            p: 2.5,
                                            borderRadius: "22px",
                                            backgroundColor: "rgba(var(--color-primary-rgb), 0.07)",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 42,
                                                height: 42,
                                                borderRadius: "50%",
                                                display: "grid",
                                                placeItems: "center",
                                                color: "var(--color-white)",
                                                backgroundColor: "var(--color-primary)",
                                                fontWeight: 800,
                                            }}
                                        >
                                            {index + 1}
                                        </Box>
                                        <Typography variant="body1" sx={{ color: "var(--color-text-secondary)", lineHeight: 1.7 }}>
                                            {step}
                                        </Typography>
                                    </Stack>
                                </Grid>
                            ))}
                        </Grid>
                    </CardContent>
                </Card>
            </Container>
        </Box>
    );
});

ServicePage.displayName = "ServicePage";

export default ServicePage;
