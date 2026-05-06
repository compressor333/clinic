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
            color: "#4B7BFF",
        },
        {
            icon: <WhatsAppIcon sx={{ fontSize: 32 }} />,
            title: "WhatsApp",
            content: "+7 (999) 123-45-67",
            link: "https://wa.me/79991234567",
            color: "#25D366",
        },
        {
            icon: <TelegramIcon sx={{ fontSize: 32 }} />,
            title: "Telegram",
            content: "@support_help",
            link: "https://t.me/support_help",
            color: "#26A5E4",
        },
        {
            icon: <EmailIcon sx={{ fontSize: 32 }} />,
            title: "Email",
            content: "info@medical-center.ru",
            link: "mailto:info@medical-center.ru",
            color: "#EA4335",
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
                    background: "radial-gradient(circle at 70% 30%, rgba(75, 123, 255, 0.1) 0%, transparent 70%)",
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
                                    background: "linear-gradient(135deg, #4B7BFF 0%, #764ba2 100%)",
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
                                    color: "#666",
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
                                    background: "linear-gradient(90deg, #4B7BFF, #764ba2)",
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
                                            backgroundColor: "rgba(255, 255, 255, 0.95)",
                                            backdropFilter: "blur(10px)",
                                            borderRadius: "20px",
                                            border: "1px solid rgba(75, 123, 255, 0.2)",
                                            transition: "all 0.3s ease",
                                            cursor: "pointer",
                                            "&:hover": {
                                                transform: "translateY(-8px)",
                                                boxShadow: "0 12px 30px rgba(75, 123, 255, 0.2)",
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
                                                background: `linear-gradient(135deg, ${contact.color}20, ${contact.color}40)`,
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
                                                color: "#1a1a1a",
                                            }}
                                        >
                                            {contact.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: "#666",
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
                                        backgroundColor: "rgba(255, 255, 255, 0.95)",
                                        backdropFilter: "blur(10px)",
                                        borderRadius: "24px",
                                        border: "1px solid rgba(75, 123, 255, 0.2)",
                                        height: "100%",
                                    }}
                                >
                                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
                                        <RoomIcon sx={{ color: "#4B7BFF", fontSize: 32 }} />
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
                                                            color: "#4B7BFF",
                                                            mb: 1,
                                                        }}
                                                    >
                                                        {address.city}
                                                    </Typography>
                                                    <Box sx={{ display: "flex", gap: 1, mb: 1, alignItems: "flex-start" }}>
                                                        <LocationOnIcon sx={{ fontSize: 18, color: "#666", mt: 0.3 }} />
                                                        <Typography variant="body2" sx={{ color: "#666" }}>
                                                            {address.address}
                                                        </Typography>
                                                    </Box>
                                                    {address.metro && (
                                                        <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
                                                            <Typography variant="body2" sx={{ color: "#4B7BFF" }}>
                                                                📍
                                                            </Typography>
                                                            <Typography variant="body2" sx={{ color: "#666" }}>
                                                                {address.metro}
                                                            </Typography>
                                                        </Box>
                                                    )}
                                                    <Box sx={{ display: "flex", gap: 1 }}>
                                                        <LocalPhoneIcon sx={{ fontSize: 18, color: "#666" }} />
                                                        <Typography variant="body2" sx={{ color: "#666" }}>
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
                                            borderColor: "#4B7BFF",
                                            color: "#4B7BFF",
                                            borderRadius: "50px",
                                            py: 1.2,
                                            "&:hover": {
                                                borderColor: "#3a62cc",
                                                backgroundColor: "rgba(75, 123, 255, 0.1)",
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
                                        backgroundColor: "rgba(255, 255, 255, 0.95)",
                                        backdropFilter: "blur(10px)",
                                        borderRadius: "24px",
                                        border: "1px solid rgba(75, 123, 255, 0.2)",
                                        height: "100%",
                                    }}
                                >
                                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
                                        <SendIcon sx={{ color: "#4B7BFF", fontSize: 32 }} />
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
                                                        borderColor: "#4B7BFF",
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
                                                background: "linear-gradient(45deg, #4B7BFF 30%, #6E9EFF 90%)",
                                                borderRadius: "50px",
                                                py: 1.5,
                                                fontSize: "1rem",
                                                "&:hover": {
                                                    background: "linear-gradient(45deg, #3A5FCC 30%, #4B7BFF 90%)",
                                                    transform: "translateY(-2px)",
                                                    boxShadow: "0 8px 20px rgba(75, 123, 255, 0.4)",
                                                },
                                                transition: "all 0.3s ease",
                                            }}
                                        >
                                            Отправить сообщение
                                        </Button>
                                    </Box>

                                    <Divider sx={{ my: 3 }} />

                                    <Box sx={{ textAlign: "center" }}>
                                        <Typography variant="body2" sx={{ color: "#666", mb: 2 }}>
                                            Или свяжитесь с нами в соцсетях
                                        </Typography>
                                        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
                                            <IconButton
                                                sx={{
                                                    backgroundColor: "rgba(37, 211, 102, 0.1)",
                                                    color: "#25D366",
                                                    "&:hover": {
                                                        backgroundColor: "#25D366",
                                                        color: "white",
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
                                                    backgroundColor: "rgba(38, 165, 228, 0.1)",
                                                    color: "#26A5E4",
                                                    "&:hover": {
                                                        backgroundColor: "#26A5E4",
                                                        color: "white",
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
                                                    backgroundColor: "rgba(225, 48, 108, 0.1)",
                                                    color: "#E1306C",
                                                    "&:hover": {
                                                        backgroundColor: "#E1306C",
                                                        color: "white",
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
                                backgroundColor: "rgba(75, 123, 255, 0.05)",
                                borderRadius: "20px",
                                textAlign: "center",
                            }}
                        >
                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1, flexWrap: "wrap" }}>
                                <AccessTimeIcon sx={{ color: "#4B7BFF" }} />
                                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                    Режим работы:
                                </Typography>
                                <Typography variant="body1" sx={{ color: "#666" }}>
                                    Ежедневно, круглосуточно | Без выходных
                                </Typography>
                                <Typography variant="body2" sx={{ color: "#4B7BFF", ml: 1 }}>
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