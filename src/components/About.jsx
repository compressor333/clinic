import React from "react";
import { Box, Typography, Container, Paper } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PeopleIcon from "@mui/icons-material/People";
import LockIcon from "@mui/icons-material/Lock";

export default function AboutSection() {
    return (
        <Box
            sx={{
                py: 8,
                position: "relative",
            }}
        >
            <Container maxWidth="lg">
                <Paper
                    elevation={0}
                    sx={{
                        backgroundColor: "rgba(255, 255, 255, 0.95)",
                        backdropFilter: "blur(10px)",
                        borderRadius: "20px",
                        p: { xs: 3, md: 6 },
                        boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    {/* Заголовок */}
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: "2rem", md: "2.5rem" },
                            fontWeight: 700,
                            color: "#1a1a1a",
                            mb: 4,
                            textAlign: "center",
                        }}
                    >
                        Наш подход к лечению
                    </Typography>

                    {/* Основной текст */}
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: { xs: "1rem", md: "1.1rem" },
                            lineHeight: 1.8,
                            color: "#333",
                            mb: 4,
                            textAlign: "justify",
                        }}
                    >
                        С каждым нашим клиентом проводится большой объем работы,
                        направленной на избавление от зависимости, восстановление
                        личности по современной методике, которая показала свою
                        эффективность в мировой практике лечения. Из 1920 часов
                        бодрствования пациента — 1500 часов уходит на занятия с ним.
                    </Typography>

                    {/* Статистика в цифрах */}
                    <Box
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "space-around",
                            gap: 3,
                            mb: 4,
                        }}
                    >
                        <Box sx={{ textAlign: "center" }}>
                            <Typography
                                variant="h3"
                                sx={{
                                    fontSize: { xs: "2rem", md: "2.5rem" },
                                    fontWeight: 700,
                                    color: "#4B7BFF",
                                }}
                            >
                                1920
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                часов бодрствования
                            </Typography>
                        </Box>
                        <Box sx={{ textAlign: "center" }}>
                            <Typography
                                variant="h3"
                                sx={{
                                    fontSize: { xs: "2rem", md: "2.5rem" },
                                    fontWeight: 700,
                                    color: "#4B7BFF",
                                }}
                            >
                                1500
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                часов занятий
                            </Typography>
                        </Box>
                    </Box>

                    {/* Продолжение текста */}
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: { xs: "1rem", md: "1.1rem" },
                            lineHeight: 1.8,
                            color: "#333",
                            mb: 4,
                            textAlign: "justify",
                        }}
                    >
                        При прохождении лечения в стационаре соблюдается строгий
                        распорядок дня, поддерживается высокая дисциплина. Пациент
                        постоянно находится под наблюдением наших специалистов и,
                        для лучшего погружения в процесс реабилитации, временно
                        изолируется от остального общества. Звонки и посещения
                        пациента в клинике разрешено только для близких родственников.
                    </Typography>

                    {/* Преимущества в карточках */}
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
                            gap: 3,
                            mt: 4,
                        }}
                    >
                        <Paper
                            elevation={0}
                            sx={{
                                p: 3,
                                backgroundColor: "rgba(75, 123, 255, 0.05)",
                                borderRadius: "15px",
                                textAlign: "center",
                            }}
                        >
                            <AccessTimeIcon sx={{ fontSize: 40, color: "#4B7BFF", mb: 2 }} />
                            <Typography variant="h6" gutterBottom fontWeight={600}>
                                Строгий распорядок
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Высокая дисциплина и структурированный подход к лечению
                            </Typography>
                        </Paper>

                        <Paper
                            elevation={0}
                            sx={{
                                p: 3,
                                backgroundColor: "rgba(75, 123, 255, 0.05)",
                                borderRadius: "15px",
                                textAlign: "center",
                            }}
                        >
                            <PeopleIcon sx={{ fontSize: 40, color: "#4B7BFF", mb: 2 }} />
                            <Typography variant="h6" gutterBottom fontWeight={600}>
                                24/7 Наблюдение
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Постоянный контроль специалистов
                            </Typography>
                        </Paper>

                        <Paper
                            elevation={0}
                            sx={{
                                p: 3,
                                backgroundColor: "rgba(75, 123, 255, 0.05)",
                                borderRadius: "15px",
                                textAlign: "center",
                            }}
                        >
                            <LockIcon sx={{ fontSize: 40, color: "#4B7BFF", mb: 2 }} />
                            <Typography variant="h6" gutterBottom fontWeight={600}>
                                Временная изоляция
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Для лучшего погружения в процесс реабилитации
                            </Typography>
                        </Paper>
                    </Box>

                    {/* Дополнительная информация о родственниках */}
                    <Box
                        sx={{
                            mt: 4,
                            p: 3,
                            backgroundColor: "rgba(75, 123, 255, 0.02)",
                            borderRadius: "15px",
                            border: "1px solid rgba(75, 123, 255, 0.2)",
                        }}
                    >
                        <Typography
                            variant="body1"
                            sx={{
                                fontStyle: "italic",
                                color: "#666",
                                textAlign: "center",
                            }}
                        >
                            Звонки и посещения пациента в клинике разрешено только
                            для близких родственников
                        </Typography>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
}