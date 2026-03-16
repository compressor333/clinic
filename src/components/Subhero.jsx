import {Box, Button, Fade, Grid, Grow, Paper, Typography, Zoom} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import React from "react";

<Grid
    item
    xs={12}
    md={5}
    sx={{
        display: "flex",
        justifyContent: "center", // Центрирование по горизонтали
        alignItems: "center", // Центрирование по вертикали
    }}
>
    <Fade in={animated} timeout={1500}>
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            width: "100%",
            maxWidth: "500px", // Ограничиваем максимальную ширину
            mx: "auto", // Автоматические отступы по бокам
        }}>
            {/* Карточки статистики */}
            <Grid
                container
                spacing={2}
                sx={{
                    justifyContent: "center", // Центрируем карточки в сетке
                }}
            >
                {stats.map((stat, index) => (
                    <Grid
                        item
                        xs={6}
                        key={index}
                        sx={{
                            display: "flex",
                            justifyContent: "center", // Центрируем каждую карточку
                        }}
                    >
                        <Zoom in={animated} style={{ transitionDelay: `${index * 150}ms` }}>
                            <Paper
                                elevation={0}
                                sx={{
                                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                                    backdropFilter: "blur(10px)",
                                    color: "white",
                                    p: 2,
                                    borderRadius: "20px",
                                    border: "1px solid rgba(255, 255, 255, 0.1)",
                                    textAlign: "center",
                                    transition: "transform 0.3s ease",
                                    width: "100%", // Занимает всю ширину ячейки
                                    maxWidth: "180px", // Максимальная ширина карточки
                                    "&:hover": {
                                        transform: "translateY(-5px)",
                                        backgroundColor: "rgba(75, 123, 255, 0.2)",
                                    },
                                }}
                            >
                                <Box sx={{ color: "#4B7BFF", mb: 1 }}>
                                    {stat.icon}
                                </Box>
                                <Typography variant="h4" sx={{ fontWeight: 700, mb: 0.5 }}>
                                    {stat.value}
                                </Typography>
                                <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
                                    {stat.label}
                                </Typography>
                            </Paper>
                        </Zoom>
                    </Grid>
                ))}
            </Grid>

            {/* Дополнительный блок с призывом */}
            <Grow in={animated} timeout={2000}>
                <Paper
                    elevation={0}
                    sx={{
                        backgroundColor: "rgba(75, 123, 255, 0.2)",
                        backdropFilter: "blur(10px)",
                        color: "white",
                        p: 3,
                        borderRadius: "20px",
                        border: "1px solid rgba(75, 123, 255, 0.3)",
                        textAlign: "center",
                        width: "100%",
                        maxWidth: "400px",
                        mx: "auto", // Центрируем блок
                    }}
                >
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                        Нужна консультация?
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2, color: "rgba(255,255,255,0.8)" }}>
                        Наши специалисты готовы помочь вам 24/7
                    </Typography>
                    <Button
                        variant="contained"
                        startIcon={<PhoneIcon />}
                        href="tel:+79991234567"
                        sx={{
                            backgroundColor: "#4B7BFF",
                            color: "white",
                            borderRadius: "50px",
                            px: 4,
                            "&:hover": {
                                backgroundColor: "#3A5FCC",
                            },
                        }}
                    >
                        Позвонить сейчас
                    </Button>
                </Paper>
            </Grow>
        </Box>
    </Fade>
</Grid>