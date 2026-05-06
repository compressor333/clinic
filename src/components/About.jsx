import React from "react";
import {
    Box,
    Container,
    Typography,
    Grid,
    Paper,
    Button,
    Divider,
    Stack,
    IconButton,
    TextField,
    Card,
    CardContent,
    Fade,
    Grow,
    Slide,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import SendIcon from "@mui/icons-material/Send";
import RoomIcon from "@mui/icons-material/Room";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

export default function Contacts() {
    // Контактная информация
    const contactInfo = [
        {
            icon: <PhoneIcon sx={{ fontSize: 32 }} />,
            title: "Телефон",
            content: "+7 (999) 123-45-67",
            link: "tel:+79991234567",
            color: "var(--color-primary)",
            colorRgb: "var(--color-primary-rgb)",
        },
        {
            icon: <WhatsAppIcon sx={{ fontSize: 32 }} />,
            title: "WhatsApp",
            content: "+7 (999) 123-45-67",
            link: "https://wa.me/79991234567",
            color: "var(--color-social-whatsapp)",
            colorRgb: "var(--color-social-whatsapp-rgb)",
        },
        {
            icon: <TelegramIcon sx={{ fontSize: 32 }} />,
            title: "Telegram",
            content: "@support_help",
            link: "https://t.me/support_help",
            color: "var(--color-social-telegram)",
            colorRgb: "var(--color-social-telegram-rgb)",
        },
        {
            icon: <EmailIcon sx={{ fontSize: 32 }} />,
            title: "Email",
            content: "info@medical-center.ru",
            link: "mailto:info@medical-center.ru",
            color: "var(--color-social-email)",
            colorRgb: "var(--color-social-email-rgb)",
        },
    ];

    // Адреса
    const addresses = [
        {
            city: "Москва",
            address: "ул. Тверская, д. 15, офис 301",
            metro: "м. Тверская",
            phone: "+7 (499) 123-45-67",
        },
        {
            city: "Санкт-Петербург",
            address: "Невский проспект, д. 25",
            metro: "м. Невский проспект",
            phone: "+7 (812) 123-45-67",
        },
        {
            city: "Казань",
            address: "ул. Баумана, д. 10",
            metro: "м. Кремлевская",
            phone: "+7 (843) 123-45-67",
        },
    ];

    return (
        <Box
            sx={{
                minHeight: "100vh",
                py: { xs: 8, md: 12 },
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Фоновый градиент */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "radial-gradient(circle at 70% 30%, rgba(var(--color-primary-rgb), 0.1) 0%, transparent 70%)",
                    zIndex: 0,
                }}
            />

            <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
                <Fade in timeout={600}>
                    <Box>
                        {/* Заголовок */}
                        <Slide in direction="up" timeout={650}>
                        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
                            <Typography
                                variant="h2"
                                sx={{
                                    fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                                    fontWeight: 700,
                                    mb: 2,
                                    background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%)",
                                    backgroundClip: "text",
                                    WebkitBackgroundClip: "text",
                                    color: "transparent",
                                }}
                            >
                                Контакты
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: { xs: "1rem", md: "1.2rem" },
                                    color: "var(--color-text-secondary)",
                                    maxWidth: "600px",
                                    mx: "auto",
                                }}
                            >
                                Свяжитесь с нами любым удобным способом.
                                Мы всегда готовы помочь вам!
                            </Typography>
                            <Box
                                sx={{
                                    width: "80px",
                                    height: "4px",
                                    background: "linear-gradient(90deg, var(--color-primary), var(--color-primary-light))",
                                    borderRadius: "2px",
                                    mx: "auto",
                                    mt: 2,
                                }}
                            />
                        </Box>
                        </Slide>

                        {/* Контактные карточки */}
                        <Grid container spacing={3} sx={{ mb: { xs: 6, md: 8 } }}>
                        {contactInfo.map((contact, index) => (
                            <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
                                <Grow
                                    in
                                    timeout={500 + index * 120}
                                    style={{ transformOrigin: "center" }}
                                >
                                    <Paper
                                        elevation={0}
                                        sx={{
                                            p: 3,
                                            textAlign: "center",
                                            backgroundColor: "rgba(var(--color-white-rgb), 0.95)",
                                            backdropFilter: "blur(10px)",
                                            borderRadius: "20px",
                                            border: "1px solid rgba(var(--color-primary-rgb), 0.2)",
                                            transition: "all 0.3s ease",
                                            cursor: "pointer",
                                            "&:hover": {
                                                transform: "translateY(-8px)",
                                                boxShadow: "0 12px 30px rgba(var(--color-primary-rgb), 0.2)",
                                                border: `1px solid ${contact.color}`,
                                            },
                                        }}
                                        onClick={() => window.open(contact.link, "_blank")}
                                    >
                                        <Box
                                            sx={{
                                                width: 70,
                                                height: 70,
                                                borderRadius: "50%",
                                                background: `linear-gradient(135deg, rgba(${contact.colorRgb}, 0.12), rgba(${contact.colorRgb}, 0.24))`,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                mx: "auto",
                                                mb: 2,
                                            }}
                                        >
                                            <Box sx={{ color: contact.color }}>
                                                {contact.icon}
                                            </Box>
                                        </Box>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontWeight: 600,
                                                mb: 1,
                                                color: "var(--color-text)",
                                            }}
                                        >
                                            {contact.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: "var(--color-text-secondary)",
                                                wordBreak: "break-word",
                                            }}
                                        >
                                            {contact.content}
                                        </Typography>
                                    </Paper>
                                </Grow>
                            </Grid>
                        ))}
                    </Grid>

                    <Grid container spacing={4}>
                        {/* Адреса филиалов */}
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Slide in direction="up" timeout={650}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: { xs: 3, md: 4 },
                                        backgroundColor: "rgba(var(--color-white-rgb), 0.95)",
                                        backdropFilter: "blur(10px)",
                                        borderRadius: "24px",
                                        border: "1px solid rgba(var(--color-primary-rgb), 0.2)",
                                        height: "100%",
                                    }}
                                >
                                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
                                        <RoomIcon sx={{ color: "var(--color-primary)", fontSize: 32 }} />
                                        <Typography variant="h5" sx={{ fontWeight: 600 }}>
                                            Наши филиалы
                                        </Typography>
                                    </Box>

                                    <Stack spacing={3}>
                                        {addresses.map((address, index) => (
                                            <Box key={index}>
                                                {index > 0 && <Divider sx={{ my: 2 }} />}
                                                <Box>
                                                    <Typography
                                                        variant="h6"
                                                        sx={{
                                                            fontWeight: 600,
                                                            color: "var(--color-primary)",
                                                            mb: 1,
                                                        }}
                                                    >
                                                        {address.city}
                                                    </Typography>
                                                    <Box sx={{ display: "flex", gap: 1, mb: 1, alignItems: "flex-start" }}>
                                                        <LocationOnIcon sx={{ fontSize: 18, color: "var(--color-text-secondary)", mt: 0.3 }} />
                                                        <Typography variant="body2" sx={{ color: "var(--color-text-secondary)" }}>
                                                            {address.address}
                                                        </Typography>
                                                    </Box>
                                                    {address.metro && (
                                                        <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
                                                            <Typography variant="body2" sx={{ color: "var(--color-primary)" }}>
                                                                📍
                                                            </Typography>
                                                            <Typography variant="body2" sx={{ color: "var(--color-text-secondary)" }}>
                                                                {address.metro}
                                                            </Typography>
                                                        </Box>
                                                    )}
                                                    <Box sx={{ display: "flex", gap: 1 }}>
                                                        <LocalPhoneIcon sx={{ fontSize: 18, color: "var(--color-text-secondary)" }} />
                                                        <Typography variant="body2" sx={{ color: "var(--color-text-secondary)" }}>
                                                            {address.phone}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        ))}
                                    </Stack>

                                    <Button
                                        variant="outlined"
                                        fullWidth
                                        sx={{
                                            mt: 3,
                                            borderColor: "var(--color-primary)",
                                            color: "var(--color-primary)",
                                            borderRadius: "50px",
                                            py: 1.2,
                                            "&:hover": {
                                                borderColor: "var(--color-primary-dark)",
                                                backgroundColor: "rgba(var(--color-primary-rgb), 0.1)",
                                            }
                                        }}
                                    >
                                        Построить маршрут
                                    </Button>
                                </Paper>
                            </Slide>
                        </Grid>

                        {/* Форма обратной связи */}
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Slide in direction="up" timeout={650}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: { xs: 3, md: 4 },
                                        backgroundColor: "rgba(var(--color-white-rgb), 0.95)",
                                        backdropFilter: "blur(10px)",
                                        borderRadius: "24px",
                                        border: "1px solid rgba(var(--color-primary-rgb), 0.2)",
                                        height: "100%",
                                    }}
                                >
                                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
                                        <SendIcon sx={{ color: "var(--color-primary)", fontSize: 32 }} />
                                        <Typography variant="h5" sx={{ fontWeight: 600 }}>
                                            Написать нам
                                        </Typography>
                                    </Box>

                                    <Box component="form" sx={{ mt: 2 }}>
                                        <TextField
                                            fullWidth
                                            label="Ваше имя"
                                            variant="outlined"
                                            sx={{ mb: 2 }}
                                            InputProps={{
                                                sx: {
                                                    borderRadius: "12px",
                                                    "&:hover": {
                                                        borderColor: "var(--color-primary)",
                                                    },
                                                },
                                            }}
                                        />
                                        <TextField
                                            fullWidth
                                            label="Email или телефон"
                                            variant="outlined"
                                            sx={{ mb: 2 }}
                                            InputProps={{
                                                sx: {
                                                    borderRadius: "12px",
                                                },
                                            }}
                                        />
                                        <TextField
                                            fullWidth
                                            label="Сообщение"
                                            variant="outlined"
                                            multiline
                                            rows={4}
                                            sx={{ mb: 3 }}
                                            InputProps={{
                                                sx: {
                                                    borderRadius: "12px",
                                                },
                                            }}
                                        />
                                        <Button
                                            variant="contained"
                                            fullWidth
                                            endIcon={<SendIcon />}
                                            sx={{
                                                background: "linear-gradient(45deg, var(--color-primary) 30%, var(--color-primary-light) 90%)",
                                                borderRadius: "50px",
                                                py: 1.5,
                                                fontSize: "1rem",
                                                "&:hover": {
                                                    background: "linear-gradient(45deg, var(--color-primary-dark) 30%, var(--color-primary) 90%)",
                                                    transform: "translateY(-2px)",
                                                    boxShadow: "0 8px 20px rgba(var(--color-primary-rgb), 0.4)",
                                                },
                                                transition: "all 0.3s ease",
                                            }}
                                        >
                                            Отправить сообщение
                                        </Button>
                                    </Box>

                                    <Divider sx={{ my: 3 }} />

                                    <Box sx={{ textAlign: "center" }}>
                                        <Typography variant="body2" sx={{ color: "var(--color-text-secondary)", mb: 2 }}>
                                            Или свяжитесь с нами в соцсетях
                                        </Typography>
                                        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
                                            <IconButton
                                                sx={{
                                                    backgroundColor: "rgba(var(--color-social-whatsapp-rgb), 0.1)",
                                                    color: "var(--color-social-whatsapp)",
                                                    "&:hover": {
                                                        backgroundColor: "var(--color-social-whatsapp)",
                                                        color: "var(--color-white)",
                                                        transform: "scale(1.1)",
                                                    },
                                                    transition: "all 0.3s ease",
                                                }}
                                                href="https://wa.me/79991234567"
                                                target="_blank"
                                            >
                                                <WhatsAppIcon />
                                            </IconButton>
                                            <IconButton
                                                sx={{
                                                    backgroundColor: "rgba(var(--color-social-telegram-rgb), 0.1)",
                                                    color: "var(--color-social-telegram)",
                                                    "&:hover": {
                                                        backgroundColor: "var(--color-social-telegram)",
                                                        color: "var(--color-white)",
                                                        transform: "scale(1.1)",
                                                    },
                                                    transition: "all 0.3s ease",
                                                }}
                                                href="https://t.me/support_help"
                                                target="_blank"
                                            >
                                                <TelegramIcon />
                                            </IconButton>
                                            <IconButton
                                                sx={{
                                                    backgroundColor: "rgba(var(--color-social-instagram-rgb), 0.1)",
                                                    color: "var(--color-social-instagram)",
                                                    "&:hover": {
                                                        backgroundColor: "var(--color-social-instagram)",
                                                        color: "var(--color-white)",
                                                        transform: "scale(1.1)",
                                                    },
                                                    transition: "all 0.3s ease",
                                                }}
                                                href="https://instagram.com"
                                                target="_blank"
                                            >
                                                <InstagramIcon />
                                            </IconButton>
                                        </Box>
                                    </Box>
                                </Paper>
                            </Slide>
                        </Grid>
                        </Grid>

                        {/* Часы работы */}
                        <Slide in direction="up" timeout={650}>
                        <Paper
                            elevation={0}
                            sx={{
                                mt: 4,
                                p: { xs: 2, md: 3 },
                                backgroundColor: "rgba(var(--color-primary-rgb), 0.05)",
                                borderRadius: "20px",
                                textAlign: "center",
                            }}
                        >
                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1, flexWrap: "wrap" }}>
                                <AccessTimeIcon sx={{ color: "var(--color-primary)" }} />
                                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                    Режим работы:
                                </Typography>
                                <Typography variant="body1" sx={{ color: "var(--color-text-secondary)" }}>
                                    Ежедневно, круглосуточно | Без выходных
                                </Typography>
                                <Typography variant="body2" sx={{ color: "var(--color-primary)", ml: 1 }}>
                                    Анонимно | Конфиденциально
                                </Typography>
                            </Box>
                        </Paper>
                        </Slide>
                    </Box>
                </Fade>
            </Container>
        </Box>
    );
}