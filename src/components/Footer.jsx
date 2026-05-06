import React from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    Link,
    IconButton,
    Divider,
    TextField,
    Button,
    Paper,
} from "@mui/material";
import {
    Phone,
    Email,
    LocationOn,
    Facebook,
    Instagram,
    Telegram,
    YouTube,
    AccessTime,
    ArrowForward,
} from "@mui/icons-material";
import logo from "../assets/logo.gif"; // Путь к вашему логотипу

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <Box
            component="footer"
            sx={{
                position: "relative",
                backgroundColor: "rgba(var(--color-surface-dark-rgb), 0.95)",
                backdropFilter: "blur(10px)",
                color: "var(--color-white)",
                mt: 8,
                borderTop: "1px solid rgba(var(--color-white-rgb), 0.1)",
            }}
        >
            {/* Основная часть футера */}
            <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
                <Grid container spacing={{ xs: 4, md: 6 }}>

                    {/* Колонка 1: Логотип и описание */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                            <img src={logo} alt="Клиника Вимас" style={{ height: 50 }} />
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                Клиника Вимас
                            </Typography>
                        </Box>

                        <Typography variant="body2" sx={{ color: "rgba(var(--color-white-rgb), 0.7)", mb: 2, lineHeight: 1.7 }}>
                            Ваше здоровье — наша главная ценность. Мы помогаем людям
                            вернуться к полноценной жизни и избавиться от зависимостей
                            с гарантией результата.
                        </Typography>

                        {/* Социальные сети */}
                        <Box sx={{ display: "flex", gap: 1 }}>
                            <IconButton sx={{ color: "var(--color-white)", "&:hover": { color: "var(--color-primary)" } }}>
                                <Facebook />
                            </IconButton>
                            <IconButton sx={{ color: "var(--color-white)", "&:hover": { color: "var(--color-primary)" } }}>
                                <Instagram />
                            </IconButton>
                            <IconButton sx={{ color: "var(--color-white)", "&:hover": { color: "var(--color-primary)" } }}>
                                <Telegram />
                            </IconButton>
                            <IconButton sx={{ color: "var(--color-white)", "&:hover": { color: "var(--color-primary)" } }}>
                                <YouTube />
                            </IconButton>
                        </Box>
                    </Grid>

                    {/* Колонка 2: Быстрые ссылки */}
                    <Grid size={{ xs: 12, sm: 6, md: 2 }}>
                        <Typography variant="h6" sx={{ mb: 2, fontSize: "1.1rem", fontWeight: 600 }}>
                            О клинике
                        </Typography>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                            {["О нас", "Специалисты", "Лицензии", "Отзывы", "Вакансии"].map((text) => (
                                <Link
                                    key={text}
                                    href="#"
                                    underline="none"
                                    sx={{
                                        color: "rgba(var(--color-white-rgb), 0.7)",
                                        fontSize: "0.95rem",
                                        "&:hover": { color: "var(--color-primary)" },
                                    }}
                                >
                                    {text}
                                </Link>
                            ))}
                        </Box>
                    </Grid>

                    {/* Колонка 3: Услуги */}
                    <Grid size={{ xs: 12, sm: 6, md: 2 }}>
                        <Typography variant="h6" sx={{ mb: 2, fontSize: "1.1rem", fontWeight: 600 }}>
                            Услуги
                        </Typography>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                            {["Лечение алкоголизма", "Лечение наркомании", "Реабилитация", "Детоксикация", "Психотерапия"].map((text) => (
                                <Link
                                    key={text}
                                    href="#"
                                    underline="none"
                                    sx={{
                                        color: "rgba(var(--color-white-rgb), 0.7)",
                                        fontSize: "0.95rem",
                                        "&:hover": { color: "var(--color-primary)" },
                                    }}
                                >
                                    {text}
                                </Link>
                            ))}
                        </Box>
                    </Grid>

                    {/* Колонка 4: Контакты */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Typography variant="h6" sx={{ mb: 2, fontSize: "1.1rem", fontWeight: 600 }}>
                            Контакты
                        </Typography>

                        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                            {/* Телефон */}
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                <Phone sx={{ color: "var(--color-primary)", fontSize: 20 }} />
                                <Box>
                                    <Typography variant="body2" sx={{ color: "rgba(var(--color-white-rgb), 0.5)" }}>
                                        Круглосуточно
                                    </Typography>
                                    <Link href="tel:+74951234567" underline="none" sx={{ color: "var(--color-white)", fontWeight: 500 }}>
                                        +7 (495) 123-45-67
                                    </Link>
                                </Box>
                            </Box>

                            {/* Email */}
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                <Email sx={{ color: "var(--color-primary)", fontSize: 20 }} />
                                <Link href="mailto:info@vimas.ru" underline="none" sx={{ color: "var(--color-white)" }}>
                                    info@vimas.ru
                                </Link>
                            </Box>

                            {/* Адрес */}
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                <LocationOn sx={{ color: "var(--color-primary)", fontSize: 20 }} />
                                <Typography variant="body2" sx={{ color: "rgba(var(--color-white-rgb), 0.8)" }}>
                                    г. Москва, ул. Примерная, д. 123
                                </Typography>
                            </Box>

                            {/* Режим работы */}
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                <AccessTime sx={{ color: "var(--color-primary)", fontSize: 20 }} />
                                <Typography variant="body2" sx={{ color: "rgba(var(--color-white-rgb), 0.8)" }}>
                                    Круглосуточно, без выходных
                                </Typography>
                            </Box>
                        </Box>

                        {/* Кнопка связи */}
                        <Button
                            variant="contained"
                            size="large"
                            fullWidth
                            endIcon={<ArrowForward />}
                            sx={{
                                mt: 3,
                                backgroundColor: "var(--color-primary)",
                                color: "var(--color-white)",
                                "&:hover": {
                                    backgroundColor: "var(--color-primary-dark)",
                                },
                            }}
                        >
                            Связаться с нами
                        </Button>
                    </Grid>
                </Grid>
            </Container>

            {/* Разделитель */}
            <Divider sx={{ backgroundColor: "rgba(var(--color-white-rgb), 0.1)" }} />

            {/* Нижняя часть футера */}
            <Container maxWidth="lg">
                <Box
                    sx={{
                        py: 2,
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 2,
                    }}
                >
                    <Typography variant="body2" sx={{ color: "rgba(var(--color-white-rgb), 0.5)" }}>
                        © {currentYear} Клиника Вимас. Все права защищены.
                    </Typography>

                    <Box sx={{ display: "flex", gap: 3 }}>
                        <Link
                            href="#"
                            underline="none"
                            sx={{ color: "rgba(var(--color-white-rgb), 0.5)", fontSize: "0.85rem", "&:hover": { color: "var(--color-primary)" } }}
                        >
                            Политика конфиденциальности
                        </Link>
                        <Link
                            href="#"
                            underline="none"
                            sx={{ color: "rgba(var(--color-white-rgb), 0.5)", fontSize: "0.85rem", "&:hover": { color: "var(--color-primary)" } }}
                        >
                            Пользовательское соглашение
                        </Link>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}